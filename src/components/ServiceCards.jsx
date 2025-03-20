import React, { useEffect, useState } from "react";
import services from "../data/services";

const [hotelsData, houseBoatsData, lodgesData, transportationData] = services;

const ServiceCards = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [serviceData, setServiceData] = useState(services); 

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300);
  }, []);

  return (
    <div className="container mx-auto px-6 sm:px-10 py-10 text-center"> 
    
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"> 
        {serviceData.map((service, index) => (
          <div
            key={index}
            className={`p-4 sm:p-6 shadow-md sm:shadow-lg rounded-lg bg-white transform transition-all duration-500 hover:scale-105 hover:shadow-2xl ${ 
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: `${index * 150}ms` }} 
          >
            <img
              src={service.img}
              alt={service.name}
              className="w-full h-32 sm:h-40 object-contain mb-2 sm:mb-4" 
            />
            <h3 className="text-lg sm:text-xl font-semibold text-gray-900">{service.name}</h3> 
            <p className="text-sm sm:text-gray-600 mt-1 sm:mt-2">{service.desc}</p> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCards;