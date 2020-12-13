//const RecentPage = async() => {}

const RecentPage = async() => {

   let d = await query({
      type:'recent_locations',
      params:[sessionStorage.userId]
   });
   console.log(d)


let valid_coffee = d.result.reduce((r,o)=>{
      o.icon = o.img;
      if(o.lat && o.lng) r.push(o);
      return r;
   },[]) 



   let map_el = await makeMap("#recent-page .map");

   console.log(map_el.data('map'))

   //console.log(map_el)

   makeMarkers(map_el,valid_coffee);
   // makeMarkers(map_el,[]);

   map_el.data("markers").forEach((o,i)=>{
      o.addListener("click",function(){

         // ACTIVATE EXAMPLE
         $("#recent-coffee-modal").addClass("active");
         $("#recent-coffee-modal .modal-body")
            .html(makeCoffeePopup(valid_coffee[i]))
      })
   })
}


// async and await
const ListPage = async() => {
   let d = await query({
      type:'coffee_by_user_id',
      params:[sessionStorage.userId]
   });

   console.log(d)

    $("#list-page .coffeelist").html(makeCoffeeList(d.result));
}

const UserProfilePage = async() => {
   let d = await query({
      type:'user_by_id',
      params:[sessionStorage.userId]
   });

   console.log(d)

   $("#user-profile-page .profile").html(makeUserProfile(d.result));
}

const UserProfileEditPage = async() => {
   query({
      type:'user_by_id',
      params:[sessionStorage.userId]
   }).then(d=>{
      console.log(d)

      $("#user-profile-edit-page [data-role='main']")
         .html(makeUserProfileUpdateForm(d.result[0]));
   });
}






const CoffeeProfilePage = async() => {
   let d = await query({
      type:'coffee_by_id',
      params:[sessionStorage.coffeeId]
   });

   console.log(d)

   $("#coffee-profile-page .profile").html(makeCoffeeProfile(d.result));


   makeMap("#coffee-profile-page .map")
}



   
const CoffeeProfileEditPage = async() => {
   query({
      type:'coffee_by_id',
      params:[sessionStorage.coffeeId]
   }).then(d=>{
      console.log(data)
      $("#coffee-edit-form").html(makeCoffeeProfileUpdateForm(d.result[0]));
   });
}