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
         return makeQuery($c,"SELECT * FROM track_coffee WHERE id = ?",$p);
      case "location_by_id":
         return makeQuery($c,"SELECT * FROM track_locations WHERE id = ?",$p);


      case "coffee_by_user_id":
         return makeQuery($c,"SELECT * FROM track_coffee WHERE user_id = ?",$p);
      case "locations_by_coffee_id":
         return makeQuery($c,"SELECT * FROM track_locations WHERE coffee_id = ?",$p);


      //case "recentcoffee_by_location":
         //return makeQuery($c,"SELECT coffee_id, x.lat, x.lng FROM track_locations WHERE (coffee_id, date_create) in (SELECT coffee_id, max(date_create)  FROM track_locations GROUP BY  coffee_id)",$p;



      case "check_signin":
         return makeQuery($c,"SELECT * FROM track_users WHERE username = ? AND password = md5(?)",$p);

      default: return ["error"=>"No Matched type"];
   }
}

 
 $data = json_decode(file_get_contents("php://input"));


echo json_encode(
   makeStatement($data),
   JSON_NUMERIC_CHECK
);