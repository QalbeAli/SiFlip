"use client";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { label: "HOME", href: "/" },
    { label: "RESOURCES", href: "/top" },
    { label: "TRAILER", href: "/trailer" },
    { label: "CONTACT", href: "/contact" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full z-50 bg-gradient-to-r from-black via-red-900 to-black border-b border-red-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo or Brand Name */}
          <div className="flex items-center justify-between h-20">
            {/* Logo Image */}
            <img
              src="/logo.png" // Adjust the path based on where your logo is located
              alt="SiFlip Logo"
              className="h-14 w-auto md:h-24" // Adjust the height and width as needed
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-gray-300 hover:text-red-500 transition-colors duration-300 font-bold tracking-wider"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-red-500 transition-colors duration-300 focus:outline-none"
            >
              {/* Icon */}
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden  mt-2">
            <div className="flex flex-col space-y-2  bg-black border-t border-red-800 p-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-gray-300 hover:text-red-500 transition-colors duration-300 font-bold tracking-wider"
                  onClick={() => setIsOpen(false)} // Close menu on item click
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
