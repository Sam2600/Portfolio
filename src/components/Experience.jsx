import React from "react";

export const Experience = ({
  number,
  position,
  company_logo,
  exp_time,
  children,
}) => {
  return (
    <div className="flex justify-between space-x-6">
      <h1 className="font-normal text-gray-700 text-2xl md:text-3xl">
        {number}
      </h1>

      <span className="w-28 h-0.5 bg-gray-800 mt-5"></span>

      <div className="w-full">
        <h1 className="font-normal text-gray-800 text-2xl md:text-2xl mb-5">
          {position}
        </h1>

        <div className="flex justify-between items-center mb-3">
          <p className="font-bold">{exp_time}</p>
          <img
            alt="Brycen Myanmar"
            width="50"
            height="50"
            className="object-cover rounded-full p-1 border shadow-lg border-gray-800"
            style={{ color: "transparent" }}
            src={company_logo}
          />
        </div>
        <p className="font-normal text-gray-600 text-sm md:text-base">
          {children}
        </p>
      </div>
    </div>
  );
};
