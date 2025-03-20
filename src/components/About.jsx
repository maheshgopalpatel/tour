import React, { useEffect, useState } from "react";
import logo from "../assets/logo.jpg";
import { TiTickOutline } from "react-icons/ti";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  return (
    <div className="container mx-auto px-6 py-16">
      {/* About Section */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 bg-black rounded-2xl p-8">
        <img
          src={logo}
          className={`w-full md:w-[40%] object-cover rounded-lg transition-transform duration-1000 ${
            isVisible ? "scale-100 opacity-100" : "scale-90 opacity-0"
          }`}
          alt="Fidelity Travels Logo"
        />

        <div className="max-w-xl transition-opacity duration-1000 delay-200 text-white">
          <h3 className="uppercase text-xl text-yellow-600">About Us</h3>
          <p className="uppercase text-3xl text-yellow-600 font-bold">
            Fidelity Tour and Travels
          </p>
          <p className="text-base text-gray-300 text-justify mt-4">
            Welcome to{" "}
            <b>
              Fidelity Tour and Travels, your trusted travel partner in the
              mesmerizing paradise of{" "}
            </b>{" "}
            Kashmir. With over <b>12 years of experience</b> in the travel
            industry, we pride ourselves on delivering exceptional, personalized
            travel experiences to explore the breathtaking beauty of Kashmir.
            With <b>Fidelity Tour and Travels</b>, you’re not just booking a trip;
            you’re embarking on a journey with a family that knows Kashmir
            inside and out. Thank you for choosing us to be part of your travel
            adventure.
          </p>
          <p>
            At Fidelity Tour and Travels, we are passionate about showcasing the
            rich culture, vibrant heritage, and natural splendor of this
            stunning region. Whether you're seeking a peaceful retreat in the
            serene valleys, an adventure in the snow-capped mountains, or a
            cultural immersion in the heart of Kashmiri life, we have the
            perfect itinerary for you.
          </p>
          <p>
            Our experienced team is dedicated to providing seamless and
            hassle-free travel arrangements. From transportation to
            accommodations, guided tours, and local insights, we take care of
            every detail so you can focus on creating unforgettable memories.
            With our deep-rooted knowledge of the region, we ensure that every
            journey with us is safe, comfortable, and truly memorable.
          </p>
          <p>
            With <b>Fidelity Tour and Travels</b>, you’re not just booking a
            trip; you’re embarking on a journey with a family that knows Kashmir
            inside and out. Thank you for choosing us to be part of your travel
            adventure.
          </p>
          <p>We look forward to welcoming you to the wonders of Kashmir!</p>

          {/* Key Features */}
          <div className="flex flex-col sm:flex-row justify-between mt-6">
            <div className="flex items-center gap-4">
              <TiTickOutline className="text-yellow-600 w-10 h-10" />
              <div>
                <h4 className="text-lg font-semibold">On Time</h4>
                <p className="text-gray-400">
                  Our services ensure timely and 12 years of experience.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 mt-4 sm:mt-0">
              <TiTickOutline className="text-yellow-600 w-10 h-10" />
              <div>
                <h4 className="text-lg font-semibold">24/7 Customer Support</h4>
                <p className="text-gray-400">
                  Dedicated assistance for hotels, Lodges, guides, Transportation and medical support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
