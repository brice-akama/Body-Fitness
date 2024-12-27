import React, { useState, useEffect } from 'react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

const ProductReviews = ({ productId }) => {
  const [reviews, setReviews] = useState([]);
  const [newReview, setNewReview] = useState({ name: '', rating: 0, content: '' });

  // Fetch reviews
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/products/${productId}/reviews`);
        setReviews(response.data.reviews);
      } catch (error) {
        toast.error('Error fetching reviews.');
      }
    };
    fetchReviews();
  }, [productId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`http://localhost:4000/api/products/${productId}/reviews`, newReview);
      
      // Add the new review to the state instead of overwriting it
      setReviews((prevReviews) => [...prevReviews, response.data.review]);
  
      toast.success('Review submitted successfully!');
      setNewReview({ name: '', rating: 0, content: '' }); // Reset form
    } catch (error) {
      toast.error('Error submitting review.');
    }
  };
  
  return (
    <div>
      <Toaster />
      <h2>Customer Reviews</h2>
      <ul>
        {reviews.map((review, index) => (
          <li key={index} className="mb-4">
            <p><strong>{review.name}</strong></p>
            <p>Rating: {'⭐'.repeat(review.rating)}</p>
            <p>{review.content}</p>
            <p className="text-gray-500 text-sm">Posted on {new Date(review.createdAt).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
      
      <h3 className="mt-6">Leave a Review</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={newReview.name}
            onChange={(e) => setNewReview({ ...newReview, name: e.target.value })}
            required
          />
        </div>
        <div>
          <label htmlFor="rating">Rating (1-5):</label>
          <input
            id="rating"
            type="number"
            value={newReview.rating}
            onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
            min="1"
            max="5"
            required
          />
        </div>
        <div>
          <label htmlFor="content">Review:</label>
          <textarea
            id="content"
            value={newReview.content}
            onChange={(e) => setNewReview({ ...newReview, content: e.target.value })}
            required
          />
        </div>
        <button type="submit" className="mt-4 bg-blue-500 text-white py-2 px-4 rounded">
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default ProductReviews;
