import React, { useEffect, useState } from "react";
import Card from "./Card";
import b1 from "../assets/Srinagar_City.png";
import b2 from "../assets/Keran_Valley.png";
import b3 from "../assets/Aharbal_Waterfall.jpg";
import b4 from "../assets/Gurez_Valley.jpg";
import b5 from "../assets/Yousmarg.png";
import b6 from "../assets/Gulmarg.png";

// Sector Data with images
const sectors = [
  { name: "Srinagar City", image: b1 },
  { name: "Pahalgham", image: b2 },
  { name: "Aharbal Waterfall", image: b3 },
  { name: "Gurez Valley", image: b4 },
  { name: "Sonamarg", image: b5 },
  { name: "Gulmarg", image: b6 },
  { name: "Leh", image: b6 },
  { name: "Katra", image: b6 },
];
const Destination = () => {
  return (
    <div id="Destination " className={`container mx-auto p-12 text-center`}>
      <i>Destination </i>
      <h2 className="text-4xl max-sm:text-3xl font-bold text-gray-900 mb-10">
      Explore Our Top Destination 
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {sectors.map((sector, index) => (
            <div
              key={index}
              className="relative p-4 text-white border border-yellow-500 bg-gray-800 rounded-lg text-sm font-medium shadow-md 
              transform transition-all duration-500 hover:bg-yellow-600 hover:text-black hover:scale-105"
            >
              <img
                src={sector.image}
                alt={sector.name}
                className="w-full h-28 object-cover rounded-md mb-2  transition-opacity duration-500 opacity-80 hover:opacity-100"
              />
              <p>{sector.name}</p>
            </div>
          ))}
        </div>
    </div>
  );
};

export default Destination
