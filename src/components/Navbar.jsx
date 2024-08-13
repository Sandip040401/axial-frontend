import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // For the hamburger menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-white py-4 px-6 md:px-44">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <a href="/" className="text-2xl font-extrabold text-white">
            <img src="/axial.svg" alt="" className="h-16 transition-transform duration-300 hover:scale-105" />
          </a>
        </div>

        {/* Menu Items and Actions */}
        <div className="hidden md:flex items-center space-x-8">
          {["Home", "Ventures", "Corporate", "Careers", "Portfolio", "Insights", "Contact"].map((item) => (
            <a
              key={item}
              href="/"
              className="text-lg font-medium transform transition-transform duration-200 hover:-translate-y-1 hover:text-gray-300"
            >
              {item}
            </a>
          ))}
          <a
            href="#"
            className="bg-white text-black px-4 py-2 rounded-lg shadow-lg hover:bg-opacity-90 transition font-semibold transform transition-transform duration-200 hover:-translate-y-1"
          >
            Apply
          </a>
        </div>

        {/* Hamburger Menu */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 rounded-lg shadow-lg mt-4">
          {["Home", "Ventures", "Corporate", "Careers", "Portfolio", "Insights", "Contact"].map((item) => (
            <a
              key={item}
              href="/"
              className="block px-4 py-2 text-white hover:bg-gray-700 transition-colors duration-200 font-medium"
            >
              {item}
            </a>
          ))}
          <a
            href="#"
            className="block px-4 py-2 mt-2 text-center text-black bg-white rounded-lg shadow font-semibold"
          >
            Apply
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
