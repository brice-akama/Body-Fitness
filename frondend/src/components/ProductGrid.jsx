import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProductGrid = () => {
  const navigate = useNavigate();

  // State for products fetched from the backend
  const [products, setProducts] = useState([]);

  // Fetch products from the backend API when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/products/listProducts"); // Your backend API URL
        setProducts(response.data); // Set fetched products to state
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []); // Empty dependency array ensures the effect runs only once when the component mounts

  const handleImageClick = (productId) => {
    navigate(`/product/${productId}`); // Navigate to the product detail page
  };

  return (
    <div className="p-4">
      {/* Captivating Text */}
      <div className="mb-6 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
          Discover Our Premium Fitness Equipment
        </h2>
        <p className="text-gray-600 mt-2">
          Explore our collection of high-quality fitness gear designed to meet
          your workout needs and elevate your fitness journey.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products.slice(0, 8).map((product) => (
          <div
            key={product._id} // Use _id from MongoDB or database
            className="product-card border p-4 rounded shadow-sm hover:shadow-lg cursor-pointer transition-transform duration-300 transform hover:scale-105"
            onClick={() => handleImageClick(product._id)} // Use product._id for navigation
          >
            <div className="overflow-hidden rounded">
              <img
                src={`http://localhost:4000/${product.images.mainImage.replace(/\\/g, "/")}`} // Adjust path and fix backslashes
                alt={product.name}
                className="w-full h-48 object-cover rounded transition-transform duration-300 transform hover:scale-110"
                loading="lazy" // Add lazy loading
              />
            </div>
            <h3 className="mt-2 text-lg font-semibold text-center">
              {product.name || "Unnamed Product"}
            </h3>
            <p className="text-sm text-gray-500 text-center">
              ${product.price?.toFixed(2) || "N/A"}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
