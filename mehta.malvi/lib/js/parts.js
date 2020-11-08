
const makeCoffeeList = templater(o=>`
<div class="coffeelist-item js-coffee-jump" data-id="${o.id}">
   <div class="coffeelist-image">
      <img src="${o.img}" alt="">
   </div>
   <div class="coffeelist-description">
      <div class="coffeelist-name">${o.name}</div>
      <div class="coffeelist-type"><strong>type</strong> ${o.type}</div>
      <div class="coffeelist-ratings"><strong>ratings</strong> ${o.ratings}</div>
   </div>
</div>
`);


const makeUserProfile = templater(o=>`
<div class="profile-image">
   <img src="${o.img}" alt="">
</div>
<div class="profile-body">
   <div class="profile-name">${o.name}</div>
   <div class="profile-email"><strong>Email</strong>: ${o.email}</div>
</div>
<p><a href="#settings-page">Settings</a></p>
`);

const makeCoffeeProfile = templater(o=>`
<div class="profile-image">
   <img src="${o.img}" alt="">
</div>
<div class="profile-body">
   <div class="profile-name">${o.name}</div>
   <div class="profile-type"><strong>Type</strong>: ${o.type}</div>
   <div class="profile-ratings"><strong>ratings</strong>: ${o.ratings}</div>
</div>
`);