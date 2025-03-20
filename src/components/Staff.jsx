import React from "react";
import staffMembers from "../data/staffMembers"; // Import dummy data

const Staff = () => {
  return (
    <div className="flex flex-col items-center justify-center my-10 px-4 w-[90%]">
      <h2 className="text-3xl font-bold text-blue-700 mb-6">Our Professional Staff</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full ">
        {staffMembers.map((staff) => (
          <div
            key={staff.id}
            className="flex flex-col items-center bg-white p-5 shadow-lg rounded-xl w-72 md:w-full transition-transform duration-300 hover:scale-105"
          >
            <div className="w-40 h-40 ">
              <img
                src={staff.image}
                alt={staff.name}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
            <h3 className="mt-4 text-lg font-semibold">{staff.name}</h3>
            <p className="text-gray-600">{staff.position}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Staff;
