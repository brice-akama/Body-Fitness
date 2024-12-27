import React, { useState } from "react";
import { useNavigate } from "react-router-dom";  // Ensure react-router-dom is imported
import img1 from "../assets/workout3.webp";
import img6 from "../assets/workout.webp";
import img3 from "../assets/workout1.webp";
import img2 from "../assets/workout4.webp";
import img22 from "../assets/workout5.webp";
import img4 from "../assets/workout6.webp";
import img25 from "../assets/workout7.webp";
import img5 from "../assets/workout8.webp";


const FitnessInAction = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null); // Track hovered image index
  const navigate = useNavigate();  // For navigation

  const workoutImages = [
    {
      src: img6,
      alt: "Person lifting weights",
      overlaySrc: img3, // Hover image
      description: "A person lifting weights in the gym.",
      path: "/product1"  // Navigate path
    },
    {
      src: img1,
      alt: "Person running on a treadmill",
      overlaySrc: img2, // Hover image
      description: "A person running on a treadmill.",
      path: "/product2"  // Navigate path
    },
    {
      src: img22,
      alt: "Person stretching",
      overlaySrc: img4, // Hover image
      description: "A person stretching in the studio.",
      path: "/product3"  // Navigate path
    },
    {
      src: img25,
      alt: "Person doing yoga",
      overlaySrc: img5, // Hover image
      description: "A person doing yoga.",
      path: "/product4"  // Navigate path
    },
  ];

  // Open popup for selected image
  const openPopup = (image) => {
    setSelectedImage(image);
    setIsPopupOpen(true);
  };

  // Close the popup
  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedImage(null);
  };

  // Handle hover
  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  // Navigate to product page
  const handleViewMoreClick = (path) => {
    navigate(path); // Navigate to the specific product page
  };

  return (
    <section className="bg-gray-100 py-16 px-4 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-semibold text-gray-900">Fitness in Action</h2>
          <p className="mt-4 text-lg text-gray-600">
            Get inspired by how others are using our equipment to achieve their fitness goals.
          </p>
        </div>

        {/* Images Grid with Hover Effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {workoutImages.map((image, index) => (
            <div
              key={index}
              className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Base Image */}
              <img
                src={hoveredIndex === index ? image.overlaySrc : image.src}
                alt={image.alt}
                className="w-full h-84 object-cover transition-all duration-300"
              />
              {/* View More Button */}
              {hoveredIndex === index && (
                <div
                  className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                  onClick={() => openPopup(image)}
                >
                  <button className="text-white bg-yellow-500 py-2 px-4 rounded-lg">
                    View More
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div
          className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={closePopup}
        >
          <div
            className="bg-white p-6 rounded-lg w-1/2 relative"  // Added relative position here
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-xl font-bold text-gray-600 z-10"  // Ensure it's on top
              onClick={closePopup}
            >
              X
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {selectedImage.alt}
            </h3>
            <p className="text-gray-600 mb-4">{selectedImage.description}</p>
           
          </div>
        </div>
      )}
    </section>
  );
};

export default FitnessInAction;
