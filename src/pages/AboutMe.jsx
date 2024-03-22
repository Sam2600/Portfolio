import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import sam from "../assets/samprofile.jpg";
import resume from "../assets/KaungHtetSan-Resume.pdf";
import {
  FaLaravel,
  FaReact,
  FaPhp,
  FaJs,
  FaDocker,
  FaHtml5,
  FaCss3,
  FaFacebook,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

export const AboutMe = () => {
  return (
    <motion.div
      className="bg-gray-100"
      layout
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
      viewport={{ once: true }}
    >
      <AnimatePresence>
        <div className="bg-gray-100">
          <div className="container mx-auto py-8">
            <div className="grid grid-cols-4 sm:grid-cols-12 gap-6 px-4">
              <div className="col-span-4 sm:col-span-3">
                <div className="bg-white shadow rounded-lg p-6">
                  <div className="flex flex-col items-center">
                    <img
                      src={sam}
                      className="w-32 h-32 bg-gray-300 rounded-full mb-4 shrink-0"
                    ></img>
                    <h1 className="text-xl font-bold">Kaung Htet San</h1>
                    <p className="text-gray-700">Full Stack Developer</p>
                    <div className="mt-6 flex flex-wrap gap-4 justify-center">
                      <a
                        href="mailto: kghtetsan26@gmail.com"
                        className="bg-black transition-all duration-150 border hover:border-black hover:bg-white hover:text-black text-white py-2 px-4 rounded"
                      >
                        Mail Me
                      </a>
                      <a
                        href={resume}
                        download={true}
                        className="bg-gray-300 transition-all duration-150 hover:text-white hover:bg-gray-400 text-gray-700 py-2 px-4 rounded"
                      >
                        <div className="flex items-center justify-evenly gap-1">
                          Resume
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            class="w-5 h-5"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                            />
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                  <hr className="my-6 border-t border-gray-300" />
                  <div className="flex flex-col">
                    <span className="text-gray-700 uppercase font-bold tracking-wider mb-2">
                      Skills
                    </span>
                    <ul>
                      <li className="my-2 flex items-center justify-between">
                        PHP <FaPhp className="text-2xl" />
                      </li>
                      <hr />
                      <li className="my-2 flex items-center justify-between">
                        JavaScript <FaJs className="text-2xl" />
                      </li>
                      <hr />
                      <li className="my-2 flex items-center justify-between">
                        Laravel <FaLaravel className="text-2xl" />
                      </li>
                      <hr />
                      <li className="my-2 flex items-center justify-between">
                        React <FaReact className="text-2xl" />
                      </li>
                      <hr />
                      <li className="my-2 flex items-center justify-between">
                        Docker <FaDocker className="text-2xl" />
                      </li>
                      <hr />
                      <li className="my-2 flex items-center justify-between">
                        HTML & CSS
                        <div className="flex gap-3">
                          <FaHtml5 className="text-2xl" />{" "}
                          <FaCss3 className="text-2xl" />
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-span-4 sm:col-span-9">
                <div className="bg-white shadow rounded-lg p-6">
                  <h2 className="text-xl font-bold mb-4">About Me</h2>
                  <p className="text-gray-700">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    finibus est vitae tortor ullamcorper, ut vestibulum velit
                    convallis. Aenean posuere risus non velit egestas suscipit.
                    Nunc finibus vel ante id euismod. Vestibulum ante ipsum
                    primis in faucibus orci luctus et ultrices posuere cubilia
                    Curae; Aliquam erat volutpat. Nulla vulputate pharetra
                    tellus, in luctus risus rhoncus id.
                  </p>

                  <h3 className="font-semibold text-center my-8 mb-3">
                    Find Me On
                  </h3>

                  <div class="py-3 flex items-center text-xs text-black uppercase before:flex-[1_1_0%] before:border-t before:border-black before:me-6 after:flex-[1_1_0%] after:border-t after:border-black after:ms-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
                    <div className="flex justify-center gap-10">
                      <a
                        href="https://www.google.com/search?client=firefox-b-d&q=facebook"
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
                      <FaLinkedin className="text-3xl transition duration-200 hover:text-blue-600 cursor-pointer" />
                    </div>
                  </div>

                  <h1 class=" text-center pb-3 my-10 text-3xl font-semibold text-gray-900 ">
                    My Entire Career Experiences
                  </h1>
                  <div className="my-5 space-y-5 rounded">
                    <article class="p-4 space-y-5 transition bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-lg sm:p-6">
                      <div className="flex justify-between flex-wrap gap-2 w-full">
                        <span className="text-gray-700 font-bold">
                          Web Developer
                        </span>
                        <p>
                          <span className="text-gray-700 mr-2">
                            at ABC Company
                          </span>
                          <span className="text-gray-700">2017 - 2019</span>
                        </p>
                      </div>
                      <p className="mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed finibus est vitae tortor ullamcorper, ut vestibulum
                        velit convallis. Aenean posuere risus non velit egestas
                        suscipit.
                      </p>
                    </article>
                    <article class="p-4 space-y-5 transition bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-lg sm:p-6">
                      <div className="flex justify-between flex-wrap gap-2 w-full">
                        <span className="text-gray-700 font-bold">
                          Web Developer
                        </span>
                        <p>
                          <span className="text-gray-700 mr-2">
                            at ABC Company
                          </span>
                          <span className="text-gray-700">2017 - 2019</span>
                        </p>
                      </div>
                      <p className="mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed finibus est vitae tortor ullamcorper, ut vestibulum
                        velit convallis. Aenean posuere risus non velit egestas
                        suscipit.
                      </p>
                    </article>
                    <article class="p-4 space-y-5 transition bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-lg sm:p-6">
                      <div className="flex justify-between flex-wrap gap-2 w-full">
                        <span className="text-gray-700 font-bold">
                          Web Developer
                        </span>
                        <p>
                          <span className="text-gray-700 mr-2">
                            at ABC Company
                          </span>
                          <span className="text-gray-700">2017 - 2019</span>
                        </p>
                      </div>
                      <p className="mt-2">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Sed finibus est vitae tortor ullamcorper, ut vestibulum
                        velit convallis. Aenean posuere risus non velit egestas
                        suscipit.
                      </p>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatePresence>
    </motion.div>
  );
};
