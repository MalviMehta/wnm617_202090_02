
const makeCoffeeList = templater (o=>`
      <div class="coffeelist-item"data-id="${o.id}">
         <div class="coffeelist-image">
         <img src="${o.img}" alt="">
         </div>
      <div class="coffeelist-description">
      <div class="coffeelist-name">${o.name}</div>
      <div class="coffeelist-type">${o.type}</div>
      <div class="coffeelist-place"><strong>${o.place}></div>
      <div class="coffeelist-ratings"><strong></strong> ${o.ratings}</div>
      </div>
  
`);

const makeUserProfile = templater (o=>`
<div class="profile-image">
   <img src="${o.img}" alt="">
</div>
<div class="profile-body">
            <div class="profile-name"><strong>Name: Kevin Johnson</strong></div>
            <div class="profile-email"><strong>Email</strong>: Kjohnson@gmail.com</div>
         </div>
         <p><a href="#settings-page"></a></p>
      </div>
  </div>
`);
