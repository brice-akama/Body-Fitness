import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiSearch, FiUser, FiMenu, FiShoppingCart } from 'react-icons/fi';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import SearchData from './SearchData';
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const { cart } = useCart();
  
   // Ensure cart.items is an array before reducing
   const cartCount = Array.isArray(cart.items)
   ? cart.items.reduce((total, item) => total + item.quantity, 0)
   : 0;



  return (
    <div className="flex items-center justify-between py-4 px-6 bg-blue-900 text-white fixed top-0 left-0 z-50 w-full">
      {/* Fitness Gear Text */}
      <Link to="/" className="flex items-center no-underline">
  <span className="text-4xl font-bold tracking-wide ml-1 text-white">Fitness Gear</span>
</Link>

      {/* Navigation Menu */}
      <div className="flex-grow">
  <ul className="hidden md:flex justify-center items-center gap-10 text-sm lg:text-base mr-20">
    <NavLink to="/" className="font-bold text-white text-decoration-none mt-3">
      HOME
    </NavLink>
    <NavLink to="/shop" className="font-bold text-white text-decoration-none mt-3">
      SHOP
    </NavLink>
    <NavLink to="/about" className="font-bold text-white text-decoration-none mt-3">
      ABOUT
    </NavLink>
    <NavLink to="/contact" className="font-bold text-white text-decoration-none mt-3">
      CONTACT
    </NavLink>
    <NavLink to="/blog" className="font-bold text-white text-decoration-none mt-3">
      BLOG
    </NavLink>
  </ul>
</div>


      {/* Icons Section */}
      <div className="flex items-center gap-4 mr-5">
        {/* Search Icon */}
        <FiSearch onClick={() => setIsSearchVisible(true)} className="w-6 h-6 cursor-pointer hover:text-yellow-500 ml-6" />
   {/* SearchData Component */}
   <SearchData isSearchVisible={isSearchVisible} setIsSearchVisible={setIsSearchVisible} />


        {/* Profile Icon */}
        {/* Profile Icon */}
<Link to="/login" className="relative">
  <FiUser className="w-6 h-6 cursor-pointer hover:text-yellow-500 text-white" />
</Link>


        {/* Cart Icon */}
        <Link to="/cart" className="relative">
          <FiShoppingCart className="w-6 h-6 cursor-pointer hover:text-yellow-500 text-white mr-2" />
          <span className="absolute top-[-5px] right-[-5px] w-4 h-4 bg-yellow-500 text-xs text-center rounded-full mr-2">
              {cartCount}
          </span>
        </Link>

        {/* Mobile Menu Icon */}
        <FiMenu
          onClick={() => setMenuVisible(true)}
          className="md:hidden w-6 h-6 cursor-pointer hover:text-yellow-500"
        />
      </div>

      {/* Sidebar Menu for Small Screen */}
     {/* Sidebar Menu for Small Screen */}
<div
  className={`fixed top-0 right-0 h-full bg-white text-gray-800 transition-transform transform ${
    menuVisible ? 'translate-x-0' : 'translate-x-full'
  } w-64 z-50 shadow-lg`}
>
  <div className="flex items-center justify-between p-4 bg-blue-900 text-white">
    <span className="text-lg font-semibold">Menu</span>
    <AiOutlineArrowLeft
      onClick={() => setMenuVisible(false)}
      className="w-6 h-6 cursor-pointer"
    />
  </div>
  <ul className="mt-4 text-sm">
    <NavLink
      to="/"
      onClick={() => setMenuVisible(false)}
      className="block py-2 px-4 hover:bg-black hover:text-white border-b border-gray-300 no-underline font-bold"
    >
      HOME
    </NavLink>
    <NavLink
      to="/shop"
      onClick={() => setMenuVisible(false)}
      className="block py-2 px-4 hover:bg-black hover:text-white border-b border-gray-300 no-underline font-bold"
    >
      SHOP
    </NavLink>
    <NavLink
      to="/about"
      onClick={() => setMenuVisible(false)}
      className="block py-2 px-4 hover:bg-black hover:text-white border-b border-gray-300 no-underline font-bold"
    >
      ABOUT
    </NavLink>
    <NavLink
      to="/contact"
      onClick={() => setMenuVisible(false)}
      className="block py-2 px-4 hover:bg-black hover:text-white border-b border-gray-300 no-underline font-bold"
    >
      CONTACT
    </NavLink>
    <NavLink
      to="/blog"
      onClick={() => setMenuVisible(false)}
      className="block py-2 px-4 hover:bg-black hover:text-white border-b border-gray-300 no-underline font-bold"
    >
      BLOG
    </NavLink>
  </ul>
</div>

    </div>
  );
};

export default Navbar;
