import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      toast.error('All fields are required!');
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/api/contact/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, message })
      });

      const data = await response.json();

      if (response.ok) {
        setFormStatus(data.message);
        toast.success('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        toast.error(data.message || 'Something went wrong');
      }
    } catch (error) {
      toast.error('Error submitting the form');
    }
  };

  return (
    <section className="py-16 bg-gray-50 mt-10">
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 ">
        <h2 className="text-3xl font-bold text-gray-900 text-center mt-5 ">Contact Us</h2>
        <p className="mt-4 text-lg text-gray-700 text-center max-w-3xl mx-auto">
          We would love to hear from you! Whether you have a question, need support, or just want to say hello, feel free to reach out to us.
        </p>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700">Your Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-2 block w-full px-4 py-2 border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700">Your Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-2 block w-full px-4 py-2 border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="example@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-700">Your Message</label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="4"
                  className="mt-2 block w-full px-4 py-2 border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-600"
                  placeholder="Your message here..."
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
            {formStatus && <p className="mt-4 text-center text-green-600">{formStatus}</p>}
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Our Contact Information</h3>
              <ul className="mt-4 space-y-2 text-gray-700">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mr-2 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      d="M21 12c0 5-4 9-9 9S3 17 3 12 7 3 12 3s9 4 9 9z"
                    />
                  </svg>
                  <span>+1 123-456-7890</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mr-2 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      d="M21 12c0 5-4 9-9 9S3 17 3 12 7 3 12 3s9 4 9 9z"
                    />
                  </svg>
                  <span>info@fitgear.com</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 mr-2 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <path
                      d="M3 9v3h5v-3H3zM3 13h5v3H3z"
                    />
                  </svg>
                  <span>123 Fitness Ave, City, Country</span>
                </li>
              </ul>
            </div>

            {/* Google Map */}
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Our Location</h3>
              <div className="mt-4">
                <iframe
                  width="100%"
                  height="300"
                  frameBorder="0"
                  style={{ border: 0 }}
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387190.2799120371!2d-74.259875!3d40.6976701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDIyJzQ1LjciTiA3NMKwMTEnMjAuMyJX!5e0!3m2!1sen!2sus!4v1610451425122!5m2!1sen!2sus"
                  allowFullScreen=""
                  aria-hidden="false"
                  tabIndex="0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Toast Notification Container */}
      <ToastContainer />
    </section>
  );
};

export default Contact;
