import React from "react";

const FeatureCard = ({ title, company, location, type, logo }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ease-in-out border border-gray-200">
      {/* Company Logo */}
      <div className="flex items-center justify-between mb-4">
        <img
          src={logo}
          alt={title}
          className="w-12 h-12 rounded-full border border-gray-200"
        />
        <span className="text-xs bg-primary text-white px-2 py-1 rounded-md font-semibold">
          {type}
        </span>
      </div>

      {/* Job Details */}
      <h3 className="text-xl font-bold text-darkBlue mb-2 hover:text-primary transition-colors duration-200">
        {title}
      </h3>
      <p className="text-sm text-grayBlue mb-4">{company}</p>

      <div className="flex items-center text-grayBlue space-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M17.657 16.657a8 8 0 10-11.314 0M15 11a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <span>{location}</span>
      </div>

      {/* Action Button */}
      <button className="mt-4 w-full bg-primary text-white py-2 rounded-md shadow-md hover:bg-darkBlue transition-all duration-200">
        View Details
      </button>
    </div>
  );
};

export default FeatureCard;
