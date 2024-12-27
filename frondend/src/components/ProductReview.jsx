import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductReview = ({ productId }) => {
  const [reviewData, setReviewData] = useState({
    name: '',
    rating: 1,
    content: '',
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setReviewData({ ...reviewData, [name]: value });
  };

  // Handle star click event
  const handleRatingClick = (rating) => {
    setReviewData({ ...reviewData, rating });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Debugging: log the reviewData to check if it's correct
    console.log("Submitting Review Data: ", reviewData);

    try {
      // Send the review data to the backend
      const response = await axios.post(
        `http://localhost:4000/api/reviews/addReview/${productId}`,
        reviewData
      );

      // Debugging: check the backend response
      console.log("Backend Response: ", response);

      // Show success message
      toast.success('Review submitted successfully!');
      setReviewData({ name: '', rating: 1, content: '' });

      // Optionally, you can update the client-side UI here by appending the new review to the list.
    } catch (error) {
      // Log error and show toast message
      console.error("Error submitting review:", error);
      toast.error('Error submitting review. Please try again later.');
    }
  };

  // Generate stars based on rating
  const renderStars = () => {
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span
          key={i}
          className={`star cursor-pointer text-2xl ${i <= reviewData.rating ? 'text-yellow-500' : 'text-gray-300'}`}
          onClick={() => handleRatingClick(i)}
        >
          {i <= reviewData.rating ? '★' : '☆'}
        </span>
      );
    }
    return stars;
  };

  return (
    <div className="review-form-container max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-lg mt-8">
      <h2 className="text-3xl font-semibold text-gray-900 mb-6">Write a Review</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name Input */}
        <div className="form-group">
          <label htmlFor="name" className="text-lg font-medium text-gray-700">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={reviewData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Rating Section */}
        <div className="form-group">
          <label className="text-lg font-medium text-gray-700">Rating</label>
          <div className="star-rating flex space-x-1">
            {renderStars()}
          </div>
        </div>

        {/* Review Content */}
        <div className="form-group">
          <label htmlFor="content" className="text-lg font-medium text-gray-700">Your Review</label>
          <textarea
            id="content"
            name="content"
            placeholder="Write your review here..."
            value={reviewData.content}
            onChange={handleChange}
            required
            rows="6"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          ></textarea>
        </div>

        {/* Submit Button */}
        <div className="form-group">
          <button
            type="submit"
            className="w-full py-3 bg-blue-600 text-white text-lg font-medium rounded-lg hover:bg-blue-700 transition"
          >
            Submit Review
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductReview;
