import React from "react";
import bcmm from "../assets/bcmm.jpg";

export const WorkExperience = () => {
  return (
    <section className="py-10 md:py-16 px-4">
      <div className="container max-w-screen-xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="mb-10 lg:mb-0 w-full">
            {/* w-4/12 */}
            <h1
              id="my-project"
              className="inline-block pb-3 mb-10 text-3xl font-semibold text-gray-900 capitalize border-b-4 border-slate-500"
            >
              My Developer Career
            </h1>

            <p className="font-normal text-gray-500 text-sm md:text-base">
              I have brought here my biggest and favorite works <br /> as a
              professional.
            </p>
          </div>

          <div className="space-y-24 w-full">
            {/* w-6/12 */}
            <div className="flex justify-between space-x-6">
              <h1 className="font-normal text-gray-700 text-2xl md:text-3xl">
                01
              </h1>

              <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>

              <div className="w-full">
                <h1 className="font-normal text-gray-700 text-2xl md:text-2xl mb-5">
                  Internship Trainee
                </h1>

                <div className="flex justify-between items-center mb-3">
                  <p className="font-bold">2023-May-03 - 2023-July-31</p>
                  <img
                    alt="Brycen Myanmar"
                    width="50"
                    height="50"
                    className="object-cover border rounded-full"
                    style={{ color: "transparent" }}
                    src={bcmm}
                  />
                </div>
                <p className="font-normal text-gray-500 text-sm md:text-base">
                  I started my web development career in Brycen Myanmar <br />{" "}
                  IT solution company.
                </p>
              </div>
            </div>

            <div className="flex space-x-6">
              <h1 className="font-normal text-gray-700 text-2xl md:text-3xl">
                02
              </h1>

              <span className="w-28 h-0.5 bg-gray-300 mt-5"></span>

              <div className="w-full">
                <h1 className="font-normal text-gray-700 text-2xl md:text-2xl mb-5">
                  Junior Full Stack Developer
                </h1>
                <div className="flex justify-between items-center mb-3">
                  <p className="font-bold">2023-July-31 - Current </p>
                  <img
                    alt="Brycen Myanmar"
                    width="50"
                    height="50"
                    className="object-cover border rounded-full"
                    style={{ color: "transparent" }}
                    src={bcmm}
                  />
                </div>
                <p className="font-normal text-gray-500 text-sm md:text-base">
                  After accomplishing my internship, I started my official{" "}
                  <br />
                  web developer career at Brycen Myanmar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
