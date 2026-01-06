const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRoutes = require('./routes/auth');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use('/api/auth', authRoutes);

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/business_directory', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('MongoDB connection error:',err));

  const businessSchema = new mongoose.Schema({
    id: Number,
    imageUrl: String,
    name: String,
    category: String,
    description: String,
    rating: Number,
    location: String,
});
const Business = mongoose.model('Business', businessSchema);

const reviewSchema = new mongoose.Schema({
  businessName: String,
  userName: String,
  rating: Number,
  review: String,
}, { timestamps: true });
const Review = mongoose.model('Review', reviewSchema);


// Get all businesses
app.post('/api/businesses', async (req, res) => {
  try {
      const newBusiness = new Business(req.body);
      await newBusiness.save();
      res.status(201).json(newBusiness);
  } catch (error) {
      res.status(500).json({ error: 'Failed to create business' });
  }
});

// Get all businesses
app.get('/api/businesses', async (req, res) => {
  try {
      const businesses = await Business.find();
      res.status(200).json(businesses);
  } catch (error) {
      res.status(500).json({ error: 'Failed to fetch businesses' });
  }
});


// Get business by ID
app.get('/api/businesses/:id', async (req, res) => {
  try {
      const business = await Business.findById(req.params.id);
      if (!business) {
          return res.status(404).json({ error: 'Business not found' });
      }
      res.status(200).json(business);
  } catch (error) {
      res.status(500).json({ error: 'Failed to fetch business' });
  }
});

// Create a review
app.post('/api/reviews', async (req, res) => {
  try {
      const { businessName, userName, rating, review } = req.body;

      // Create and save a new review
      const newReview = new Review({ businessName, userName, rating, review });
      await newReview.save();

      res.status(201).json({
          message: 'Review submitted successfully',
          data: newReview,
      });
  } catch (error) {
      console.error('Error saving review:', error);
      res.status(500).json({ error: 'Failed to save review' });
  }
});

app.get('/reviews/:businessName', async (req, res) => {
  try {
    const { businessName } = req.params;
    const reviews = await Review.find({ businessName });

    if (!reviews.length) {
      return res.status(404).json({ message: 'No reviews found for this business.' });
    }

    res.json(reviews);
  } catch (error) {
    console.error('Error fetching reviews:', error);
    res.status(500).json({ message: 'Server error. Please try again later.' });
  }
});

// Get all reviews (optional)
// app.get('/api/reviews', async (req, res) => {
//   try {
//       const reviews = await Review.find();
//       res.status(200).json(reviews);
//   } catch (error) {
//       res.status(500).json({ error: 'Failed to fetch reviews' });
//   }
// });

// app.get('/api/reviews',async  (req, res) => {
//   const { businessName } = req.query;
//   const filteredReviews = reviews.filter(review => review.businessName === businessName);
//   res.json(filteredReviews);
// });



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
