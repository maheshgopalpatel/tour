import React from "react";
import { Hotel, Ship, Home, Car, Percent } from "lucide-react";

const services = [
  { id: 1, name: "Hotels", icon: <Hotel size={24} /> },
  { id: 2, name: "House Boats", icon: <Ship size={24} /> },
  { id: 3, name: "Lodges", icon: <Home size={24} /> },
  { id: 4, name: "Transportation", icon: <Car size={24} /> },
];

const Services = () => {
  return (
    <div className="flex flex-col items-center p-6 bg-gray-100">
      <h2 className=" text-4xl max-sm:text-3xl font-bold text-gray-800">Our Services</h2>

      {/* Services List */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col items-center bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <div className="text-blue-600">{service.icon}</div>
            <p className="mt-2 text-gray-700 font-semibold">{service.name}</p>
          </div>
        ))}
      </div>

      {/* Mega Offer */}
      <div className="mt-8 bg-blue-500 text-white px-6 py-4 rounded-lg shadow-md flex items-center gap-3">
        <Percent size={32} />
        <p className="text-lg font-semibold">Mega Offer: 30% OFF On Select Packages</p>
      </div>

      {/* Privacy Notice */}
      <p className="mt-4 text-gray-600 text-sm text-center max-w-md">
        "We respect your privacy! Your email address is safe with us! We only use it to reply to your messages and won't share it without your permission. Your trust means everything to us."
      </p>
    </div>
  );
};

export default Services;
