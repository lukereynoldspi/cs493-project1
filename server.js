const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()
const port = 3000

let businesses = [];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/business', (req, res) => {
  const name = req.body.name;
  const address = req.body.address;
  const city = req.body.city;
  const state = req.body.state;
  const zipCode = req.body.zipCode;
  const phoneNumber = req.body.phoneNumber;
  const category = req.body.category;
  const subcategory = req.body.subcategory;
  console.log(business);
    businesses.push(business);

    res.send('Business is added to the database');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})