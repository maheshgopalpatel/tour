import React, { useEffect, useState } from "react";
import b1 from "../assets/dd.jpeg";
import b2 from "../assets/Ganga-Aarti.webp";
import b3 from "../assets/kk.jpg";
import b4 from "../assets/kkk.jpeg";
import b5 from "../assets/kkl.jpg";
import b6 from "../assets/kl.jpg";

const Products = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsVisible(true), 300); // Delay animation for a smooth effect
  }, []);

  return (
    <div className="container mx-auto p-10 text-center">
      <h2
        className={`text-4xl max-sm:text-3xl font-bold mb-6 text-gray-900 transition-opacity duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        }`}
      >
        Our Products
      </h2>
      <p className="text-lg text-gray-700 mb-8">
        We offer a wide range of high-quality steel products, catering to multiple industries.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Product Items */}
        {[ 
          { name: "Steel Rods", img: b1, desc: "High-strength steel rods for construction and industrial use." },
          { name: "Steel Sheets", img: b2, desc: "Durable steel sheets available in various sizes and thicknesses." },
          { name: "Steel Pipes", img: b3, desc: "Precision-engineered steel pipes for multiple applications." },
          { name: "Steel Angles", img: b4, desc: "Versatile steel angles for framing, brackets, and reinforcements." },
          { name: "Steel Beams", img: b5, desc: "Heavy-duty steel beams for large structural applications." },
          { name: "Steel Channels", img: b6, desc: "Strong and reliable steel channels for industrial frameworks." }
        ].map((product, index) => (
          <div
            key={index}
            className={`p-6 shadow-lg rounded-lg bg-white transform transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            <img src={product.img} alt={product.name} className="w-full h-40 object-contain mb-4" />
            <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
            <p className="text-gray-600 mt-2">{product.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
