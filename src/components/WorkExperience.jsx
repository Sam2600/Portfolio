import React from "react";
import bcmm from "../assets/bcmm.jpg";
import { Experience } from "./Experience";

export const WorkExperience = () => {
  return (
    <section className="py-10 md:py-16 px-4">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="flex flex-col gap-y-5 mb-10 lg:mb-0 w-full">
            <h1
              id="my-project"
              className="inline-block text-center w-80 lg:w-80 md:w-auto border border-gray-800 shadow-lg text-2xl font-semibold text-gray-900 capitalize p-3 rounded-md"
            >
              My Developer Career
            </h1>

            <p className="font-normal text-gray-500 text-sm md:text-base">
              This is a detailed timeline of my professional journey as a web
              developer, <br /> showcasing significant milestones and
              achievements.
            </p>
          </div>

          <div className="space-y-24 w-full">
            <Experience
              number={"02"}
              position={"Full Stack Developer"}
              company_logo={bcmm}
              exp_time={"2023-July-31 - Present"}
            >
              After successfully completing my internship, I embarked on my
              professional journey as a Full Stack Developer at Brycen Myanmar,
              where I have been contributing to various projects and honing my
              skills.
            </Experience>
            <Experience
              number={"01"}
              position={"Intern"}
              company_logo={bcmm}
              exp_time={"2023-May-03 - 2023-July-31"}
            >
              My career began with an internship at Brycen Myanmar IT Solutions,
              where I gained valuable hands-on experience in web development and
              learned the fundamentals of the industry.
            </Experience>
          </div>
        </div>
      </div>
    </section>
  );
};
