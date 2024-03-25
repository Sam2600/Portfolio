import React from "react";
import { motion } from "framer-motion";
import samprofile from "../assets/samprofile.jpg";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

export const IntroBio = () => {
  return (
    <motion.section
      className="py-5"
      initial={{ opacity: 0, y: "-10vw" }}
      animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
    >
      {/* <section className="py-5"> */}
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
            Junior Full Stack Developer
          </h1>

          <p className="font-normal text-gray-600 text-md md:text-xl mb-14">
            Full-stack developer skilled in Laravel and React, with a strong
            foundation in OOP and functional programming. Eager to explore new
            techs and join innovative teams.
          </p>

          <div className="py-3 flex items-center text-xs text-black uppercase before:flex-[1_1_0%] before:border-t before:border-black before:me-6 after:flex-[1_1_0%] after:border-t after:border-black after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
            <div className="flex justify-center gap-10">
              <a
                href="https://www.facebook.com/kghtetsan2600"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebook className="text-3xl transition-all duration-200 hover:text-blue-600 cursor-pointer" />
              </a>
              <a
                href="https://github.com/Sam2600"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="text-3xl transition duration-200 hover:text-blue-600 cursor-pointer" />
              </a>
              <a
                href="https://www.linkedin.com/in/kaung-htet-san-07034b218/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="text-3xl transition duration-200 hover:text-blue-600 cursor-pointer" />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* </section> */}
    </motion.section>
  );
};
