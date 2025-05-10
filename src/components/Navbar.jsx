
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-gray-800 shadow-md px-4 py-3 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-10 text-lg font-medium">
          <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">Home</Link><br />
          <Link to="/how-it-works" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">How It Works</Link><br />
          <Link to="/why-choose-us" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">Why Choose Us</Link><br />
          <Link to="/testimonials" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">Testimonials</Link><br />
          <Link to="/contact" className="text-gray-700 dark:text-gray-300 hover:text-blue-600">Contact</Link>
        </div>

        {/* Logo */}
        <div className="flex items-center space-x-2">
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

