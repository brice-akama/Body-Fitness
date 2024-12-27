import express from 'express';
import Review from '../models/Review.js';  // Ensure the path is correct, and use '.js' with ES Modules
const router = express.Router();

router.post('/addReview/:productId', async (req, res) => {
  try {
    const { name, rating, content } = req.body; 
    const { productId } = req.params; 

    if (!name || !rating || !content || !productId) {
      return res.status(400).json({ message: 'Please provide all required fields' });
    }

    const newReview = new Review({
      productId,
      name,
      rating,
      content,
      createdAt: new Date(),
    });

    await newReview.save();

    // Send back the new review in the response
    res.status(201).json({ message: 'Review submitted successfully', review: newReview });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error submitting review. Please try again later.' });
  }
});

  
// Get all reviews for a specific product
router.get('/reviews/:productId', async (req, res) => {
  try {
    const { productId } = req.params;

    // Fetch reviews based on productId
    const reviews = await Review.find({ productId }).sort({ createdAt: -1 }); // Sort by newest first

    if (reviews.length === 0) {
      return res.status(404).json({ message: 'No reviews found for this product.' });
    }

    res.status(200).json(reviews);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching reviews. Please try again later.' });
  }
});



// Route to delete a review
router.delete('/reviews/:reviewId', async (req, res) => {
  try {
    const { reviewId } = req.params;

    // Find and delete the review by ID
    const deletedReview = await Review.findByIdAndDelete(reviewId);

    if (!deletedReview) {
      return res.status(404).json({ message: 'Review not found.' });
    }

    res.status(200).json({ message: 'Review deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting review. Please try again later.' });
  }
});



// Route to fetch all reviews
router.get('/reviews', async (req, res) => {
  try {
    const reviews = await Review.find()
      .populate('productId', 'name') // Optionally populate the product name
      .exec(); // Fetch the reviews from the database

    res.json(reviews); // Return the reviews as a JSON response
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch reviews", error });
  }
});

// Route to update a review
router.put('/reviews/:id', async (req, res) => {
  const { id } = req.params;
  const { content, rating } = req.body;

  try {
    const review = await Review.findById(id);
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    // Update the review's content and/or rating
    if (content) review.content = content;
    if (rating) review.rating = rating;

    const updatedReview = await review.save(); // Save the updated review to the database

    // Log the updated review for debugging
    console.log("Updated Review:", updatedReview);

    res.json({ message: "Review updated successfully", review: updatedReview });
  } catch (error) {
    console.error('Error updating review:', error); // Log the error in case of failure
    res.status(500).json({ message: "Failed to update review", error });
  }
});


// Route to delete a review
router.delete('/reviews/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const review = await Review.findById(id);
    if (!review) {
      return res.status(404).json({ message: "Review not found" });
    }

    await review.remove(); // Delete the review from the database
    res.json({ message: "Review deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete review", error });
  }
});

export default router;
