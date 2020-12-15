<?php


function makeConn() {
   include_once "auth.php";
   try {
      $conn = new PDO(...Auth());
      $conn->setAttribute(
         PDO::ATTR_ERRMODE,
         PDO::ERRMODE_EXCEPTION
      );
   } catch(PDOException $e) {
      die($e->getMessage());
   }
   return $conn;
}


function fetchAll($r) {
   $a = [];
   while($row = $r->fetch(PDO::FETCH_OBJ))
      $a[] = $row;
   return $a;
}


// connection, prepared statement, parameters
function makeQuery($c,$ps,$p, $makeResults=true) {
   try {


      if(count($p)) {
         $stmt = $c->prepare($ps);
         $stmt->execute($p);
      } else {
         $stmt = $c->query($ps);
      }

      $r = $makeResults ? fetchAll($stmt) : [];

      return [
         "result"=>$r
      ];

   } catch(PDOException $e) {
      return [
         "error"=>"Query Failed: ".$e->getMessage()
      ];
   }
}

function makeUpload($file,$folder) {
   $filename = microtime(true) . "_" . $_FILES[$file]['name'];

   if(@move_uploaded_file(
      $_FILES[$file]['tmp_name'],
      $folder.$filename
   )) return ['result'=>$filename];
   else return [
      "error"=>"File Upload Failed",
      "_FILES"=>$_FILES,
      "filename"=>$filename
   ];
}

function makeStatement($data) {
   $c = makeConn();
   $t = @$data->type;
   $p = @$data->params;

   switch($t) {

      case "users_all":
         return makeQuery($c,"SELECT * FROM track_users",[]);
      case "coffees_all":
         return makeQuery($c,"SELECT * FROM track_coffee",[]);
      case "locations_all":
         return makeQuery($c,"SELECT * FROM track_locations",[]);


      case "user_by_id":
         return makeQuery($c,"SELECT * FROM track_users WHERE id = ?",$p);
      case "coffee_by_id":
         return makeQuery($c,"SELECT t.*,DATE(t.date_create) as R_DATE FROM track_coffee t WHERE t.id = ?",$p);
      case "location_by_id":
         return makeQuery($c,"SELECT * FROM track_locations WHERE id = ?",$p);


      case "coffee_by_user_id":
         return makeQuery($c,"SELECT * FROM track_coffee WHERE user_id = ?",$p);
      case "locations_by_coffee_id":
         return makeQuery($c,"SELECT * FROM track_locations WHERE coffee_id = ?",$p);

      case "recent_locations":
         return makeQuery($c,"SELECT * FROM
            `track_coffee` a
           LEFT JOIN (
               SELECT * FROM `track_locations`
               ORDER BY `date_create` DESC
            ) l
            ON a.id = l.coffee_id
            WHERE user_id= ?
            GROUP BY l.coffee_id
            ",$p);

      case "check_signin":
         return makeQuery($c,"SELECT * FROM `track_users` WHERE `username` = ? AND `password` = md5(?)",$p);

      // CURD // INSERT

      case "insert_user":
         $r = makeQuery($c,"SELECT * FROM `track_users` WHERE `username` = ? OR `email` = ?",[$p[0],$p[1]]);
         if(count($r['result'])) return ['error'=>"Username or Email already exists"];

         $r = makeQuery($c,"INSERT INTO `track_users`(`name`,`username`,`email`,`password`,`img`,   `phone`,`gender`, `date_create`)
            VALUES
            (' ',?, ?, md5(?), 'https://via.placeholder.com/400/?text=USER',' ',' ',NOW()) ",$p,false);
         return ["id"=>$c->lastInsertId()];

      // CRUD Coffee // CREATE Coffee
      case "insert_coffee":
         $r = makeQuery($c,"INSERT INTO
            `track_coffee`
            (`user_id`,`name`,`type`,`img`,`rating`,`date_create`)
            VALUES
            (?, ?, ?, ?, ?, NOW())
            ",$p,false);
         return ["id"=>$c->lastInsertId()];  


      // UPDATE Coffee

      case "update_coffee":
         $r = makeQuery($c,"UPDATE
            `track_coffee`
            SET
               `name` = ?,
               `type` = ?,
               `rating` = ?,
               `img` = ?
            WHERE `id` = ?
            ",$p,false);
         return ["result"=>"success"];

      // DELETE Coffee

      case "delete_coffee":
         return makeQuery($c,"DELETE FROM `track_coffee` WHERE `id` = ?",$p,false);

      // LOCATIONS

      // CREATE LOCATION

      case "insert_location":
         $r = makeQuery($c,"INSERT INTO
            `track_locations`
            (`coffee_id`,`lat`,`lng`,`coffee_shop`,`description`,`date_create`)
            VALUES
            (?, ?, ?, ?, ? , NOW())
            ",$p,false);
         return ["id"=>$c->lastInsertId()];   


       // UPDATE USER

      case "update_user":
         $r = makeQuery($c,"UPDATE
            `track_users`
            SET
               `name` = ?,
               `username` = ?,
               `email` = ?
            WHERE `id` = ?
            ",$p,false);
         return ["result"=>"success"];

      // UPDATE USER IMAGE

      case "update_user_image":
         $r = makeQuery($c,"UPDATE
            `track_users`
            SET
               `img` = ?
            WHERE `id` = ?
            ",$p,false);
         return ["result"=>"success"];

      default: return ["error"=>"No Matched type"];
   }
}

     

  



   




if(!empty($_FILES)) {
   $r = makeUpload("image","../uploads/");
   die(json_encode($r));
}


$data = json_decode(file_get_contents("php://input"));


echo json_encode(
   makeStatement($data),
   JSON_NUMERIC_CHECK
);