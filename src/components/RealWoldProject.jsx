import React from "react";
import { motion } from "framer-motion";

export const RealWoldProject = ({
  pos,
  prj_title,
  icon,
  children,
  img,
  prj_url,
  about_prj,
}) => {
  //
  const animationProps = {
    initial: { opacity: 0, x: pos === "right" ? "10vw" : "-10vw" },
    animate: { opacity: 1, x: 0, transition: { duration: 1 } },
    exit: { opacity: 0 },
  };

  return (
    <motion.div {...animationProps} className="relative">
      <div className="flex flex-col lg:flex-row lg:items-end gap-12 lg:gap-24 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Text and Icon Section */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="flex flex-row gap-5 items-center">
            <div className="border-2 border-gray-800 rounded-md p-2">
              {icon}
            </div>
            <p className="text-lg font-semibold">{prj_title}</p>
          </div>
          <div className="flex flex-col gap-y-3 mt-5">
            <p className="text-lg text-gray-600 tracking-wide">{about_prj}</p>
            {children}
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center lg:justify-end cursor-pointer">
          <a href={prj_url} target="_blank" rel="noreferrer">
            <img
              loading="lazy"
              className="w-full max-w-md lg:max-w-none shadow-xl rounded-xl border border-gray-800"
              src={img}
              alt=""
              style={{ color: "transparent" }}
            />
          </a>
        </div>
      </div>
    </motion.div>
  );
};
