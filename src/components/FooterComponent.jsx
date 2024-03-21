import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const FooterComponent = () => {
  return (
    <section className="bg-white">
      <div className="flex-col sm:flex sm:flex-col md:flex md:flex-row lg:flxex lg:flex-row justify-around py-4 mx-auto border border-t-stone-900 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center 2">
          <div className="px-5 py-2">
            <NavLink
              to={"/"}
              className="text-base hover:underline leading-6 text-gray-600 hover:text-gray-900"
            >
              Home
            </NavLink>
          </div>
          <div className="px-5 py-2">
            <NavLink
              to={"/"}
              className="text-base hover:underline leading-6 text-gray-600 hover:text-gray-900"
            >
              Contact
            </NavLink>
          </div>
          <div className="px-5 py-2">
            <NavLink
              to={"/"}
              className="text-base  hover:underline leading-6 text-gray-600 hover:text-gray-900"
            >
              Projects
            </NavLink>
          </div>

          <div className="px-5 py-2">
            <NavLink
              to={"/about-me"}
              className="text-base  hover:underline leading-6 text-gray-600 hover:text-gray-900"
            >
              About
            </NavLink>
          </div>
        </nav>
        <p className="text-base py-2 leading-6 text-center text-gray-600">
          © 2024 Kaung Htet San. All rights reserved. MIT License.
        </p>
      </div>
    </section>
  );
};
