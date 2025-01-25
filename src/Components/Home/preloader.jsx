// src/Components/Home/Preloader.js
import React from "react";

const Preloader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="flex">
        <div>
          <svg
            className="w-40 h-40 animate-spin -ml-16 text-green-500"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 50 50"
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
          >
            <circle cx="25" cy="25" r="20" stroke="gray" strokeOpacity="0.3" />
            <circle
              cx="25"
              cy="25"
              r="20"
              stroke="orange" // Use dynamic color here
              strokeOpacity="0.8"
              strokeDasharray="125.6"
              strokeDashoffset="62.8"
              strokeLinecap="round"
              transform="rotate(-90 25 25)"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
