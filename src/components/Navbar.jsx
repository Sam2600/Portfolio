import React from "react";
import navlogo from "../assets/navbar-logo.png";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between ">
      <img src={navlogo} alt="brand" />

      <button className="px-7 py-3 md:px-9 md:py-4 bg-white font-medium md:font-semibold text-gray-700 text-md rounded-md hover:bg-gray-700 hover:text-white transition ease-linear duration-500">
        Get my CV
      </button>
    </nav>
  );
};
