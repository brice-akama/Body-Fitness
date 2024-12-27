import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCart } from "../context/CartContext";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import RelatedProducts from "../components/RelatedProducts";
import ProductReview from "../components/ProductReview";
import ReviewList from '../components/ReviewList'; // Import ProductReview

const ProductDetails = () => {
  const { id } = useParams(); // Extract the product ID from the URL
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [selectedQuantity, setSelectedQuantity] = useState(1);
  const [activeSection, setActiveSection] = useState("");
  const { addToCart } = useCart(); 

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Send a GET request with the product ID
        const response = await axios.get(`http://localhost:4000/api/products/${id}`);
  
        // If the product is found, set the product data and main image
        const currentProduct = response.data;
  
        if (currentProduct) {
          setProduct(currentProduct);
          setMainImage(`http://localhost:4000/${currentProduct.images?.mainImage || ""}`);
          setSelectedQuantity(1); // Reset quantity
          setActiveSection(""); // Reset collapsible sections
        } else {
          setProduct(null);
        }
      } catch (error) {
        console.error("Error fetching product:", error);
        setProduct(null);
      }
    };
  
    fetchProduct();
  }, [id]);
  
  // If product is not found
  if (!product) {
    return <div className="text-center py-10 text-lg text-red-600">Product not found!</div>;
  }

  // Handlers
  const handleThumbnailClick = (thumbnail) => setMainImage(`http://localhost:4000/${thumbnail}`);
  const toggleSection = (section) => setActiveSection((prev) => (prev === section ? "" : section));

  // Calculate total price
  const totalPrice = selectedQuantity * product.price;
  
  const handleAddToCart = () => {
    if (selectedQuantity < 1) {
      toast.error("Please select a product quantity.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }

    addToCart(product, selectedQuantity); // Add product to cart
    toast.success("Product added to cart!", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="max-w-screen-xl mx-auto p-4 space-y-8 mt-10">
      <ToastContainer />
      {/* Top Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
        {/* Left: Image Section */}
        <div className="flex">
        <div className="flex flex-col justify-between mr-4 mt-5">
      {product.images?.thumbnailImages.map((thumb, index) => (
        <img
          key={index}
          src={`http://localhost:4000/${thumb}`}
          alt={`Thumbnail ${index}`}
          className="w-20 h-20 object-cover border rounded cursor-pointer hover:scale-105 transition-transform"
          onClick={() => handleThumbnailClick(thumb)}
        />
      ))}
    </div>

          <div className="flex-1 border rounded overflow-hidden mt-5">
            <img src={mainImage} alt={product.name} className="w-full h-auto object-cover " />
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold mt-9">{product.name}</h1>
          
          <p className="text-2xl font-semibold text-blue-600">
            Price: ${totalPrice.toFixed(2)}
          </p>

          {/* Quantity Selector */}
<div className="space-y-2">
  <label className="font-medium">Quantity:</label>
  <select
    className="w-20 border p-2 rounded"
    value={selectedQuantity}
    onChange={(e) => setSelectedQuantity(Number(e.target.value))}
  >
    {[...Array(20).keys()].map((qty) => (
      <option key={qty + 1} value={qty + 1}>
        {qty + 1}
      </option>
    ))}
  </select>
</div>


          <button
            onClick={handleAddToCart}
            className="bg-blue-600 text-white px-6 py-2 rounded mt-4 hover:bg-blue-700 disabled:bg-gray-300"
            disabled={selectedQuantity === 0}
          >
            Add to Cart
          </button>
        </div>
      </div>



      {/* Collapsible Sections */}
      <div className="border-t pt-6 space-y-6">
        {["Description", "Reviews"].map((section) => (
          <div key={section} className="border-b pb-4">
            <button
              className="w-full text-left text-xl font-semibold py-2 hover:text-blue-600"
              onClick={() => toggleSection(section)}
            >
              {section}
            </button>
            {activeSection === section && (
              <div className="pl-4 text-gray-700 space-y-3">
                {/* Render content dynamically */}
                {section === "Description" && (
                  <div className="whitespace-pre-line">{product.description}</div>
                )}
              {section === "Reviews" && (
  <>
    {/* Product Reviews */}
    {product.reviews?.map((review, index) => (
      <div key={index} className="border-b pb-2 mb-2">
        <strong>{review.name}</strong>  {/* Changed to 'name' based on your schema */}
        <p>{review.content}</p>  {/* Changed to 'content' based on your schema */}
        <span className="text-yellow-500">{`Rating: ${review.rating}/5`}</span>
      </div>
    ))}

  {/* Review List */}
  <ReviewList productId={product._id} />
    {/* Add Product Review */}
    <ProductReview productId={product._id} />
    
          
  </>
)}

              </div>
            )}
          </div>
        ))}
      </div>

      {/* Related Products */}
      <RelatedProducts relatedProductIds={product.images?.relatedProducts} />

    </div>
  );
};

export default ProductDetails;
