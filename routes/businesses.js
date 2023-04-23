const express = require('express');
const shortid = require('shortid');
const router = express.Router();

let businesses = [
  // Test business
  {
    businessId: 'owo',
    owner: 'Luke Reynolds',
    name: 'Luke Inc.',
    address: 'Bruh Rd.',
    city: 'Bend',
    state: 'OR',
    zipCode: '12345',
    phoneNumber: '(541) 555-5555',
    category: 'Technology',
    subcategory: 'Software',
    website: 'lukereynoldspi.github.io',
    email: 'lukereynoldspi@gmail.com',
    reviews: [],
    photos: [],
  },
];

// Get business info from id
router.get('/:businessId', (req, res) => {
    const businessId = req.params.businessId;
    const business = businesses.find(business => business.businessId === businessId);
    if (business) {
      res.json(business)
    } else {
      res.status(404).send('Business not found');
    }
  });

// Get all businesses info
router.get('/', (req, res) => {
    res.json(businesses)
  });

// Add a business
router.post('/', (req, res) => {
  const business = {
    businessId: shortid.generate(),
    owner: req.body.owner,
    name: req.body.name,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zipCode: req.body.zipCode,
    phoneNumber: req.body.phoneNumber,
    category: req.body.category,
    subcategory: req.body.subcategory,
    website: req.body.website || '',
    email: req.body.email || '',
    reviews: [],
    photos: []
  };

  businesses.push(business);
  res.send('Business is added to the business database');
});

// Add a review
router.post('/:businessId/reviews', (req, res) => {
  const businessId = req.params.businessId;
  const business = businesses.find((b) => b.businessId === businessId);

  if (!business ) {
    return res.status(404).send('Business not found');
  }

  else if (business.reviews.length >= 1) {
    return res.status(404).send('Review already added');
  }

  else {
  const review = {
    rating: req.body.rating,
    budget: req.body.budget,

    // Optional review
    reviewText: req.body.reviewText || '',
    };

  business.reviews.push(review);
  res.send('Review is added to the business');
  }
});

// Add a photo
router.post('/:businessId/photos', (req, res) => {
  const businessId = req.params.businessId;
  const business = businesses.find((b) => b.businessId === businessId);

  if (!business) {
    return res.status(404).send('Business not found');
  }

  const photo= {
    photoURL: req.body.photoURL,
    caption: req.body.caption,
    };

  business.photos.push(photo);
  res.send('Photo is added to the business');
});

// Update a business
router.put('/:businessId', (req, res) => {
    const businessId = req.params.businessId;
    const business = businesses.find(business => business.businessId === businessId);
    if (business) {
      business.owner = req.body.owner,
      business.name = req.body.name;
      business.address = req.body.address,
      business.city = req.body.city,
      business.state = req.body.state,
      business.zipCode = req.body.zipCode,
      business.phoneNumber = req.body.phoneNumber,
      business.category = req.body.category,
      business.subcategory = req.body.subcategory,
      business.website = req.body.website,
      business.email = req.body.email,
      business.reviews = req.body.reviews
      res.json(business);
    } else {
      res.status(404).send('Business not found');
    }
  }
);

// Delete a business
router.delete('/:businessId', (req, res) => {
    const businessId = req.params.businessId;
    const business = businesses.find(business => business.businessId === businessId);
    if (business) {
      businesses.pop(business)
      res.send('Business deleted');
    } else {
      res.status(404).send('Business not found');
    }
  }
);

// Delete a review
router.delete('/:businessId/reviews', (req, res) => {
  const businessId = req.params.businessId;
  const business = businesses.find(business => business.businessId === businessId);
  if (business) {
    businesses.reviews.pop()
    res.send('Review deleted');
  } else {
    res.status(404).send('Business not found');
  }
}
);

module.exports = router;