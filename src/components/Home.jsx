import React, { useEffect, useState } from "react";
import Carousel from "./Carousol";
const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300); // Delay for smooth effect
  }, []);

  return (
    <div>
      <div className="container p-8 mx-[10%]">
        {/* Animated Heading */}
        <h2
          className={`text-5xl text-white font-bold mb-4 transition-opacity duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Precision. Durability. Excellence.
        </h2>

        {/* Animated Subheading */}
        <p
          className={`text-lg text-gray-400  transition-opacity duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          "Your Trusted Partner in Structural Steel Fabrication & Galvanization
          – Delivering High-Quality, Maintenance-Free Solutions with Unwavering
          Commitment to On-Time Delivery."
        </p>

        {/* Animated Button */}
        <button
          className={`mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:bg-blue-700 hover:scale-105 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Home;
