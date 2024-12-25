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
        <div className="flex flex-col gap-y-3 text-center">
          <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
            <img
              className="object-cover object-center rounded-full h-60 w-60 shadow-lg border-2 border-gray-800 p-2"
              src={samprofile}
              alt="profile image"
            />
          </div>

          <div className="flex flex-col gap-y-3">
            <h1 className="font-normal text-gray-900 text-4xl leading-none mb-8">
              <TypeAnimation
                sequence={[
                  "Full Stuck",
                  1000,
                  "Full ...",
                  1000,
                  "Full Stack Developer",
                  1000,
                  " ",
                  1000,
                ]}
                repeat={Infinity}
              />
            </h1>
            <p className="font-normal text-gray-800 text-center text-md md:text-xl mb-14">
              <code>$goodAt = </code>
              <code>
                [
                <span className="font-semibold text-gray-900">
                  cloud computing, object-oriented, functional programming
                </span>
                ];
              </code>
              <br /> <br />
              Passionate about exploring new technologies and contributing to
              innovative projects.
            </p>
          </div>
        </div>
        <IconLines />
      </div>
    </motion.section>
  );
};
