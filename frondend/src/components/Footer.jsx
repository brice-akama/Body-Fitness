import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin, FaChevronUp } from "react-icons/fa";

const Footer = () => {
  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 focus:outline-none"
        aria-label="Back to top"
      >
        <FaChevronUp size={20} />
      </button>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-8 px-4 md:px-16 mt-5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <h2 className="text-2xl font-bold mb-4">Fitness Gear</h2>
            <p className="text-sm leading-6 text-gray-400">
              Your one-stop shop for premium fitness equipment to help you stay
              fit and healthy.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/" className="hover:text-yellow-500 no-underline">Home</Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-yellow-500 no-underline">Shop</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-yellow-500 no-underline">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-yellow-500 no-underline">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Customer Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/faq" className="hover:text-yellow-500 no-underline">FAQ</Link>
              </li>
              <li>
  <Link to="/shipping" className="hover:text-yellow-500 no-underline">Shipping Info</Link>
</li>
<li>
  <Link to="/returns" className="hover:text-yellow-500 no-underline">Returns & Refunds</Link>
</li>
<li>
  <Link to="/privacy" className="hover:text-yellow-500 no-underline">Privacy Policy</Link>
</li>

            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-yellow-500"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-yellow-500"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-yellow-500"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-yellow-500"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-500">
          <p>&copy; 2024 Fitness Gear. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
