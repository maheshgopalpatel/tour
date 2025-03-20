import React from "react";
import {
  Mail,
  MapPin,
  Phone,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react";
import logo from "../assets/roohLogo.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6 grid md:grid-cols-3 lg:grid-cols-4 gap-5">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-semibold text-white px-2 py-4 ">
            Fidelity Travels
          </h2>
          <img
            src={logo}
            alt="Logo"
            className="h-20 w-20 md:h-48 md:w-48 bg-black rounded-2xl"
          />
        </div>

        {/* Our Services */}
        <div>
          <h2 className="text-lg font-semibold text-white">Our Services</h2>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li>
              <a href="#" className="hover:text-white">
                Hotels
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                House Boats
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Lodges
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Transportation
              </a>
            </li>
          </ul>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="text-lg font-semibold text-white">Useful Links</h2>
          <ul className="mt-2 space-y-2 text-gray-400">
            <li>
              <a href="/" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white">
                Packages
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white">
                Destinations
              </a>
            </li>
            <li>
              <a href="/" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg -ml-1 font-semibold text-white">Contact Us</h2>
          <p className="flex items-center gap-2 mt-2 -ml-1 text-gray-400">
            <MapPin size={18} className="text-blue-400" /> opposite trumboo cement industries pvt ltd, Rajbagh, Srinagar, Jammu and Kashmir 190008
          </p>
          <p className="flex items-center gap-2 mt-2 text-gray-400">
            <Phone size={18} className="text-green-400" /> +91-70061 52544
          </p>
          <p className="flex items-center gap-2 mt-2 text-gray-400">
            <Mail size={18} className="text-yellow-400" />{" "}
            Booking.fidelity@gmail.com
          </p>
          {/* Social Media */}
          <div className="mt-6">
            <h2 className="text-lg font-semibold text-white">Follow Us</h2>
            <div className="flex gap-4 mt-3">
              <a
                href="https://www.facebook.com/fidelitytravels"
                className="text-gray-400 border-2 border-white p-2 hover:text-blue-500"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/fidelity.travels?igsh=MTA0bDJpdGxiM2gwaA%3D%3D&utm_source=qr"

                className="text-gray-400 border-2 border-white p-2 hover:text-pink-500"
              >
                <Instagram size={20} />
              </a>
              <a
               href="http://www.youtube.com/@fidelitytravels8929"
                className="text-gray-400 border-2 border-white p-2 hover:text-red-600"
              >
                <Youtube size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
        Copyright © Fidelity Travels Travel Company. All Rights Reserved. <br />
        Designed by Mahesh Patel and Vivek Kumar
      </div>
    </footer>
  );
};

export default Footer;
