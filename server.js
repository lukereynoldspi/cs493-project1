const express = require('express')
const shortid = require('shortid');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()
const port = 3003

let businesses = [
  {name:"Luke Inc.", 
  address:"Bruh Rd.", 
  city:"Bend", 
  state:"OR", 
  zipCode:"12345", 
  phoneNumber:"(541) 555-5555", 
  category:"Technology", 
  subcategory:"Software"}
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
    subcategory: req.body.subcategory
  };
  
  businesses.push(business);

  console.log(businesses);
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
    res.json(business);
  } else {
    res.status(404).send('Business not found');
  }
});

// Get all businesses
app.get('/businesses', (req, res) => {
  res.json(businesses);
  console.log('Looking at all businesses...')
});

// Welcome message
app.get('/', (req, res) => {
  res.send('Welcome to the Luke Reynolds Business API!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
