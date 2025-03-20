import React from "react";
import {
  Mail,
  Phone,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Link,
} from "lucide-react";
import logo from "../assets/roohLogo.png";

const Head = () => {
  return (
    <header className="fixed top-0 w-full bg-gray-900 text-white p-4 z-50 shadow-md">
      <div className="container mx-auto flex md:flex-row justify-between items-center text-sm space-y-2 md:space-y-0 px-4">
        {/* Contact Info */}
        <div className="flex md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
          <div className="flex items-center max-sm:hidden space-x-2">
            <Mail size={18} />
            <span>Booking.fidelity@gmail.com</span>
          </div>
          <div className="flex items-center  space-x-2">
            <Phone size={18} />
            <span>+917006152544 </span>
            <span>+918899666926</span>
          </div>
          <div className="flex items-center max-sm:hidden space-x-2 md:hidden">
            <Clock size={18} />
            <span>Sun - Fri (9:00 AM - 6:00 PM)</span>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex items-center space-x-4">
          <a
            href="https://www.facebook.com/fidelitytravels"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <Facebook size={20} />
          </a>
          <a
            href="https://www.instagram.com/fidelity.travels?igsh=MTA0bDJpdGxiM2gwaA%3D%3D&utm_source=qr"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <Instagram size={20} />
          </a>
          <a
            href="http://www.youtube.com/@fidelitytravels8929"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-700 transition"
          >
            <Youtube size={24} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Head;
