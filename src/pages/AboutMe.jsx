import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import sam from "../assets/samprofile.jpg";
import resume from "../assets/KaungHtetSan-Resume.pdf";
import bcmm from "../assets/bcmm.jpg";
import survey from "../assets/Survey-modified.png";
import wunzin from "../assets/wunzin.png";
import {
  FaLaravel,
  FaReact,
  FaPhp,
  FaJs,
  FaDocker,
  FaHtml5,
  FaCss3,
} from "react-icons/fa";

export const AboutMe = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <motion.div
      className="bg-gray-100 container mx-auto py-8"
      layout
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
      viewport={{ once: true }}
    >
      <AnimatePresence>
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
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
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
              <div>
                <h2 className="text-xl font-bold mb-4">About Me</h2>
                <p className="text-gray-700 text-md">
                  Junior web developer at Brycen Myanmar, exploring new
                  technologies and innovative web development experiences.
                  <br />
                  <br />
                  Proficient in Laravel, React, Git, GitLab and Github as well
                  as docker. Eager in collaborative environments, adopt new
                  tools, technologies, and frameworks.
                  <br />
                  <br />
                  Currently seeking opportunities to challenge myself,
                  contribute to innovative projects, and want level up myself as
                  a developer within a dynamic team.
                </p>
              </div>

              <hr className="font-bold mt-10 uppercase" />

              <div className="my-10 space-y-5 rounded">
                <h1 className="text-2xl font-semibold text-gray-900 ">
                  My Entire Career Experiences
                </h1>
                <article className="p-4 space-y-5 transition bg-white border border-gray-400 rounded-lg shadow-sm hover:shadow-lg sm:p-6">
                  <div className="flex justify-between flex-wrap gap-2 w-full">
                    <span className="text-gray-700 font-bold">
                      Junior Web Developer
                    </span>
                    <p>
                      <span className="text-gray-700 font-semibold mr-2 flex items-center gap-2">
                        Brycen Myanmar{" "}
                        <img src={bcmm} width={30} height={30} alt="" />
                      </span>
                    </p>
                  </div>
                  <span className="text-gray-700">2023-July - Present</span>
                  <p className="mt-2">
                    After accomplishing my internship, I started my official web
                    developer career at Brycen Myanmar.
                  </p>
                </article>
                <article className="p-4 space-y-5 transition bg-white border border-gray-400 rounded-lg shadow-sm hover:shadow-lg sm:p-6">
                  <div className="flex justify-between flex-wrap gap-2 w-full">
                    <span className="text-gray-700 font-bold">
                      Internship Trainee
                    </span>
                    <p>
                      <span className="text-gray-700 font-semibold mr-2 flex items-center gap-2">
                        Brycen Myanmar{" "}
                        <img src={bcmm} width={30} height={30} alt="" />
                      </span>
                    </p>
                  </div>
                  <span className="text-gray-700">2023-May - 2023-July</span>
                  <p className="mt-2">
                    I started my web development career in Brycen Myanmar IT
                    solution company.
                  </p>
                </article>
                <article className="p-4 space-y-5 transition bg-white border border-gray-400 rounded-lg shadow-sm hover:shadow-lg sm:p-6">
                  <div className="flex justify-between flex-wrap gap-2 w-full">
                    <span className="text-gray-700 font-bold">
                      Junior Servey Engineer
                    </span>
                    <p>
                      <span className="text-gray-700 font-semibold mr-2 flex items-center gap-2">
                        Myint Marr Aung
                        <img src={survey} width={30} height={30} alt="" />
                      </span>
                    </p>
                  </div>
                  <span className="text-gray-700">
                    2022-April - 2022-December
                  </span>
                  <p className="mt-2">
                    I worked as a survey engineer in Myint Marr Aung
                    construction company in 2022.
                  </p>
                </article>
                <article className="p-4 space-y-5 transition bg-white border border-gray-400 rounded-lg shadow-sm hover:shadow-lg sm:p-6">
                  <div className="flex justify-between flex-wrap gap-2 w-full">
                    <span className="text-gray-700 font-bold">Translator</span>
                    <p>
                      <span className="text-gray-700 font-semibold mr-2 flex items-center gap-2">
                        Wun Zin
                        <img src={wunzin} width={30} height={30} alt="" />
                      </span>
                    </p>
                  </div>
                  <span className="text-gray-700">
                    2019-December - 2020-May
                  </span>
                  <p className="mt-2">
                    Being part time novel translator for 6 months at Wun Zin
                    Online Book store while attending university.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </AnimatePresence>
    </motion.div>
  );
};
