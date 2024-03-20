import React from "react";
import home from "../assets/home-img.png";
import { NavLink } from "react-router-dom";

export const IntroBio = () => {
  return (
    <section className="py-5">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center">
          <div className="flex justify-center mb-12">
            <img src={home} alt="Image" />
          </div>

          <h6 className="font-medium text-gray-600 text-lg md:text-2xl uppercase mb-8">
            Kaung Htet San
          </h6>

          <h1 className="font-normal text-gray-900 text-4xl md:text-7xl leading-none mb-8">
            Junior Full Stack Developer
          </h1>

          <p className="font-normal text-gray-600 text-md md:text-xl mb-16">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            voluptatem nesciunt ducimus dicta. Sequi alias praesentium provident
            adipisci voluptas rerum! Recusandae fugit praesentium in ipsa ut
            ratione laborum quibusdam sed.
          </p>

          <NavLink
            to={"/"}
            className="px-7 py-3 md:px-9 md:py-4 font-medium md:font-semibold bg-gray-700 text-gray-50 text-sm rounded-md hover:bg-gray-50 hover:text-gray-700 transition ease-linear duration-500"
          >
            Hire me
          </NavLink>
        </div>
      </div>
    </section>
  );
};
