import { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editReview, setEditReview] = useState(null);  // Track the review being edited
  const [newContent, setNewContent] = useState('');
  const [newRating, setNewRating] = useState(1);

  // Fetch reviews from the backend
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/reviews/reviews');
        setReviews(response.data);
        setLoading(false);
      } catch (error) {
        toast.error('Error fetching reviews');
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  // Delete a review
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/reviews/reviews/${id}`);
      setReviews(reviews.filter(review => review._id !== id)); // Remove deleted review from state
      toast.success('Review deleted successfully');
    } catch (error) {
      toast.error('Error deleting review');
    }
  };

  // Start editing a review
  const handleEditClick = (review) => {
    setEditReview(review);  // Set the review being edited
    setNewContent(review.content);  // Set initial content
    setNewRating(review.rating);  // Set initial rating
  };

  // Handle the actual edit submission
  const handleEditSubmit = async () => {
    const updatedReview = { content: newContent, rating: newRating };
    try {
      // Make the PUT request to update the review
      const response = await axios.put(`http://localhost:4000/api/reviews/reviews/${editReview._id}`, updatedReview);
  
      // Log the response to check the data structure
      console.log('Response Data:', response.data);  // Check what the backend is sending
  
      // Ensure the response contains the updated review
      if (response.data && response.data.review) {
        // Log the updated review to check its content
        console.log('Updated Review from Response:', response.data.review);
  
        // Replace the old review with the updated one
        const updatedReviews = reviews.map(review =>
          review._id === editReview._id ? { ...review, ...response.data.review } : review
        );
  
        setReviews(updatedReviews);  // Update the reviews state
        setEditReview(null);  // Close the edit form
        toast.success('Review updated successfully');
      } else {
        toast.error('Unexpected response format');
      }
    } catch (error) {
      // Log the error for debugging
      console.error('Error updating review:', error);
      toast.error('Error updating review');
    }
  };
  

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="spinner"></div> {/* Add a spinner or loading indicator */}
      </div>
    );
  }

  return (
    <div className="container mx-auto p-5">
      <h1 className="text-3xl font-bold mb-5">Manage Reviews</h1>

      {/* Reviews Table */}
      <table className="min-w-full bg-white border border-gray-300 shadow-md rounded-md">
        <thead>
          <tr>
            <th className="py-3 px-4 border-b text-left">Product</th>
            <th className="py-3 px-4 border-b text-left">Customer Name</th>
            <th className="py-3 px-4 border-b text-left">Rating</th>
            <th className="py-3 px-4 border-b text-left">Content</th>
            <th className="py-3 px-4 border-b text-left">Actions</th>
          </tr>
        </thead>
        <tbody>
          {reviews.map((review) => (
            <tr key={review._id} className="hover:bg-gray-50">
              <td className="py-3 px-4 border-b">{review.productId?.name || 'N/A'}</td>
              <td className="py-3 px-4 border-b">{review.name}</td>
              <td className="py-3 px-4 border-b">{review.rating}</td>
              <td className="py-3 px-4 border-b">{review.content}</td>
              <td className="py-3 px-4 border-b space-x-3">
                <button
                  onClick={() => handleEditClick(review)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(review._id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Edit Review Form */}
      {editReview && (
        <div className="mt-5 p-5 border border-gray-300 rounded-md">
          <h2 className="text-2xl font-semibold mb-3">Edit Review</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Content</label>
            <textarea
              value={newContent}
              onChange={(e) => setNewContent(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              rows="4"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Rating</label>
            <input
              type="number"
              value={newRating}
              onChange={(e) => setNewRating(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              min="1"
              max="5"
            />
          </div>
          <button
            onClick={handleEditSubmit}
            className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none"
          >
            Save Changes
          </button>
          <button
            onClick={() => setEditReview(null)} // Close the edit form
            className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 ml-2 focus:outline-none"
          >
            Cancel
          </button>
        </div>
      )}

      <ToastContainer />
    </div>
  );
};

export default AdminReviews;
