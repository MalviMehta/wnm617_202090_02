

// Document Ready
$(()=>{

   //console.dir($("#user-edit-form")[0])


   checkUserId();

   $(document)



      // ROUTES
   .on("pagecontainerbeforeshow",function(e,ui){
      console.log(ui.toPage[0].id)

      // Routing
      switch(ui.toPage[0].id) {
         case 'recent-page': RecentPage(); break;
         case 'list-page': ListPage(); break;
         case 'user-profile-page': UserProfilePage(); break;
         case 'coffee-profile-page': CoffeeProfilePage(); break;
         case 'coffee-profile-edit-page': CoffeeProfileEditPage(); break;
         case 'user-profile-edit-page': UserProfileEditPage(); break;
         case 'user-upload-page': UserUploadPage(); break;
         case 'location-add-page': LocationAddPage(); break;
      }
   })





   /* FORM SUBMISSIONS */

   // event delegation
   .on("submit","#signin-form",function(e){
      e.preventDefault();
      checkSigninForm();
   })

   .on("submit","#signup-form",function(e){
      e.preventDefault();
      checkSignupForm();
   })
   .on("click",".js-coffee-add",function(e){
      checkListAddForm();
    })
    .on("click",".js-coffee-edit",function(e){
      checkCoffeeEditForm();
    })

    .on("click",".js-user-profile-edit",function(e){
      checkUserProfileEditForm();
    })
    .on("click",".js-location-add",function(e){
      checkLocationAddForm();
   })


  /* .on("submit","#list-search-form",function(e){
      e.preventDefault();
      checkSearchForm();
   })



   /* ANCHOR CLICKS */

   .on("click",".js-logout",function(e){
      sessionStorage.removeItem('userId');
      checkUserId();
   })

   .on("click",".js-coffee-jump",function(e){
      sessionStorage.coffeeId = $(this).data("id");
      $.mobile.navigate("#coffee-profile-page");
   })
  .on("change",".coffee-image-upload input",function(e){
      checkUpload(this.files[0])
        .then(d=>{
          console.log(d)
          makeUploaderImage(this,d.result,'uploads/')
        })
    })
  .on("click",".js-coffee-delete",function(e){
         checkCoffeeDelete($(this).data("id"));
    })

.on("click",".js-location-add", function(e){
      // e.preventDefault();
      checkLocationAddForm();
   })

.on("click",".js-location-jump",function(e){
      sessionStorage.locationId = $(this).data("id");
         $.mobile.navigate("#location-profile-page");
    })







   .on("click",".filter",function(e){
      checkFilterRow($(this).data());
    })

   .on("click","[data-activate]",function(){
      let target = $(this).data('activate');
      $(target).addClass("active");
   })
   .on("click","[data-deactivate]",function(){
      let target = $(this).data('deactivate');
      $(target).removeClass("active");
   })
   .on("click","[data-toggle]",function(){
      let target = $(this).data('toggle');
      $(target).toggleClass("active");
   })
   





   $("[data-template]").each(function(){
      let target = $(this).data("template");
      let template = $(target).html();
      $(this).html(template);
   })

})