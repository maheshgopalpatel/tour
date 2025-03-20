import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  MapPin,
  Calendar,
  Star,
  Tag,
  Percent,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import tourPackages from "../data/tourPackages";

const PackageDetails = () => {
  const { id } = useParams();
  const packageData = tourPackages.find((pkg) => {
    if (pkg.id === parseInt(id)) {
      return pkg;
    } else {
      return pkg;
    }
  });

  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "What is included in the package?",
      answer:
        "Our packages include accommodation, meals, sightseeing, and transport. Flights are optional.",
    },
    {
      question: "Can I customize the itinerary?",
      answer:
        "Yes! We offer customized tour packages based on your preferences.",
    },
    {
      question: "What is the cancellation policy?",
      answer:
        "You can cancel up to 7 days before departure with a full refund. Last-minute cancellations may incur charges.",
    },
    {
      question: "Are flights included?",
      answer:
        "Flights are not included by default, but we can arrange them upon request.",
    },
    {
      question: "How do I confirm my booking?",
      answer:
        "You can confirm your booking by making an advance payment online or by visiting our office.",
    },
  ];

  if (!packageData) {
    return (
      <div className="text-center text-red-500 font-bold mt-10">
        Package Not Found
      </div>
    );
  }

  return (
    <div className="container mt-32 mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Section - Package Info */}
        <div className="lg:w-2/3 bg-white shadow-lg rounded-lg overflow-hidden">
          <img
            src={packageData.image}
            alt={packageData.title}
            className="w-full h-96 object-cover"
          />

          <div className="p-6">
            <h2 className="text-3xl font-bold text-gray-800">
              {packageData.title}
            </h2>

            <div className="mt-3 flex flex-wrap gap-4 text-gray-600">
              <div className="flex items-center gap-2">
                <MapPin size={18} /> {packageData.location}
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={18} /> {packageData.duration}
              </div>
              <div className="flex items-center gap-2 text-yellow-500">
                <Star size={18} /> {packageData.rating} / 5
              </div>
            </div>

            {/* Price Section */}
            <div className="mt-6 flex items-center gap-6">
              <p className="text-2xl font-bold text-green-600">
                ₹{packageData.discountedPrice}
              </p>
              <p className="text-lg text-red-500 line-through">
                ₹{packageData.originalPrice}
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-700 bg-yellow-100 px-2 py-1 rounded-md">
                <Percent size={16} /> {packageData.discount}
              </div>
            </div>

            <p className="mt-4 text-gray-700">{packageData.details}</p>

            {/* CTA Button */}
            <button className="mt-6 w-full bg-blue-500 text-white py-3 rounded-md hover:bg-blue-600 transition">
              Book Now
            </button>
          </div>
        </div>

        {/* Right Section - Booking Form */}
        <div className="lg:w-1/3 bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-xl font-bold mb-4 text-gray-800">
            Get a Free Quote
          </h3>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="tel"
              placeholder="Your Phone"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <textarea
              placeholder="Message"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows="4"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full bg-green-500 text-white py-3 rounded-md hover:bg-green-600 transition"
            >
              Submit Enquiry
            </button>
          </form>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-12 bg-gray-100 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Frequently Asked Questions
        </h3>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
              <button
                className="flex justify-between w-full text-left font-semibold text-gray-700"
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              >
                {faq.question}
                {openFAQ === index ? (
                  <ChevronUp size={18} />
                ) : (
                  <ChevronDown size={18} />
                )}
              </button>
              {openFAQ === index && (
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackageDetails;
