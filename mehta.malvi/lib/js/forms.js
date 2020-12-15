
const checkSignupForm = () => {
	let username = $("#signup-username").val();
	let email = $("#signup-email").val();
	let password = $("#signup-password").val();
	let passwordconfirm = $("#signup-password-confirm").val();

	 if(password!=passwordconfirm) {
      throw "Passwords don't match";
   } else {
      query({type:'insert_user',params:[username,email,password]})
      .then(d=>{
         if(d.error) {
            throw d.error;
         }
         console.log(d.id)
         $.mobile.navigate("#recent-page");
      })
   }
}

const checkListAddForm = () => {
   let name = $("#list-add-name").val();
   let type = $("#list-add-type").val();
   let rating = $("#list-add-rating").val();
   let img = $("#coffee-add-upload").val();
   query({
      type:'insert_coffee',
      params:[sessionStorage.userId,name,type,img,rating]})
   .then(d=>{
      if(d.error) {
         throw d.error;
      }
      console.log(d.id)
   $(document).ready(function() {
      $("#list-add-form")[0].reset();
      $("#coffee-add-upload").val('');
      $("#list-add-modal").hide(true);

   });
      
      sessionStorage.coffeeId = d.id;
      $.mobile.navigate($("#coffee-add-destination").val());
   })
}
const checkCoffeeEditForm = () => {
   let name = $("#coffee-edit-name").val();
   let type = $("#coffee-edit-type").val();
   let rating = $("#coffee-edit-rating").val();
   let img = $("#coffee-edit-upload-file").val();
   query({
      type:'update_coffee',
      params:[name,type,rating,img,sessionStorage.coffeeId]})
   .then(d=>{
      if(d.error) {
         throw d.error;
      }
      window.history.back();
   })
}
const checkUpload = file => {
   let fd = new FormData();
   fd.append("image",file);

   return fetch('data/api.php',{
      method:'POST',
      body:fd
   }).then(d=>d.json())
}
const checkCoffeeDelete = id => {
   query({
      type:'delete_coffee',
      params:[id]
   }).then(d=>{
      if(d.error) {
         throw d.error;
      }
      window.history.go(-2);
   });
}







const checkUserProfileEditForm = () => {
   let username = $("#user-edit-username").val();
   let name = $("#user-edit-name").val();
   let email = $("#user-edit-email").val();

   query({
      type:'update_user',
      params:[name,username,email,sessionStorage.userId]})
   .then(d=>{
      if(d.error) {
         throw d.error;
      }
      console.log(d.id)
         $.mobile.navigate("#user-profile-page");
   })
}



const checkLocationAddForm = () => {
   let lat = $("#location-add-lat").val();
   let lng = $("#location-add-lng").val();
   let coffee_shop = $("#location-add-cafename").val();
   let description = $("#location-add-description").val();

   query({
      type:'insert_location',
      params:[sessionStorage.coffeeId,lat,lng,coffee_shop,description]})
   .then(d=>{
      if(d.error) {
         throw d.error;
      }
      console.log(d.id)
      $("#location-add-form")[0].reset();
      $.mobile.navigate("#recent-page");
   })
}

