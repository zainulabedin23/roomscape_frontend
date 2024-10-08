// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-teal-500 to-green-500 shadow-lg p-2 flex justify-between items-center">
      {/* Logo Section */}
      <div className="text-white text-xl font-bold">
        <Link to="/">Roomscapes</Link>
      </div>

      {/* User Profile Section */}
      {/* <div className="flex items-center space-x-4">
        <img
          src="https://via.placeholder.com/40" // Replace with your user profile image URL
          alt="User Profile"
          className="w-10 h-10 rounded-full border-2 border-white"
        />
        <span className="text-white font-semibold">John Doe</span>
      </div> */}
    </nav>
  );
};

export default Navbar;
