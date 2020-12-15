


const makeCoffeeList = templater (o=>`
   <a class="coffeelist-item js-coffee-jump" data-id="${o.id}">
      <div class="coffeelist-image">
         <img src="${o.img}" alt="">
      </div>
      <div class="coffeelist-description">
         <div class="coffeelist-name"><strong> Coffee Name: </strong>${o.name}</div>
         <div class="coffeelist-type"><strong>Type: </strong> ${o.type}</div>
         <div class="coffee-bean">
           Rating:&nbsp <img src="./lib/images/coffee_rating_${o.rating}.svg">
         </div>
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
<div class="coffee-profile-page-rating">
   <img src="./lib/images/coffee_rating_${o.rating}.svg">
</div>
<div class="overscroll coffee-desc"> 
      <p>
      <ul class="no-bullets">
         <li class="coffee-des-list"><strong>Coffee Name: </strong>${o.name}</li>
         <li class="coffee-des-list"><strong>Coffee Type: </strong>${o.type}</li>
         <li class="coffee-des-list"><strong>Date Created: </strong>${o.R_DATE}</li>
      </ul>
      </p>
</div>
`);



const makeCoffeePopup = o=>`
<a href="#" class="js-coffee-jump" data-id="${o.coffee_id}">
   <div class="display-flex">
      <div class="coffee-thumbnail">
         <img src="${o.img}" alt="${o.type}">
      </div>
      <div class="coffee-pop">
         <div class="coffee-name">${o.name}</div>
         <div class="coffee-type">${o.type}</div>
         <div class="coffee-profile-page-rating">
            <img src="./lib/images/coffee_rating_${o.rating}.svg">
         </div>
      </div>
   </div>
</a>
`;
const makeLocationPopup = o=>`
<a href="#" class="js-location-jump" data-id="${o.id}">
   <div class="coffee-name">${o.coffee_shop}</div>
   <div class="coffee-description">$${o.description}</div>
</a>
`;



const FormControl = ({namespace,name,displayname,type,placeholder,value}) => {
   return `<div class="form-control">
      <label for="${namespace}-${name}" class="form-label">${displayname}</label>
      <input id="${namespace}-${name}" type="${type}" class="form-input" data-role="none" placeholder="${placeholder}" value="${value}">
   </div>`;
}


const makeCoffeeProfileUpdateForm = o => `
<div class="modal" id="coffee-delete-modal">
         <div class="modal-back" data-deactivate="#coffee-delete-modal"></div>
         <div class="modal-popup">
            <div class="modal-body">
               Are you sure, you want to delete the coffee? Once, it is done it cannot be undone.<br/><br/>
               <div class="coffee_modal_select delete flex-none" data-deactivate="#coffee-delete-modal"><a href="#" class="js-coffee-delete" data-id="${o.id}">Yes, delete it.</a></div>
               <div class="coffee_modal_select flex-none" data-deactivate="#coffee-delete-modal"><a href="#">No, Don't Delete</a></div>
            </div>
         </div>
      </div>
<div>
   <input type="hidden" id="coffee-edit-upload-file" value="${o.img}">
   <label class="coffee-image-upload pic picked" style="background-image:url('${o.img}')">
      <input type="file" data-role="none" id="coffee-edit-upload-file">
   </label>
</div>
<div class="padding-top">
   <a href="#" class="form-button delete_modal" data-activate="#coffee-delete-modal">Delete Coffee Profile</a>
</div>
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
<div class="form-control">
   <label for="list-add-rating" class="form-label">Rating</label>
         <div class="form-select">
            <select class="list-add-rating" id="coffee-edit-rating" data-role="none">
                        <option selected class="type-rating">${o.rating}</option>
                         <option>1</option>
                         <option>2</option>
                         <option>3</option>
                         <option>4</option>
                         <option>5</option>
            </select>
         </div>
</div>
`;







const makeUserProfileEditForm = o => `


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
   name:"username",
   displayname:"Username",
   type:"text",
   placeholder:"Create Your Username",
   value:o.username
})}
${FormControl({
   namespace:"user-edit",
   name:"email",
   displayname:"Email",
   type:"text",
   placeholder:"Type Your Email",
   value:o.email
})}

`;
const makeUploaderImage = (el,name,folder='') => {
   $(el).parent().css({'background-image':`url('${folder+name}')`}).addClass("picked")
      .prev().val(folder+name)
}

const makeCoffeeLocations = o=>`
<div class="coffee-locations-added">${o.length} Locations Added</div>
`;


