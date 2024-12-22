import React from "react";
import { motion } from "framer-motion";
import samprofile from "../assets/samprofile.jpg";

import { IconLines } from "./IconLines";
import { TypeAnimation } from "react-type-animation";

export const IntroBio = () => {
  return (
    <motion.section
      className="py-5"
      initial={{ opacity: 0, y: "-10vw" }}
      animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
    >
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="text-center">
          <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
            <img
              className="object-cover object-center rounded-full h-60 w-60"
              src={samprofile}
              alt="profile image"
            />
          </div>

          <h1 className="font-normal text-gray-900 text-4xl leading-none mb-8">
            <TypeAnimation
              sequence={[
                "Full Stuck",
                1000,
                "Full Stack Developer",
                1000,
                "Full",
                1000,
              ]}
              repeat={Infinity}
            />
          </h1>
          <p className="font-normal text-gray-600 text-md md:text-xl mb-14">
            Full-stack developer skilled in Laravel and React, with a strong
            foundation in OOP and functional programming. Eager to explore new
            techs and join innovative teams.
          </p>
          <IconLines />
        </div>
      </div>
    </motion.section>
  );
};
