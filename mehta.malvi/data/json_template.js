// https://json-generator.com
// https://konbert.com/convert



// USER TEMPLATE
[
  '{{repeat(10)}}',
  {
    id: '{{index(1)}}',
    name: '{{firstName()}} {{surname()}}',
    username: function(){
      return 'user' + this.id;
    },
    email: function(){
      return this.username + '@gmail.com';
    },
    password: 'md5(pass)',
    
    
    
    img: function(tags) {
      return 'https://via.placeholder.com/400/' +
        tags.integer(700,999) +
        '/fff/?text=' +
        this.username;
    },
    date_create: '{{date(new Date(2020, 0, 1), new Date(), "YYYY-MM-dd hh:mm:ss")}}'
  }
]



// ANIMAL TEMPLATE
[
  '{{repeat(50)}}',
  {
    id: '{{index(1)}}',
    user_id:'{{integer(1,10)}}',
    
    name: '{{company()}}',
    
    
    type: '{{random("dog","horse","cat")}}',
    breed: function(tags) {
      var breeds = {
        "dog":["labrador","pitbull","dachsund","yorkie"],
        "horse":["shetland","andalusian","unicorn"],
        "cat":["calico","ginger","jellicle","tuxedo","siamese"]
      };
      var chosen_type = breeds[this.type];
      var chosen_index = tags.integer(0,chosen_type.length-1);
      return chosen_type[chosen_index];
    },
    
    description: '{{lorem(3, "sentences")}}',
    
    img: function(tags) {
      return 'https://via.placeholder.com/400/' +
        tags.integer(700,999) +
        '/fff/?text=' +
        this.name;
    },
    date_create: '{{date(new Date(2020, 0, 1), new Date(), "YYYY-MM-dd hh:mm:ss")}}'
  }
]

// USER TEMPLATE
[
  '{{repeat(50)}}',
  {
    id: '{{index(1)}}',
    name: '{{firstName()}} {{surname()}}',
    username: function(){
      return 'user' + this.id;
    },
    email: function(){
      return this.username + '@gmail.com';
    },
    password: 'md5(pass)',
    
    
    
    img: function(tags) {
      return 'https://via.placeholder.com/400/' +
        tags.integer(700,999) +
        '/fff/?text=' +
        this.username;
    },
    date_create: '{{date(new Date(2020, 0, 1), new Date(), "YYYY-MM-dd hh:mm:ss")}}'
  }
]
// User Templete
[
  '{{repeat(50)}}',
  {
    id: '{{index(1)}}',
    name: '{{firstName()}} {{surname()}}',
    username: function(){
      return 'user' + this.id;
    },
    email: function(){
      return this.username + '@gmail.com';
    },
    password: 'md5(pass)',
    
    phone: '+1 {{phone()}}',
    Gender: '{{gender()}}',
    
    img: function(tags) {
      return 'https://via.placeholder.com/400/' +
        tags.integer(700,999) +
        '/fff/?text=' +
        this.username;
    },
    date_create: '{{date(new Date(2020, 0, 1), new Date(), "YYYY-MM-dd hh:mm:ss")}}'
  }
]


// COFFEE TEMPLATE
[
  '{{repeat(50)}}',
  {
    id: '{{index(1)}}',
    user_id:'{{integer(1,10)}}',
    name: '{{random("Manhattan Mocha","Latte","The Java Break","Wide Awake Cafe","Brew Culture","Elemental Coffee","The Molecule Effect","Brewed Awakening","Beauty Mug","Modern Leaf","The love Point","Honey Coffee")}}',
    type: '{{random("Frappucino","Latte","Macchiato","Americano","Irish","Mocha","Espresso","Cocoa","Cappuccino","Fredo","Chocolate","Glace")}}',
    rating:'{{integer(1,5)}}'
  }
  
]

// Location Templete

[
  '{{repeat(50)}}',
  {
    id: '{{index(1)}}',
    coffee_id:'{{integer(1,50)}}',
    
    coffee_shop:'{{random("Big Mug Roaster","Nirvana Soul","Spectra Coffee")}}',
    lat: '{{floating(37.795173,37.650974)}}',
    lng: '{{floating(-122.520006,-122.355426)}}',
    
    photo: 'https://via.placeholder.com/400/',
    icon: 'https://via.placeholder.com/100/?text=ICON',
    
    date_create: '{{date(new Date(2020, 0, 1), new Date(), "YYYY-MM-dd hh:mm:ss")}}'
  }
]








// LOCATION TEMPLATE
[
  '{{repeat(250)}}',
  {
    id: '{{index(1)}}',
    animal_id:'{{integer(1,50)}}',
    
    
    lat: '{{floating(37.795613,37.703208)}}',
    lng: '{{floating(-122.508764,-122.381666)}}',
    
    
    description: '{{lorem(3, "sentences")}}',
    
    photo: 'https://via.placeholder.com/400/',
    icon: 'https://via.placeholder.com/100/?text=ICON',
    
    date_create: '{{date(new Date(2020, 0, 1), new Date(), "YYYY-MM-dd hh:mm:ss")}}'
  }
]








[
  '{{repeat(5, 7)}}',
  {
    _id: '{{objectId()}}',
    index: '{{index()}}',
    guid: '{{guid()}}',
    isActive: '{{bool()}}',
    balance: '{{floating(1000, 4000, 2, "$0,0.00")}}',
    picture: 'http://placehold.it/32x32',
    age: '{{integer(20, 40)}}',
    eyeColor: '{{random("blue", "brown", "green")}}',
    name: '{{firstName()}} {{surname()}}',
    gender: '{{gender()}}',
    company: '{{company().toUpperCase()}}',
    email: '{{email()}}',
    phone: '+1 {{phone()}}',
    address: '{{integer(100, 999)}} {{street()}}, {{city()}}, {{state()}}, {{integer(100, 10000)}}',
    about: '{{lorem(1, "paragraphs")}}',
    registered: '{{date(new Date(2014, 0, 1), new Date(), "YYYY-MM-ddThh:mm:ss Z")}}',
    latitude: '{{floating(-90.000001, 90)}}',
    longitude: '{{floating(-180.000001, 180)}}',
    tags: [
      '{{repeat(7)}}',
      '{{lorem(1, "words")}}'
    ],
    friends: [
      '{{repeat(3)}}',
      {
        id: '{{index()}}',
        name: '{{firstName()}} {{surname()}}'
      }
    ],
    greeting: function (tags) {
      return 'Hello, ' + this.name + '! You have ' + tags.integer(1, 10) + ' unread messages.';
    },
    favoriteFruit: function (tags) {
      var fruits = ['apple', 'banana', 'strawberry'];
      return fruits[tags.integer(0, fruits.length - 1)];
    }
  }







// Malvi's Cuppa Trace

  // User Templete
[
  '{{repeat(10)}}',
  {
    id: '{{index(1)}}',
    name: '{{firstName()}} {{surname()}}',
    username: function(){
      return 'user' + this.id;
    },
    email: function(){
      return this.username + '@gmail.com';
    },
    password: 'md5(pass)',
    
    phone: '+1 {{phone()}}',
    Gender: '{{gender()}}',
    
    img: function(tags) {
      return 'https://via.placeholder.com/400/' +
        tags.integer(700,999) +
        '/fff/?text=' +
        this.username;
    },
    date_create: '{{date(new Date(2020, 0, 1), new Date(), "YYYY-MM-dd hh:mm:ss")}}'
  }
]


// COFFEE TEMPLATE

[
  '{{repeat(50)}}',
  {
    id: '{{index(1)}}',
    user_id:'{{integer(1,10)}}',
    name: '{{random("Manhattan Mocha","Latte","The Java Break","Wide Awake Cafe","Brew Culture","Elemental Coffee","The Molecule Effect","Brewed Awakening","Beauty Mug","Modern Leaf","The love Point","Honey Coffee")}}',
    type: '{{random("Frappucino","Latte","Macchiato","Americano","Irish","Mocha","Espresso","Cocoa","Cappuccino","Fredo","Chocolate","Glace")}}',
    img: function(tags) {
      return 'https://via.placeholder.com/400/' +
        tags.integer(700,999) +
        '/fff/?text=' +
        this.username;
    },
    rating:'{{integer(1,5)}}',
    date_create: '{{date(new Date(2020, 0, 1), new Date(), "YYYY-MM-dd hh:mm:ss")}}'
  }
]

// Location Templete

[
  '{{repeat(250)}}',
  {
    id: '{{index(1)}}',
    coffee_id:'{{integer(1,50)}}',
    
    coffee_shop: '{{random("Big Mug Roaster","Nirvana Soul","Spectra Coffee")}}',
    lat: '{{floating(37.795173,37.650974)}}',
    lng: '{{floating(-122.520006,-122.355426)}}',
    
    description: '{{lorem(3, "sentences")}}',

    photo: 'https://via.placeholder.com/400/',
    icon: 'https://via.placeholder.com/100/?text=ICON',
    
    date_create: '{{date(new Date(2020, 0, 1), new Date(), "YYYY-MM-dd hh:mm:ss")}}'
  }
]
]