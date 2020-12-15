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


         // Coffee info popup
         // ACTIVATE EXAMPLE
         map_el.data("infoWindow")
            .open(map_el.data("map"),o);
         map_el.data("infoWindow")
            .setContent(makeCoffeePopup(valid_coffee[i]));
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
         .html(makeUserProfileEditForm(d.result[0]));
   });
}






const CoffeeProfilePage = async() => {
   let d = await query({
      type:'coffee_by_id',
      params:[sessionStorage.coffeeId]
   }).then(d=>{
      console.log(d)


   $("#coffee-profile-page .profile").html(makeCoffeeProfile(d.result));
 
 });
query({
      type:'locations_by_coffee_id',
      params:[sessionStorage.coffeeId]
   }).then(d=>{

      $("#coffee-profile-page .coffee-locations")
         .html(makeCoffeeLocations(d.result));

      let valid_locations = d.result.reduce((r,o)=>{
         if(o.lat && o.lng) r.push(o);
         return r;
      },[])

      makeMap("#coffee-profile-page .map").then(map_el=>{
         makeMarkers(map_el,d.result);

         map_el.data("markers").forEach((o,i)=>{
            o.addListener("click", function(){
               // console.log("click")

               map_el.data("infoWindow")
                  .open(map_el.data("map"),o);
               map_el.data("infoWindow")
                  .setContent(makeLocationPopup(valid_locations[i]));
            })
         })

      })
   }) 

}

   
const LocationAddPage = async() => {
   let map_el = await makeMap("#location-add-page .map");
   makeMarkers(map_el,[]);

   let map = map_el.data("map");

   map.addListener("click",function(e){
      console.log(e, map.getCenter())

      let posFromClick = {
         lat:e.latLng.lat(),
         lng:e.latLng.lng(),
         icon:"./lib/images/coffeepin.svg"
      };
      let posFromCenter = {
         lat:map.getCenter().lat(),
         lng:map.getCenter().lng(),
         icon:"./images/coffeepin.svg"
      };

      $("#location-add-lat").val(posFromClick.lat)
      $("#location-add-lng").val(posFromClick.lng)

      makeMarkers(map_el,[posFromClick])
   })
}
















   
const CoffeeProfileEditPage = async() => {
   query({
      type:'coffee_by_id',
      params:[sessionStorage.coffeeId]
   }).then(d=>{
      console.log(d)
      $("#coffee-edit-form").html(makeCoffeeProfileUpdateForm(d.result[0]));
   });
}