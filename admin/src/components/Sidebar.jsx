import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // List of all menu items
  const menuItems = [
    { name: 'Dashboard', path: '/' },
    { name: 'Add Product', path: '/add-product' },
    { name: 'Manage Products', path: '/manage-product' },
    { name: 'Users', path: '/users' },
    { name: 'Manage Reviews', path: '/reviews' },
    { name: 'Orders', path: '/orders' },
    { name: 'Blog Management', path: '/blogs' },
    { name: 'Reports', path: '/reports' },
    { name: 'SEO Settings', path: '/seo-settings/:id' },
    { name: 'List Product', path: '/list-product' },
    { name: 'Customer Messages', path: '/messages' },
    { name: 'Media', path: '/media' },
    { name: 'Settings', path: '/settings' },
    { name: 'Logout', path: '/logout' },
  ];

  return (
    <>
      {/* Header with Menu Icon */}
      <header className="sm:hidden fixed top-0 left-0 w-full bg-gray-900 text-white z-50 flex items-center justify-between p-4 shadow-md">
        <h1 className="text-xl font-bold">Admin Panel</h1>
        <button onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </header>

      {/* Sidebar */}
      <div
        className={`bg-gray-900 text-white h-screen w-64 fixed top-0 left-0 z-40 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } sm:translate-x-0 sm:static`}
      >
        {/* Logo Section */}
        <div className="p-4 text-center border-b border-gray-700">
          <h1 className="text-2xl font-bold">Admin Panel</h1>
        </div>

        {/* Navigation Links */}
        <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
          {menuItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              className={({ isActive }) =>
                `block p-2 rounded hover:bg-gray-700 whitespace-nowrap overflow-hidden truncate ${
                  isActive ? 'bg-gray-700' : ''
                }`
              }
              onClick={() => setIsSidebarOpen(false)} // Close on click
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Overlay for Mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 sm:hidden"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
