const RecentPage = async() => {}

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

const CoffeeProfilePage = async() => {
   let d = await query({
      type:'coffee_by_id',
      params:[sessionStorage.coffeeId]
   });

   console.log(d)

   $("#coffee-profile-page .profile").html(makeCoffeeProfile(d.result));
}