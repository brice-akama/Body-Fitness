import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Accessing cart data from context

const Order = () => {
  const { cart } = useCart();

  // Calculate total price of cart items
  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-screen-xl mx-auto p-6 space-y-8 mt-20">
      {/* Order Confirmation Section */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-6 break-words mt-3 text-center">
          Order Confirmation
        </h2>
        <p className="text-gray-600 text-lg text-center">
          Thank you for your order! Your order has been successfully placed.
        </p>
      </div>

      {/* Order Details */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Order Details
        </h2>
        <div className="space-y-4">
          {/* Displaying items ordered */}
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center">
              <span>{item.name}</span>
              <span>
                ${item.price.toFixed(2)} x {item.quantity}
              </span>
            </div>
          ))}

          {/* Display subtotal, shipping, and total */}
          <div className="flex justify-between items-center mt-4">
            <span className="font-semibold">Subtotal</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold">Shipping</span>
            <span>$5.00</span>
          </div>
          <div className="flex justify-between items-center font-semibold text-xl mt-4">
            <span>Total</span>
            <span>${(totalPrice + 5).toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Payment Method */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold text-gray-700 mb-6">
          Payment Method
        </h2>
        <div className="space-y-4">
          <p className="text-gray-600">
            Payment Method: <strong>Credit Card</strong>
          </p>
          <p className="text-gray-600">
            Card Number: <strong>**** **** **** 1234</strong>
          </p>
          <p className="text-gray-600">
            Card Holder: <strong>John Doe</strong>
          </p>
        </div>
      </div>

      {/* Next Steps */}
      <div className="text-center">
        <h3 className="text-lg text-gray-600 mt-4">
          A confirmation email will be sent to you shortly with your order
          details.
        </h3>
        <p className="text-gray-600 mt-2">
          If you have any questions, please feel free to{" "}
          <Link
            to="/contact"
            className="text-blue-600 hover:underline hover:text-blue-800 text-decoration-none"
          >
            contact us
          </Link>
          .
        </p>
      </div>

      {/* Return to Shopping */}
      <div className="text-center mt-8">
        <Link
          to="/shop"
          className="bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition duration-200 text-decoration-none"
        >
          Continue Shopping
        </Link>
      </div>
    </div>
  );
};

export default Order;
