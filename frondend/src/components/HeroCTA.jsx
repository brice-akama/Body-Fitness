import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';  // Import ToastContainer
import 'react-toastify/dist/ReactToastify.css';  // Import Toast styles

const NewsletterBox = () => {
  const [email, setEmail] = useState('');

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (!email) {
      toast.error('Email is required');
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || 'Subscribed successfully');
        setEmail(''); // Clear email field after successful submission
      } else {
        toast.error(data.message || 'Something went wrong');
      }
    } catch (error) {
      toast.error('Error submitting the form');
    }
  };

  return (
    <div className='text-center mt-8'>
      <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center">
        Stay Updated with Fitness Tips & Deals
      </h2>
      <p className="text-md text-center mb-8">
        Subscribe to our newsletter and never miss out on the latest updates and exclusive offers.
      </p>
      <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input
          className='w-full sm:flex-1 outline-none'
          type='email'
          placeholder='Enter your email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>
          SUBSCRIBE
        </button>
      </form>

      {/* Toast Container */}
      <ToastContainer />
    </div>
  );
};

export default NewsletterBox;
