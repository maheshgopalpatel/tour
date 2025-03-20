import React, { useEffect, useState } from "react";
import axios from "axios";

const API_KEY = "YOUR_API_KEY";  // Replace with your actual API Key
const PLACE_ID = "0x6048ddb5d251b031:0xf60c2f98d1f321d3";  // Your Place ID

const Testimonial = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/place/details/json`,
          {
            params: {
              place_id: PLACE_ID,
              fields: "rating,reviews",
              key: API_KEY,
            },
          }
        );

        if (response.data.result.reviews) {
          setReviews(response.data.result.reviews);
        }
      } catch (error) {
        console.error("Error fetching Google reviews:", error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div className="flex justify-center items-center flex-col w-full py-10 bg-gray-100">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
        What Our Clients Say
      </h2>

      {reviews.length > 0 ? (
        <div className="w-[80%] flex flex-wrap justify-center gap-4">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white shadow-lg p-4 rounded-lg w-[300px]">
              <h3 className="font-semibold text-gray-700">{review.author_name}</h3>
              <p className="text-sm text-gray-500">{review.relative_time_description}</p>
              <div className="flex my-2">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i} className={`text-yellow-400 ${i < review.rating ? "opacity-100" : "opacity-30"}`}>
                    ★
                  </span>
                ))}
              </div>
              <p className="text-gray-600 text-sm">"{review.text}"</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-600">Loading reviews...</p>
      )}
    </div>
  );
};

export default Testimonial;
