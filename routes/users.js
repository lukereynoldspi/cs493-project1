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

// Get all user information
router.get('/', (req, res) => {
  console.log('Looking at all users...');
  res.json(users);
});

// Get user from userId
router.get('/:userId', (req, res) => {
  const userId = req.params.userId;
    const user = users.find(user => user.userId === userId);
    if (user) {
      res.json(user)
    } else {
      res.status(404).send('User not found');
    }
});

// Get all user reviews
router.get('/:userId/reviews', (req, res) => {
  console.log('Looking at user reviews...');
  res.json([]);
});

// Get all user photos
router.get('/:userId/photos', (req, res) => {
  console.log('Looking at all user photos...');
  res.json([]);
});

// Post new user
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

// Update a review
router.put('/:userId/reviews', (req, res) => {
  const userId = req.params.userId;
  const user = users.find(user => user.userId === userId);
  if (user) {
    user.reviews = req.body.reviews
    res.json(user.reviews)
  } else {
    res.status(404).send('Review not found');
  }
}
);

// Delete a review
router.delete('/:userId/reviews', (req, res) => {
  const userId = req.params.userId;
  const user = users.find(user => user.userId === userId);
  if (user) {
    user.reviews = req.body.reviews
    res.json(user.reviews)
  } else {
    res.status(404).send('Review not found');
  }
}
);

module.exports = router;
