// Features.jsx
import React from 'react';
import { FaAward, FaDollarSign, FaShippingFast } from 'react-icons/fa'; // Import icons

const Features = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-16">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <FaAward className="text-yellow-500 text-4xl mb-4" /> {/* Icon */}
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Premium Quality</h3>
            <p className="text-gray-600 text-center">
              Our equipment is made to last, ensuring you get the most out of every workout.
            </p>
          </div>
          {/* Feature 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <FaDollarSign className="text-green-500 text-4xl mb-4" /> {/* Icon */}
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Affordable Prices</h3>
            <p className="text-gray-600 text-center">
              Fitness should be accessible. Our products are priced to fit your budget.
            </p>
          </div>
          {/* Feature 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center">
            <FaShippingFast className="text-blue-500 text-4xl mb-4" /> {/* Icon */}
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Fast Shipping</h3>
            <p className="text-gray-600 text-center">
              We provide quick delivery to get your gear to you as soon as possible.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
