
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
   <div class="profile-name">${o.name}</div>
   <div class="profile-email"><strong>Email</strong>: ${o.email}</div>
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


const makeCoffeePopup = o=>`
<div class="display-flex">
<div>
   <img src="${o.img}" alt="" style="width:100px;height:100px">
</div>
<div style="padding-left:1em">
   <div class="profile-name">${o.name}</div>
   <div><strong>Type</strong>: ${o.type}</div>
   <div><strong>Rating</strong>: ${o.rating}</div>
</div>
</div>
<div>
<a href="#" class="form-button js-coffee-jump" data-id="${o.coffee_id}">Visit</a> 
</div>`;



const FormControl = ({namespace,name,displayname,type,placeholder,value}) => {
   return `<div class="form-control">
      <label for="${namespace}-${name}" class="form-label">${displayname}</label>
      <input id="${namespace}-${name}" type="${type}" class="form-input" data-role="none" placeholder="${placeholder}" value="${value}">
   </div>`;
}


const makeCoffeeProfileUpdateForm = o => `
${FormControl({
   namespace:"coffee-edit",
   name:"name",
   displayname:"Name",
   type:"text",
   placeholder:"Type A Coffee Name",
   value:o.name
})}
${FormControl({
   namespace:"coffee-edit",
   name:"type",
   displayname:"Type",
   type:"text",
   placeholder:"Type A Coffee Type",
   value:o.type
})}
${FormControl({
   namespace:"coffee-edit",
   name:"rating",
   displayname:"rating",
   type:"text",
   placeholder:"Type Coffee Rating",
   value:o.rating
})}
`;

const makeUserProfileUpdateForm = o => `
<form id="user-edit-form" data-ajax="false" style="padding:1em">
${FormControl({
   namespace:"user-edit",
   name:"username",
   displayname:"Username",
   type:"text",
   placeholder:"Type Your Username",
   value:o.username
})}
${FormControl({
   namespace:"user-edit",
   name:"name",
   displayname:"Full Name",
   type:"text",
   placeholder:"Type Your Full Name",
   value:o.name
})}
${FormControl({
   namespace:"user-edit",
   name:"email",
   displayname:"Email",
   type:"text",
   placeholder:"Type Your Email",
   value:o.email
})}
</form>
`;