import React, { useState } from "react";
import { Link as ScrollLink } from "react-scroll"; // For scrolling
import { Link as RouterLink, useLocation } from "react-router-dom"; // For routing
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/"; 

  const menuItems = [
    "home",
    "about",
    "packages",
    "destination",
    "contact",
  ];

  return (
    <div className="w-full flex justify-center items-center relative">
      <nav className="fixed top-20 w-[90%] md:w-[80%] shadow-md text-white z-50 p-5 max-sm:p-0 rounded-full bg-gray-900">
        <div className="relative container mx-auto flex justify-between items-center px-4 py-2">
          {/* Logo */}
          <RouterLink to="/" className="cursor-pointer flex items-center">
            <img
              src={logo}
              alt="Logo"
              className="h-12 md:h-32 md:absolute md:-top-10 md:-left-9 border-2 border-gray-900 md:bg-gray-900 md:rounded-full"
            />
          </RouterLink>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            {menuItems.map((section) =>
              isHome ? (
                <ScrollLink
                  key={section}
                  to={section}
                  smooth={true}
                  duration={1000}
                  className="cursor-pointer hover:text-blue-400 transition"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </ScrollLink>
              ) : (
                <RouterLink
                  key={section}
                  to={`/?scrollTo=${section}`} // Pass section ID in query
                  className="cursor-pointer hover:text-blue-400 transition"
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </RouterLink>
              )
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="absolute top-full left-0 w-full rounded-b-2xl bg-white text-black shadow-lg transition-transform duration-300 md:hidden">
            {menuItems.map((section) =>
              isHome ? (
                <ScrollLink
                  key={section}
                  to={section}
                  smooth={true}
                  duration={1000}
                  className="block py-3 text-center border-b cursor-pointer hover:text-blue-500 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </ScrollLink>
              ) : (
                <RouterLink
                  key={section}
                  to={`/?scrollTo=${section}`} // Pass section ID in query
                  className="block py-3 text-center border-b cursor-pointer hover:text-blue-500 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </RouterLink>
              )
            )}
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
