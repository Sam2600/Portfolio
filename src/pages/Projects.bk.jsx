/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import movieNerds from "../assets/movieNerds.png";
import shopping from "../assets/Shopping.png";
import shifthub from "../assets/Shifthub.png";
import yaycha from "../assets/yaycha.png";
import burmaMeal from "../assets/BurmaMeal.png";
import { motion, AnimatePresence } from "framer-motion";

export const Projects = () => {
  //
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.section
      className="py-5"
      layout
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1, transition: { duration: 1 } }}
      exit={{ opacity: 0 }}
      viewport={{ once: true }}
    >
      <AnimatePresence>
        <div className="container max-w-screen-xl mx-auto px-4">
          <div className="flex flex-col sm:flex-col md:flex-row md:flex-wrap lg:flex-row lg:flex-wrap gap-5">
            <div className="w-full md:w-5/12 lg:w-5/12 md:mx-auto">
              <div className="bg-gray-50 p-8 rounded-md shadow-sm border cursor-pointer hover:shadow-lg">
                <a
                  href="https://movie-nerds.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="border h-72 w-full" src={movieNerds} alt="" />
                </a>

                <h4 className="mt-3 text-lg mb-4 text-black font-bold">
                  Movie Nerds
                </h4>

                <p className="font-normal text-gray-500 text-md">
                  A website with variety of movies categories and specific
                  details with decent descriptions, rating and recommendations.
                  <br />
                  <br />
                  Tech stacks are ReactJs, Redux Toolkit, Tailwind CSS and other
                  libraries.
                </p>
                <div className="flex items-center justify-between">
                  <a
                    href="https://movie-nerds.vercel.app/"
                    target="_blank"
                    className="inline-flex items-center gap-1 mt-4 font-medium group text-sky-500"
                  >
                    Live Demo
                    <span
                      aria-hidden="true"
                      className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                    >
                      →
                    </span>
                  </a>
                  <a
                    href="https://github.com/Sam2600/Movie-Nerd-with-React"
                    target="_blank"
                    className="inline-flex items-center gap-1 mt-4 font-medium group text-sky-500"
                  >
                    Source code
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 496 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-5/12 lg:w-5/12 md:mx-auto">
              <div className="bg-gray-50 p-8 rounded-md shadow-sm border cursor-pointer hover:shadow-lg">
                <a href="http://18.142.47.72" target="_blank" rel="noreferrer">
                  <img className="border h-72 w-full" src={shifthub} alt="" />
                </a>

                <h4 className="mt-3 text-lg mb-4 text-black font-bold">
                  ShiftHub
                </h4>

                <p className="font-normal text-gray-500 text-md">
                  A website to manage employees and their assigns with specific
                  documentations instructions.
                  <br />
                  <br />
                  Hosted in AWS with EC2, RDS services and tech stacks are
                  Laravel with JQuery and packages like Mattwebsite, DomPdf and
                  so on.
                </p>
                <div className="flex items-center justify-between">
                  <a
                    href="http://18.142.47.72"
                    target="_blank"
                    className="inline-flex items-center gap-1 mt-4 font-medium group text-sky-500"
                  >
                    Live Demo
                    <span
                      aria-hidden="true"
                      className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                    >
                      →
                    </span>
                  </a>
                  <a
                    href="https://github.com/Sam2600/shifthub"
                    target="_blank"
                    className="inline-flex items-center gap-1 mt-4 font-medium group text-sky-500"
                  >
                    Source code
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 496 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-5/12 lg:w-5/12 md:mx-auto">
              <div className="bg-gray-50 p-8 rounded-md shadow-sm border cursor-pointer hover:shadow-lg">
                <a
                  href="https://shoppie-seven.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="border h-72 w-full" src={shopping} alt="" />
                </a>

                <h4 className="mt-3 text-lg mb-4 text-black font-bold">
                  Shoppie
                </h4>

                <p className="font-normal text-gray-500 text-md">
                  A shopping website with decent prices and variety of
                  categories. Best choice to find your needs.
                  <br />
                  <br />
                  Tech stacks are ReactJs, Redux Toolkit, Tailwind CSS, Daisy Ui
                  and other libraries.
                </p>
                <div className="flex items-center justify-between">
                  <a
                    href="https://shoppie-seven.vercel.app/"
                    target="_blank"
                    className="inline-flex items-center gap-1 mt-4 font-medium group text-sky-500"
                  >
                    Live Demo
                    <span
                      aria-hidden="true"
                      className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                    >
                      →
                    </span>
                  </a>
                  <a
                    href="https://github.com/Sam2600/Shopping-Cart-with-React"
                    target="_blank"
                    className="inline-flex items-center gap-1 mt-4 font-medium group text-sky-500"
                  >
                    Source code
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 496 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-5/12 lg:w-5/12 md:mx-auto">
              <div className="bg-gray-50 p-8 rounded-md shadow-sm border cursor-pointer hover:shadow-lg">
                <a
                  href="https://burmese-meal.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="border h-72 w-full" src={burmaMeal} alt="" />
                </a>

                <h4 className="mt-3 text-lg mb-4 text-black font-bold">
                  Burma Meal
                </h4>

                <p className="font-normal text-gray-500 text-md">
                  A website to show how burmese foods and curries are so
                  delicious.
                  <br />
                  <br />
                  Tech stacks are ReactJs, Redux Toolkit, Tailwind CSS and other
                  libraries.
                </p>
                <div className="flex items-center justify-between">
                  <a
                    href="https://burmese-meal.vercel.app/"
                    target="_blank"
                    className="inline-flex items-center gap-1 mt-4 font-medium group text-sky-500"
                  >
                    Live Demo
                    <span
                      aria-hidden="true"
                      className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                    >
                      →
                    </span>
                  </a>
                  <a
                    href="https://github.com/Sam2600/burmese-meal"
                    target="_blank"
                    className="inline-flex items-center gap-1 mt-4 font-medium group text-sky-500"
                  >
                    Source code
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 496 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full md:w-5/12 lg:w-5/12 md:mx-auto">
              <div className="bg-gray-50 p-8 rounded-md shadow-sm border cursor-pointer hover:shadow-lg">
                <a
                  href="https://sam-yaycha.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img className="border h-72 w-full" src={yaycha} alt="" />
                </a>

                <h4 className="mt-3 text-lg mb-4 text-black font-bold">
                  Yaycha
                </h4>

                <p className="font-normal text-gray-500 text-md">
                  My React practice project by reading Sayar Ei Muang&lsquo;s
                  book after 4 months of without React :).
                  <br />
                  <br />
                  Tech stacks are ReactJs, Redux Toolkit, Tailwind CSS, Material
                  Ui, Prisma and backend is Express.
                </p>
                <div className="flex items-center justify-between">
                  <a
                    href="https://sam-yaycha.vercel.app/"
                    target="_blank"
                    className="inline-flex items-center gap-1 mt-4 font-medium group text-sky-500"
                  >
                    Live Demo
                    <span
                      aria-hidden="true"
                      className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
                    >
                      →
                    </span>
                  </a>
                  <a
                    href="https://github.com/Sam2600/yaycha"
                    target="_blank"
                    className="inline-flex items-center gap-1 mt-4 font-medium group text-sky-500"
                  >
                    Source code
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 496 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatePresence>
    </motion.section>
  );
};
