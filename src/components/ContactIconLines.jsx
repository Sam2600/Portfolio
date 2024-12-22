import React from "react";
import { FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

export const ContactIconLines = () => {
  return (
    <div className="py-3 flex items-center text-xs text-black uppercase before:flex-[1_1_0%] before:border-t before:border-black before:me-6 after:flex-[1_1_0%] after:border-t after:border-black after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
      <div className="flex justify-center gap-10">
        <a
          href="https://www.facebook.com/kghtetsan2600"
          target="_blank"
          rel="noreferrer"
        >
          <FaFacebook className="text-3xl text-gray-700 transition-all duration-200 hover:text-blue-600 cursor-pointer" />
        </a>
        <a href="https://github.com/Sam2600" target="_blank" rel="noreferrer">
          <FaGithub className="text-3xl text-gray-700 transition duration-200 hover:text-black cursor-pointer" />
        </a>
        <a
          href="https://www.linkedin.com/in/kaung-htet-san-07034b218/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="text-3xl text-gray-700 transition duration-200 hover:text-blue-600 cursor-pointer" />
        </a>
      </div>
    </div>
  );
};
