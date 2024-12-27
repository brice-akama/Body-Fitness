import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Checkout = () => {
  const { cart } = useCart();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    country: '',
    phone: '',
    address: '',
    zipcode: '',
    paymentMethod: '',
    acceptTerms: false,
  });

  if (!cart.items || cart.items.length === 0) {
    return <div>Your cart is empty</div>;
  }

  // Calculate total price
  const totalPrice = cart.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const shippingFee = 100; // Shipping fee as stated
  const grandTotal = totalPrice + shippingFee;

  // Handle form changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.acceptTerms) {
      toast.error('You must accept the terms and conditions to place the order.');
      return;
    }
    if (!formData.paymentMethod) {
      toast.error('Please select a payment method.');
      return;
    }

    const orderDetails = {
      items: cart.items, // Cart items (product name, price, quantity, image)
      shippingInfo: {
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        country: formData.country,
        phone: formData.phone,
        address: formData.address,
        zipcode: formData.zipcode,
      },
      paymentMethod: formData.paymentMethod,
      totalPrice,
      shippingFee,
      grandTotal,
    };

    try {
      const response = await fetch('http://localhost:4000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderDetails),
      });

      if (response.ok) {
        toast.success('Order placed successfully!');
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          country: '',
          phone: '',
          address: '',
          zipcode: '',
          paymentMethod: '',
          acceptTerms: false,
        });
      } else {
        toast.error('There was an issue placing your order.');
      }
    } catch (error) {
      console.error('Error placing order:', error);
      toast.error('There was an issue placing your order.');
    }
  };

  return (
    <div className='max-w-screen-xl mx-auto p-6 mt-10'>
      <ToastContainer />
      <h2 className='text-3xl font-semibold text-gray-800 mb-6'>Checkout</h2>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {/* Cart Summary Section */}
        <div className='bg-white p-6 rounded-lg shadow-md'>
          <h3 className='text-2xl font-semibold text-gray-700 mb-4'>Cart Summary</h3>
          <div className='space-y-4'>
            {cart.items.map((item) => (
              <div key={item.productId} className='flex justify-between items-center border-b pb-4'>
                <div className='flex items-center'>
                  {item.image && (
                    <img
                      src={item.image}
                      alt={item.name}
                      className='w-20 h-20 object-cover rounded-md mr-4'
                    />
                  )}
                  <div>
                    <div className='font-medium text-gray-700'>{item.name}</div>
                    <div className='text-gray-500'>Quantity: {item.quantity}</div>
                  </div>
                </div>
                <div className='text-gray-800 font-medium'>
                  ${(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            ))}
            <div className='flex justify-between items-center font-semibold text-gray-700 mt-4'>
              <span>Shipping Fee</span>
              <span>${shippingFee.toFixed(2)}</span>
            </div>
            <div className='flex justify-between items-center font-semibold text-gray-700 mt-4 text-xl'>
              <span>Subtotal</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>
            <div className='flex justify-between items-center font-semibold text-gray-800 mt-4 text-xl'>
              <span>Grand Total</span>
              <span>${grandTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Shipping and Payment Section */}
        <div>
          <form onSubmit={handleSubmit}>
            <div className='bg-white p-6 rounded-lg shadow-md mb-6'>
              <h3 className='text-2xl font-semibold text-gray-700 mb-4'>Shipping Information</h3>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {[
                  { label: 'First Name', name: 'firstName' },
                  { label: 'Last Name', name: 'lastName' },
                  { label: 'Email', name: 'email', type: 'email' },
                  { label: 'Country', name: 'country' },
                  { label: 'Phone', name: 'phone' },
                  { label: 'Address', name: 'address' },
                  { label: 'Zip Code', name: 'zipcode' },
                ].map((field) => (
                  <div key={field.name}>
                    <label className='block text-gray-700 font-medium mb-2'>
                      {field.label} <span className='text-red-500'>*</span>
                    </label>
                    <input
                      type={field.type || 'text'}
                      name={field.name}
                      value={formData[field.name]}
                      onChange={handleChange}
                      required
                      className='w-full border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className='bg-white p-6 rounded-lg shadow-md'>
              <h3 className='text-2xl font-semibold text-gray-700 mb-4'>Payment Details</h3>
              <div className='mb-4'>
                <label className='block text-gray-700 font-medium mb-2'>
                  Credit/Debit Card Number <span className='text-red-500'>*</span>
                </label>
                <input
                  type='text'
                  name='cardNumber'
                  placeholder='1234 5678 9012 3456'
                  className='w-full border-gray-300 rounded-md shadow-sm p-2 focus:outline-none focus:ring-2 focus:ring-blue-500'
                  required
                />
              </div>

              <div className='mb-4'>
                <h4 className='text-lg font-medium text-gray-700 mb-2'>Choose a Payment Method</h4>
                {['PayPal', 'Stripe', 'Bitcoin'].map((method) => (
                  <label key={method} className='flex items-center mb-2'>
                    <input
                      type='radio'
                      name='paymentMethod'
                      value={method}
                      onChange={handleChange}
                      required
                      className='mr-2'
                    />
                    {method}
                  </label>
                ))}
              </div>

              <div className='mb-4'>
                <label className='flex items-center'>
                  <input
                    type='checkbox'
                    name='acceptTerms'
                    checked={formData.acceptTerms}
                    onChange={handleChange}
                    className='mr-2'
                    required
                  />
                  By clicking you accept our terms and conditions
                </label>
              </div>

              <button
                type='submit'
                className='w-full bg-green-600 text-white py-3 rounded-md hover:bg-green-700 transition duration-200'
              >
                Place Order
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
