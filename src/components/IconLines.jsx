import React from "react";
import {
  FaReact,
  FaLaravel,
  FaDatabase,
  FaDocker,
  FaAws,
} from "react-icons/fa";

export const IconLines = () => {
  return (
    <div className=" mt-20 flex items-center text-xs text-black uppercase before:flex-[1_1_0%] before:border-t before:border-black before:me-6 after:flex-[1_1_0%] after:border-t after:border-black after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
      <div className="flex justify-center gap-10">
        <FaReact className="text-3xl transition-all duration-200 hover:text-blue-600" />
        <FaLaravel className="text-3xl transition duration-200 hover:text-red-600" />
        <FaAws className="text-3xl transition duration-200 hover:text-orange-500" />
        <FaDocker className="text-3xl transition duration-200 hover:text-blue-600" />
        <FaDatabase className="text-3xl transition duration-200 hover:text-green-500" />
      </div>
    </div>
  );
};
