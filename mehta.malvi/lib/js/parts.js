
const makeCoffeeList = templater (o=>`
   <a class="coffeelist-item js-coffee-jump" data-id="${o.id}">
      <div class="coffeelist-image">
         <img src="${o.img}" alt="">
      </div>
      <div class="coffeelist-description">
         <div class="coffeelist-name"><strong> Coffee Name: </strong>${o.name}</div>
         <div class="coffeelist-type"><strong>Type: </strong> ${o.type}</div>
         <div class="coffeelist-ratings"><strong>Ratings: </strong> ${o.rating}</div>
      </div>
      </a>
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
`);

const makeCoffeeProfile = templater (o=>`
<div class="profile-image">
   <img src="${o.img}" alt="">
</div>
<div class="overscroll coffee-desc"> 
      <p><ul class="no-bullets"><li class="coffee-des-list"><strong>Coffee Name: </strong>${o.name}</li>
         <li class="coffee-des-list"><strong>Coffee Type: </strong>${o.type}</li>
         <li class="coffee-des-list"><strong>Coffee Rating: </strong>${o.rating}</li>
         </ul>
       </p>
</div>
`);