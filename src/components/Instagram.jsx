import React from "react";
import { FaInstagram } from "react-icons/fa"; // Import Instagram icon
import logo from "../assets/logo.jpg";

const Instagram = () => {
    const instaImages = [
        "https://picsum.photos/100?random=1",
        "https://picsum.photos/100?random=2",
        "https://picsum.photos/100?random=3",
        "https://picsum.photos/100?random=4",
        "https://picsum.photos/100?random=5",
        "https://picsum.photos/100?random=6",
        "https://picsum.photos/100?random=7",
      ];
      
  
  

  return (
    <div className="flex flex-col items-center w-full p-4 mb-12">
      <p className=" md:text-lg text-gray-700">Instagram</p>
      <h2 className="text-xl md:text-3xl font-bold text-pink-600 flex items-center p-4 gap-2">
        <FaInstagram className="text-4xl" /> Follow Us On Instagram
      </h2>

      <div className="flex flex-col md:flex-row justify-between items-center md:items-start w-full max-w-5xl gap-10">
        {/* Profile Section */}
        <div className="flex flex-col items-center gap-5">
          <div className="flex gap-4 items-center">
            <img src={logo} alt="Logo" className="h-20 w-20 md:h-24 md:w-24 border-2 border-green-500 rounded-2xl" />
            <div className="flex flex-col gap-3">
              <p className="text-xl md:text-2xl font-semibold">Fidelity Travels</p>
              <div className="flex gap-2">
                <button className="py-1 px-5 bg-green-500 text-white rounded-full text-sm md:text-base hover:bg-green-600 font-bold">
                  Follow
                </button>
                <button className="py-1 px-5 bg-gray-200 text-gray-700 rounded-full text-sm md:text-base hover:bg-gray-300 font-bold">
                  Message
                </button>
              </div>
            </div>
          </div>
          <FaInstagram className="text-[130px] md:text-[200px] text-green-500" />
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-3 md:grid-cols-4 gap-4 mt-6">
          {instaImages.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <img
                src={img}
                alt={`Instagram Post ${index + 1}`}
                className="w-20 h-20 md:w-32 md:h-32 lg:w-40 lg:h-40 object-cover rounded-lg transition-transform duration-300 hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instagram;
