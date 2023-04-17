const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express()
const port = 3001

let businesses = [];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/businesses', (req, res) => {
  const book = req.body;
  console.log(book);
    books.push(book);

    res.send('Business is added to the database');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})