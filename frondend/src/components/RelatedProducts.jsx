import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // React Router hook for navigation

const RelatedProducts = ({ relatedProductIds }) => {
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // For client-side navigation

  const baseURL = "http://localhost:4000/"; // Base URL for images

  // Function to fetch related products
  const fetchRelatedProducts = async (ids) => {
    try {
      const response = await axios.post("http://localhost:4000/api/products/related", { ids });
      setRelatedProducts(response.data); // Assuming API returns an array of products
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError("Failed to fetch related products");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (relatedProductIds && relatedProductIds.length > 0) {
      fetchRelatedProducts(relatedProductIds);
    } else {
      setLoading(false); // No related products
    }
  }, [relatedProductIds]);

  if (loading) {
    return <p>Loading related products...</p>;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (!relatedProducts.length) {
    return <p>No related products available.</p>;
  }

  return (
    <div className="related-products my-10">
      <h2 className="text-center text-2xl font-semibold mb-6">Related Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {relatedProducts.map((product) => (
          <div
            key={product._id}
            className="product-card border p-4 rounded shadow-sm hover:shadow-lg cursor-pointer"
            onClick={() => navigate(`/product/${product._id}`)} // Navigate on image or card click
          >
            <img
              src={`${baseURL}${product.images?.mainImage?.replace(/\\/g, "/")}`} // Adjust path and fix backslashes
              alt={product.name || "Product Image"}
              className="w-full h-48 object-cover rounded"
            />
            <h3 className="mt-2 text-lg font-semibold">{product.name || "Unnamed Product"}</h3>
            <p className="text-sm text-gray-500">${product.price?.toFixed(2) || "N/A"}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
