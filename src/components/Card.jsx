import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { MapPin, Calendar, Star, Tag, Percent } from "lucide-react";
import tourPackages from "../data/tourPackages";

const Card = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === "/";
  const visiblePackages = isHome ? tourPackages.slice(0, 4) : tourPackages;

  return (
    <div className="flex flex-col items-center mb-14">
      {/* Cards Grid */}
      <div className="flex flex-wrap justify-center gap-6 p-6">
        {visiblePackages.map((pack) => (
          <div
            key={pack.id}
            className="w-80 bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <img
              src={pack.image}
              alt={pack.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">{pack.title}</h3>
              <div className="flex items-center gap-2 text-gray-600 text-sm mt-1">
                <MapPin size={16} /> {pack.location}
              </div>
              <div className="flex items-center gap-2 text-gray-600 text-sm mt-1">
                <Calendar size={16} /> {pack.duration}
              </div>
              <div className="flex items-center gap-2 text-yellow-500 text-sm mt-1">
                <Star size={16} /> {pack.rating} / 5
              </div>
              <div className="flex justify-between items-center mt-3">
                <div className="flex items-center gap-2 text-red-500">
                  <Tag size={16} />
                  <p className="line-through">₹{pack.originalPrice}</p>
                </div>
                <div className="flex items-center gap-2 text-green-600 font-bold">
                  <Tag size={16} />₹{pack.discountedPrice}
                </div>
              </div>
              <div className="flex items-center gap-2 text-sm text-gray-700 mt-1">
                <Percent size={16} /> {pack.discount}
              </div>
              <button
                className="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                onClick={() => navigate(`/package/${pack.id}`)}
              >
                Get Quote
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* View More Button (only if more than 4 packages) */}
      {isHome && (
        <button
          className="mt-4 bg-gray-900 text-white px-6 py-2 rounded-md hover:bg-gray-700 transition"
          onClick={() => navigate("/package")}
        >
          View More
        </button>
      )}
    </div>
  );
};

export default Card;
