import React from "react";
import { useNavigate } from "react-router-dom";

const FloatingBadge = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/shop');  // Navigate to /shop when the badge is clicked
  };

  return (
    <div
      className="fixed left-0 top-1/2 transform -translate-y-1/2 bg-white text-black py-3 px-4 rounded-r-lg shadow-lg cursor-pointer hover:bg-red-600 transition duration-300 z-50 flex items-center"
      onClick={handleClick}  // Trigger navigation on click
      style={{
        writingMode: "vertical-rl", // Makes text vertical
        textOrientation: "upright", // Ensures letters stay upright
      }}
    >
      <p className="text-lg font-bold">50% Off</p>
    </div>
  );
};

export default FloatingBadge;
