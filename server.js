const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const usersRouter = require('./routes/users');
const businessesRouter = require('./routes/businesses');

const app = express();
const port = 3002;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/users', usersRouter);
app.use('/businesses', businessesRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});