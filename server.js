const express = require('express')
const shortid = require('shortid');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()
const port = 3000

let users = [

  // Test user
  {
    userId: "Carl",
    businesses: [],
    reviews: [],
    photos: []
  }
]

let businesses = [

  // Test business
  {
  businessId: "owo",
  name:"Luke Inc.", 
  address:"Bruh Rd.", 
  city:"Bend", 
  state:"OR", 
  zipCode:"12345", 
  phoneNumber:"(541) 555-5555", 
  category:"Technology", 
  subcategory:"Software",
  website:"lukereynoldspi.github.io",
  email:"lukereynoldspi@gmail.com",
  reviews:[]
  }
];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Add a business
app.post('/businesses', (req, res) => {
  const business = {
    businessId: shortid.generate(),
    name: req.body.name,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zipCode: req.body.zipCode,
    phoneNumber: req.body.phoneNumber,
    category: req.body.category,
    subcategory: req.body.subcategory,

    // Optional parameters
    website: req.body.website || '',
    email: req.body.email || '',
    reviews: []
  };
  
  businesses.push(business);
  res.send('Business is added to the database');
});

// Add a review
app.post('/businesses/:businessId/reviews', (req, res) => {
  const businessId = req.params.businessId;
  const business = businesses.find(b => b.businessId === businessId);
  
  if (!business) {
    return res.status(404).send('Business not found');
  }

  const review = {
    userId: req.body.userId,
    rating: req.body.rating,
    budget: req.body.budget,

    // Optional review
    reviewText: req.body.reviewText || '',
  };
  
  business.reviews.push(review);
  res.send('Review is added to the business');
});

// Add a photo
app.post('/businesses/:businessId/photos', (req, res) => {
  const businessId = req.params.businessId;
  const business = businesses.find(b => b.businessId === businessId);
  
  if (!business) {
    return res.status(404).send('Business not found');
  }

  const review = {
    userId: req.body.userId,
    photoId: req.body.photoId,
    caption: req.body.caption,

    // Optional review
    reviewText: req.body.reviewText || '',
  };
  
  business.reviews.push(review);
  res.send('Photo is added to the business');
});

// Update a business
app.put('/businesses/:businessId', (req, res) => {
  const businessId = req.params.businessId;
  const business = businesses.find(business => business.businessId === businessId);
  if (business) {
    business.name = req.body.name;
    business.address = req.body.address,
    business.city = req.body.city,
    business.state = req.body.state,
    business.zipCode = req.body.zipCode,
    business.phoneNumber = req.body.phoneNumber,
    business.category = req.body.category,
    business.subcategory = req.body.subcategory
    business.website = req.body.website
    business.email = req.body.email
    res.json(business);
  } else {
    res.status(404).send('Business not found');
  }
});

// Delete a business
app.delete('/businesses/:businessId', (req, res) => {
  const businessId = req.params.businessId;
  const business = businesses.find(business => business.businessId === businessId);
  if (business) {
    businesses.pop(business)
    res.send('Business deleted');
  } else {
    res.status(404).send('Business not found');
  }
});

// Get business info from id
app.get('/businesses/:businessId', (req, res) => {
  const businessId = req.params.businessId;
  const business = businesses.find(business => business.businessId === businessId);
  if (business) {
    res.json(business)
  } else {
    res.status(404).send('Business not found');
  }
});

// Get all businesses' info and reviews
app.get('/businesses', (req, res) => {
  console.log('Looking at all businesses...')
  res.json(businesses);
});

// Welcome message
app.get('/', (req, res) => {
  res.send('Welcome to the Luke Reynolds Business API!')
})

// Current port number in console
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
