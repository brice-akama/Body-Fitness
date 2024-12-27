import React, { useEffect } from "react";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";  // Ensure correct import
import "react-toastify/dist/ReactToastify.css";

const Cart = () => {
  const { cart = {}, removeFromCart, updateCartItem } = useCart();

  // Calculate total price
  const totalPrice = cart.items
    ? cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0)
    : 0;

  // Display toast notification for adding/removing items
  const notify = (message) => toast.success(message, { position: "bottom-right" });  // Use "bottom-right" directly

  const handleThumbnailClick = (thumbnail) => setMainImage(`http://localhost:4000/${thumbnail}`);

  useEffect(() => {
    if (cart.items && cart.items.length === 0) {
      toast.info("Your cart is empty", { position: "bottom-right" });  // Use "bottom-right" directly
    }
  }, [cart.items]);

  if (!cart.items || cart.items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-64 mt-12">
        <h2 className="text-2xl font-semibold text-gray-700 mt-20">Your Cart is Empty</h2>
        <p className="text-gray-500 mt-2 text-center">Looks like you haven’t added anything to your cart yet.</p>
        <Link
    to="/shop"  // This will navigate to the shop without reloading the page
    className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 no-underline"
  >
    Continue Shopping
  </Link>
      </div>
    );
  }

  return (
    <div className="w-full px-4 py-8 mt-10">
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mt-16 sm:mt-18 md:mt-18">Your Cart</h2>

    <div className="space-y-6 mt-8">
      {cart.items.map((item) => (
        <div
          key={item.productId}
          className="flex flex-wrap md:flex-nowrap items-center space-x-4 bg-white p-4 rounded-lg shadow-sm border border-gray-200"
        >
          {/* Product Image */}
          <img
            src={`http://localhost:4000/${item.images.mainImage.replace(/\\/g, '/')}`}
            alt={item.name}
            className="w-28 h-28 object-cover rounded-md"
          />
  
          {/* Product Details */}
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-700 mr-8 truncate">{item.name}</h3>
            <p className="text-gray-500">Price: ${item.price.toFixed(2)}</p>
  
            {/* Quantity Selector */}
            <div className="flex items-center mt-2">
              <label htmlFor={`quantity-${item.productId}`} className="mr-2 text-gray-600">
                Quantity:
              </label>
              <input
                type="number"
                id={`quantity-${item.productId}`}
                value={item.quantity}
                min="1"
                className="w-16 px-2 py-1 border rounded-md text-center"
                onChange={(e) => {
                  const newQuantity = +e.target.value;
                  updateCartItem(item.productId, newQuantity); // Pass the productId and quantity
                  notify(`Updated quantity for ${item.name} to ${newQuantity}`);
                }}
              />
            </div>
          </div>
  
          {/* Remove Button */}
          <button
            onClick={() => {
              removeFromCart(item.productId); // Pass the productId for removal
              notify(`${item.name} has been removed from your cart`);
            }}
            className="text-red-600 hover:text-red-800 mt-2 md:mt-0"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  
    {/* Cart Summary */}
    <div className="flex justify-between items-center py-4 border-t mt-6">
      <p className="text-xl font-semibold text-gray-700">Total: ${totalPrice.toFixed(2)}</p>
  
      {/* Proceed to Checkout Button */}
      <Link to="/checkout" className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 no-underline whitespace-nowrap">
        Proceed to Checkout
      </Link>
    </div>
  </div>
  
  );
};

export default Cart;
