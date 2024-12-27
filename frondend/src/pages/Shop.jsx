import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Shop = () => {
  const navigate = useNavigate();

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [products, setProducts] = useState([]); // State to store products

  // Categories
  const categories = [
    "Elliptical",
    "Exercise Bikes",
    "Climber $ Steppers",
    "Rowers",
    "Treadmill",
    "Strength",
    "Lateral Trainer",
    "Flexibility",
    "Accessories",
  ];

  // Fetch products from the API when component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/products/listProducts'); // API call to fetch products
        setProducts(response.data); // Set fetched products to state
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  // Filter products by category
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  // Determine the products to display based on pagination
  const productsToDisplay = showAllProducts
    ? filteredProducts
    : filteredProducts.slice(0, 23);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === selectedCategory ? null : category);
    setShowAllProducts(false); // Reset pagination when category changes
  };

  const handleImageClick = (productId) => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="flex flex-col md:flex-row p-4 gap-6 mt-20">
      {/* Filters Section */}
     {/* Filters Section */}
<div className="w-full md:w-1/4 bg-gray-100 p-4 rounded-lg shadow-md">
  <h3 className="text-lg font-bold text-gray-700 uppercase mb-4">
    CATEGORY
  </h3>
  <ul className="space-y-4">
    {categories.map((category, index) => (
      <li
        key={index}
        onClick={() => handleCategoryClick(category)}
        className={`cursor-pointer pb-2 whitespace-nowrap ${
          selectedCategory === category
            ? "text-gray-800 font-bold border-b-2 border-gray-800"
            : "text-gray-600 border-b border-gray-300"
        } hover:text-gray-800 hover:border-gray-800 transition`}
      >
        {category}
      </li>
    ))}
  </ul>
</div>


      {/* Products Section */}
      <div className="w-full md:w-3/4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {productsToDisplay.map((product) => (
            <div
              key={product._id}
              className="product-card border p-4 rounded shadow-sm hover:shadow-lg cursor-pointer transition-transform duration-300 transform hover:scale-105"
              onClick={() => handleImageClick(product._id)}
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

        {/* Pagination Buttons */}
        <div className="mt-6 flex justify-center gap-4">
          {!showAllProducts && filteredProducts.length > 23 && (
            <button
              onClick={() => setShowAllProducts(true)}
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition"
            >
              Load More
            </button>
          )}
          {showAllProducts && (
            <button
              onClick={() => setShowAllProducts(false)}
              className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-gray-600 transition"
            >
              Back to Previous Products
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shop;
