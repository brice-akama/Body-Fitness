import React from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import img1 from "../assets/hero.png";

const HeroSection = () => {
  return (
    <div className="relative w-full  overflow-hidden z-10"> {/* Adjusted heights and z-index */}
      <img 
        src={img1} 
        alt="Hero" 
        className="w-full h-[50vh] md:h-[50vh] lg:h-[100vh] object-cover" 
      />
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
        <h2 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold uppercase text-center px-4">
          Upgrade Your Fitness Routine
        </h2>
        <Link
          to="/shop" // Use Link to prevent page reload
          className="absolute bottom-10 md:bottom-16 left-10 px-8 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-400 outline-none text-decoration-none mb-10"
        >
          Shop Now
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
