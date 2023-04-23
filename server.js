const express = require('express')
const shortid = require('shortid');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()
const port = 3000

let businesses = [
  {
  id: "owo",
  name:"Luke Inc.", 
  address:"Bruh Rd.", 
  city:"Bend", 
  state:"OR", 
  zipCode:"12345", 
  phoneNumber:"(541) 555-5555", 
  category:"Technology", 
  subcategory:"Software",
  website:"lukereynoldspi.github.io",
  email:"lukereynoldspi@gmail.com"}
];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Add a business
app.post('/businesses', (req, res) => {
  const business = {
    id: shortid.generate(),
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
  };
  
  businesses.push(business);
  res.send('Business is added to the database');
});

// Update a business
app.put('/businesses/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const business = businesses.find(business => business.id === id);
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
app.delete('/businesses/:id', (req, res) => {
  const id = req.params.id;
  const business = businesses.find(business => business.id === id);
  if (business) {
    businesses.pop(business)
    res.send('Business deleted');
  } else {
    res.status(404).send('Business not found');
  }
});

// Get info from id
app.get('/businesses/:id', (req, res) => {
  const id = req.params.id;
  const business = businesses.find(business => business.id === id);
  if (business) {
    res.send(`Info for ${business.name}`);
  } else {
    res.status(404).send('Business not found');
  }
});

// Get all businesses
app.get('/businesses', (req, res) => {
  console.log('Looking at all businesses...')
  res.json(businesses);
});

// Welcome message
app.get('/', (req, res) => {
  res.send('Welcome to the Luke Reynolds Business API!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
