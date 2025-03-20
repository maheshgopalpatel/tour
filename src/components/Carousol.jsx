import React, { useState, useEffect } from "react";
import b1 from "../assets/Kashmeer.jpg";
import b2 from "../assets/Ganga-Aarti.webp";
import b3 from "../assets/kk.jpg";
import b4 from "../assets/kkk.jpeg";
import b5 from "../assets/kkl.jpg";
import b6 from "../assets/kl.jpg";
import { useNavigate } from "react-router-dom";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animateText, setAnimateText] = useState(false);
  const navigate = useNavigate();

  const images = [
    { image: b1, heading: "Your Trusted Kashmir Travel Agency for Hassle-Free Trips", subHeading: "Upto 30% Off On Select Packages" },
    { image: b1, heading: "Your Trusted Kashmir Travel Agency for Hassle-Free Trips", subHeading: "Upto 30% Off On Select Packages" },
  ];

  // Function to move to the next slide
  const nextSlide = () => {
    setAnimateText(false); // Reset animation
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 600); // Matches slide transition time
  };

  // Function to move to the previous slide
  const prevSlide = () => {
    setAnimateText(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }, 600);
  };

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000); // Change slide every 5 sec

    return () => clearInterval(interval);
  }, []);

  // After slide change, start text animation with a slight delay
  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimateText(true);
    }, 700); // Start animation after slide transition

    return () => clearTimeout(timeout);
  }, [currentIndex]);

  return (
    <div className="relative w-screen h-[90vh] overflow-hidden">
      {/* Image Wrapper with Sliding Animation */}
      <div
        className="flex transition-transform duration-600 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}vw)` }}
      >
        {images.map((x, index) => (
          <div key={index} className="w-screen h-[90vh] flex-shrink-0 relative">
            <img className="w-full h-full object-cover" src={x.image} alt={`Slide ${index + 1}`} />

            {/* ✅ Animated Text Overlay */}
            <div className="absolute inset-0 flex flex-col items-center gap-5 justify-center text-center text-white z-10 w-10/12 sm:w-3/4 md:w-1/2 mx-auto">
              <i
                className={`italic text-sm sm:text-lg transition-transform duration-1000 uppercase ease-in-out  ${
                  animateText ? " opacity-100" : "-translate-x-10  opacity-0"
                }`}
              >
                fidelity travels
              </i>
              <h1
                className={`text-3xl sm:text-4xl md:text-5xl font-extrabold mt-2 transition-transform duration-1000 ease-in-out  ${
                  animateText ? " opacity-100" : "translate-x-10 opacity-0"
                }`}
              >
                {x.heading}
              </h1>
              <h2
                className={`text-lg sm:text-2xl font-bold mt-2 transition-transform duration-1000 ease-in-out  ${
                  animateText ? " opacity-100" : "-translate-x-10  opacity-0"
                }`}
              >
                {x.subHeading}
              </h2>
              <button
                className={`mt-4 py-2 px-6 rounded-2xl bg-green-500 text-white text-lg sm:text-xl transition-transform duration-1000 ease-in-out  ${
                  animateText ? " opacity-100" : "opacity-0"
                }` } onClick={() => navigate(`/package`)}
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute top-1/2 left-3 sm:left-5 transform -translate-y-1/2 bg-black bg-opacity-40 rounded-full p-2 sm:p-3 text-white text-lg sm:text-2xl"
        onClick={prevSlide}
      >
        ❮
      </button>
      <button
        className="absolute top-1/2 right-3 sm:right-5 transform -translate-y-1/2 bg-black bg-opacity-40 rounded-full p-2 sm:p-3 text-white text-lg sm:text-2xl"
        onClick={nextSlide}
      >
        ❯
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-5 left-1/2 -translate-x-10 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-white cursor-pointer ${
              index === currentIndex ? "opacity-100 scale-125" : "opacity-50"
            } transition-all duration-300`}
            onClick={() => {
              setAnimateText(false);
              setTimeout(() => {
                setCurrentIndex(index);
              }, 600);
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
