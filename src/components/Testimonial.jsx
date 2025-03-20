import React, { useState, useRef } from "react";

const testimonials = [
  {
    name: "MEGHA P",
    photo: "",
    rating: 5,
    date: "20th March 2024",
    comment:
      "Highly recommended! Superb experience I was extremely satisfied with fidelity Tours. The owner has proven to be very courteous and helpful from the very beginning, trying to organize at the best our trip during peak time. The drivers are very professional and friendly, simply superb. I highly recommend it, will turn your trip into an unforgettable experience! Most memorable.",
  },
  {
    name: "Sarsariya Sarsariya",
    photo: "",
    rating: 5,
    date: "one year ago",
    comment:
      "Wooooooow superb experience..I will be using this service again! Responsive and a delight to book a holiday through Fidelity Tour and travel agency. Everything was brilliant, great holiday, great place to stay, Great Communication, Quick response to my questions. Your company is amazing. Thank you for all your help and support! Yes, I would recommend you.",
  },
  {
    name: "Kangen World",
    photo: "",
    rating: 5,
    date: "10 months ago",
    comment:
      "Nice experience with Fidelity. Properly planned tour and they have managed all the situation well which is the best part of their hospitality. Also, they gave some surprises which made our tour memorable.",
  },
];

const ExpandableText = ({ text, maxLength = 120 }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <p className="text-gray-600 text-sm px-5 text-justify">
      {expanded ? text : `${text.slice(0, maxLength)}... `}
      {text.length > maxLength && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-blue-500 underline ml-1"
        >
          {expanded ? "Show Less" : "Read More"}
        </button>
      )}
    </p>
  );
};

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = (index) => {
    setActiveIndex(index);
    const scrollWidth = scrollRef.current.scrollWidth;
    const cardWidth = scrollWidth / testimonials.length;
    scrollRef.current.scrollTo({
      left: cardWidth * index,
      behavior: "smooth",
    });
  };

  return (
    <div className="flex justify-center items-center flex-col w-full py-10 bg-gray-100">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
        What Say Our Clients
      </h2>

      <div className="relative w-[80%]">
        <div
          ref={scrollRef}
          className="flex space-x-4 px-6 py-4 overflow-x-auto snap-x snap-mandatory scrollbar-hidden"
          style={{ scrollBehavior: "smooth" }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="min-w-[300px] bg-white rounded-lg shadow-lg p-4 flex flex-col items-center snap-center"
            >
              {testimonial.photo ? (
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-2 border-blue-500"
                />
              ) : (
                <div className="w-16 h-16 flex items-center justify-center bg-blue-500 text-white text-2xl font-semibold rounded-full">
                  {testimonial.name.charAt(0)}
                </div>
              )}

              <h3 className="mt-2 font-semibold text-gray-700">
                {testimonial.name}
              </h3>
              <p className="text-sm text-gray-500">{testimonial.date}</p>

              <div className="flex my-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <span
                    key={i}
                    className={`text-yellow-400 ${
                      i < testimonial.rating ? "opacity-100" : "opacity-30"
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>

              <ExpandableText text={testimonial.comment} />
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-4 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleScroll(index)}
              className={`w-3 h-3 rounded-full ${
                activeIndex === index ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
