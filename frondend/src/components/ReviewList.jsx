import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ReviewList = ({ productId }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [visibleReviews, setVisibleReviews] = useState(4); // Initially show 4 reviews

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        // Specify the full backend URL
        const response = await axios.get(`http://localhost:4000/api/reviews/reviews/${productId}`);
        setReviews(response.data);
      } catch (err) {
        console.error(err);
        setError('No reviews yet. Be the first to write one!');
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [productId]);

  if (loading) return <p>Loading reviews...</p>;
  if (error) return <p>{error}</p>;

  const handleLoadMore = () => {
    setVisibleReviews((prev) => prev + 4); // Load 4 more reviews
  };

  return (
    <div className="my-8">
      <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
      <hr className="my-4 border-t-2 border-gray-300" />
      {reviews.length > 0 ? (
        reviews.slice(0, visibleReviews).map((review) => (
          <div key={review._id} className="review-card border p-4 mb-4 rounded-lg shadow-lg">
            <div className="flex items-center space-x-4">
              <div className="font-semibold text-lg">{review.name}</div>
              <div className="flex items-center space-x-1 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${i < review.rating ? "fill-current" : "text-gray-300"}`}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 15l-3.5 2 1-4-3-3 4-.5L10 4l1.5 4.5 4 .5-3 3 1 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                ))}
              </div>
            </div>
            <p className="text-gray-700 mt-2">{review.content}</p>
            <p className="text-sm text-gray-500 mt-2">
              <small>Submitted on {new Date(review.createdAt).toLocaleDateString()}</small>
            </p>
          </div>
        ))
      ) : (
        <p>No reviews yet. Be the first to write one!</p>
      )}

      {/* Load More button */}
      {reviews.length > visibleReviews && (
        <button
          onClick={handleLoadMore}
          className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
        >
          Load More Reviews
        </button>
      )}
    </div>
  );
};

export default ReviewList;
