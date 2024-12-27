import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  const token = localStorage.getItem('token');

  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  
  // Add item to cart
  const addToCart = async (productId, quantity) => {
    try {
      const response = await axios.post(
        'http://localhost:4000/api/cart/add-item',
        { productId, quantity },
        config
      );
      setCart(response.data.cart);
      return { success: true, message: response.data.message };
    } catch (error) {
      console.error('Error adding to cart:', error);
      return { success: false, message: error.response?.data?.message || 'Failed to add item to cart' };
    }
  };

  // Update cart item quantity
  const updateCartItem = async (productId, quantity) => {
    try {
      console.log("Updating cart item:", { productId, quantity }); // Log inputs
      const response = await axios.put(
        'http://localhost:4000/api/cart/update',
        { productId, quantity },
        config
      );
      console.log("Update response:", response.data); // Log response
      setCart(response.data.cart);
      return { success: true, message: response.data.message };
    } catch (error) {
      console.error("Error updating cart:", error.response?.data || error.message);
      return { success: false, message: error.response?.data?.message || 'Failed to update cart' };
    }
  };
  

  // Remove item from cart
  const removeFromCart = async (productId) => {
    try {
      // Send the productId in the body of the DELETE request
      const response = await axios.delete(
        'http://localhost:4000/api/cart/remove',  // This should match the backend route
        { 
          data: { productId },  // Send productId in the request body
          ...config  // Include your config if needed (e.g., authentication)
        }
      );
      console.log("Remove response:", response.data);  // Log response
      setCart(response.data.cart);  // Update cart state
      return { success: true, message: response.data.message };
    } catch (error) {
      const errorMessage = error.response?.data?.message || 'Failed to remove item from cart';
      console.error("Error removing from cart:", errorMessage);
      return { success: false, message: errorMessage };
    }
  };
  
  
  // Explicitly fetch cart data
const getCart = async () => {
  setLoading(true);
  try {
    const response = await axios.get('http://localhost:4000/api/cart/getCart', config);
    setCart(response.data.cart || []); // Ensure cart is always an array
  } catch (error) {
    console.error('Error fetching cart:', error.response?.data?.message || error.message);
  } finally {
    setLoading(false);
  }
};

useEffect(() => {
  getCart();
}, []);

const handleTokenExpiry = (error) => {
  if (error.response?.status === 401) {
    console.error('Session expired. Please log in again.');
    localStorage.removeItem('token');
    window.location.href = '/login'; // Redirect to login page
  }
};


  return (
    <CartContext.Provider
      value={{ cart, addToCart, updateCartItem ,removeFromCart, getCart, loading }}
    >
      {children}
    </CartContext.Provider>
  );
};
