import React from 'react';
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-black/50 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Branding */}
        <div className="text-center md:text-left">
          <h1 className="text-xl font-bold text-green-500">ThinkBoard</h1>
          <p className="text-sm text-white/70 mt-1">Your personal space for organized thoughts.</p>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 text-sm text-white/80">
          <Link to="/" className="hover:text-green-500 transition-colors duration-200">Home</Link>
          <Link to="/about" className="hover:text-green-500 transition-colors duration-200">About</Link>
          <Link to="/privacy" className="hover:text-green-500 transition-colors duration-200">Privacy</Link>
          <Link to="/contact" className="hover:text-green-500 transition-colors duration-200">Contact</Link>
        </div>

        {/* Copyright */}
        <div className="text-sm text-white/60 text-center md:text-right">
          &copy; {new Date().getFullYear()} ThinkBoard. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
