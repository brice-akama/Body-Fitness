import React from "react";
import { Link } from "react-router-dom";
import work1 from "../assets/workout8.webp";

const About = () => {
  return (
    <section className="py-16">
      {/* Hero Section */}
      <div className="relative w-full h-96 md:h-[28rem] lg:h-[36rem]">
        <img
          src={work1} // Corrected to reference the imported image directly
          alt="Hero Banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center text-center text-white z-10">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Fuel Your Fitness Journey with Premium Gear
            </h1>
            <p className="mt-4 text-lg md:text-xl">
              High-quality, affordable fitness equipment to help you reach your goals.
            </p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Our Story
        </h2>
        <p className="mt-6 text-lg text-gray-700 text-center max-w-3xl mx-auto">
          At <strong>FitGear</strong>, we believe that fitness is for everyone. Our journey began with a simple goal: to make high-quality fitness gear accessible to all. We’re passionate about helping individuals from all walks of life achieve their health and fitness goals through durable, affordable, and reliable equipment.
        </p>
      </div>

      {/* Core Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 px-4 sm:px-6 lg:px-8 mt-12">
        <div className="text-center p-6 border rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-blue-600">Quality You Can Trust</h3>
          <p className="mt-4 text-gray-700">
            We pride ourselves on offering only the best products designed to withstand your toughest workouts.
          </p>
        </div>
        <div className="text-center p-6 border rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-blue-600">Affordable for All</h3>
          <p className="mt-4 text-gray-700">
            Fitness should be accessible. Our goal is to provide premium gear at prices that won't break the bank.
          </p>
        </div>
        <div className="text-center p-6 border rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-blue-600">Built for Every Level</h3>
          <p className="mt-4 text-gray-700">
            Whether you're just starting out or you're a seasoned athlete, we have equipment that meets your needs.
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <h2 className="text-3xl font-bold text-gray-900 text-center">
          Our Mission
        </h2>
        <p className="mt-6 text-lg text-gray-700 text-center max-w-3xl mx-auto">
          At FitGear, our mission is simple: to inspire and support individuals on their fitness journeys. From cardio to strength training, we provide everything you need to reach your goals. Our commitment to quality, affordability, and customer satisfaction drives us to deliver the best products to help you perform at your peak.
        </p>
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <Link
          to="/shop"
          className="bg-blue-600 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors outline-none text-decoration-none"
        >
          Shop Now and Start Your Journey
        </Link>
      </div>
    </section>
  );
};

export default About;
