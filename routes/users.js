const express = require('express');
const shortid = require('shortid');
const router = express.Router();

let users = [
  // Test user
  {
    userId: 'Guts',
    businesses: [],
    reviews: [],
    photos: [],
  },
];

router.post('/', (req, res) => {
  const user = {
    userId: req.body.userId,
    businesses: [],
    reviews: [],
    photos: [],
  };

  users.push(user);
  res.send('User is added to the user database');
});

router.get('/', (req, res) => {
  console.log('Looking at all users...');
  res.json(users);
});

router.get('/:userId/businesses', (req, res) => {
  console.log('Looking at all user businesses...');
  res.json([]);
});

router.get('/:userId/reviews', (req, res) => {
  console.log('Looking at all user reviews...');
  res.json([]);
});

router.get('/:userId/photos', (req, res) => {
  console.log('Looking at all user photos...');
  res.json([]);
});

module.exports = router;
