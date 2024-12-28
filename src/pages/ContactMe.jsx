import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDeviceMobile } from "react-icons/hi";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import loadingGif from "../assets/loading.gif";

export const ContactMe = () => {
  // UseForm hook
  const { register, formState, handleSubmit, reset } = useForm();

  // Useful Form states
  const { errors, isSubmitting } = formState;

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [serverError, setserverError] = useState("");

  const onSubmit = (data) => {
    //
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        data,
        {
          publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("success!");
          setSuccess(true);
          setLoading(false);
          reset();
        },
        (error) => {
          console.log(error);
          setLoading(false);
          setSuccess(false);
          setserverError("Internal Server Error. Please try again later");
        }
      );
  };

  const onError = (errors, e) => {
    setSuccess(false);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  const component = loading ? (
    <div className="flex justify-center items-center h-screen pb-24">
      <img
        src={loadingGif}
        className="w-6/12 sm:w-4/12 md:w-3/12 lg:w-2/12 "
        alt="Loading..."
      />
    </div>
  ) : (
    <div className="container my-12 mx-auto px-4 md:px-4">
      <div className="flex flex-wrap justify-between">
        <div className="flex flex-col sm:flex-row text-center items-baseline md:max-w-xl lg:max-w-3xl">
          <h1 className="inline-block mr-5 md:ml-3 lg:ml-6 mb-3 text-center w-50 lg:w-50 md:w-auto border border-gray-800 shadow-lg text-lg sm:text-xl md:text-xl font-semibold text-gray-900 capitalize p-3 rounded-md">
            Contact me
          </h1>
          {success && (
            <p className="text-white bg-green-500 p-3 rounded-md">
              Email has been sent successfully!
            </p>
          )}

          {serverError && (
            <p className="text-white bg-red-500 p-3 rounded-md">
              {serverError}
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-wrap">
        <AnimatePresence>
          <motion.form
            method="post"
            onSubmit={handleSubmit(onSubmit, onError)}
            className="py-5 mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6"
            initial={{ opacity: 0, x: "-10vw" }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            exit={{ opacity: 0 }}
          >
            <div className="mb-3 w-full">
              <div className="flex flex-row items-center justify-between w-full">
                <label
                  className="block font-semibold mb-[2px] text-gray-800"
                  htmlFor="name_"
                >
                  Name <span className="text-red-600">*</span>
                </label>{" "}
                <p className="block font-semibold mb-[2px] text-red-500">
                  {errors?.from_name?.message}
                </p>
              </div>

              <input
                name="from_name"
                type="text"
                className="p-2 border w-full outline-none rounded-md border-gray-700 focus:border-black focus:border-2"
                id="name_"
                placeholder="Name"
                {...register("from_name", {
                  required: {
                    value: true,
                    message: "Name is required",
                  },

                  pattern: {
                    value: /^[A-Za-z\s]+$/,
                    message: "Only alphabetic characters are allowed",
                  },
                })}
              />
            </div>

            <div className="mb-3 w-full">
              <div className="flex flex-row items-center justify-between w-full">
                <label
                  className="block font-semibold mb-[2px] text-gray-800"
                  htmlFor="email_"
                >
                  Email <span className="text-red-600">*</span>
                </label>
                <p className="block font-semibold mb-[2px] text-red-500">
                  {errors?.email?.message}
                </p>
              </div>

              <input
                type="text"
                name="from_email"
                className="p-2 border w-full outline-none rounded-md border-gray-700 focus:border-black focus:border-2"
                id="email_"
                placeholder="Enter your email address"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },

                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Please enter a valid email format",
                  },

                  // Validate for multiple conditions
                  validate: {
                    notAdmin: (value) =>
                      value !== "admin@gmail.com" ||
                      "Please try with different email",
                    badDomain: (value) =>
                      !value.endsWith("customMail.com") ||
                      "Bad domain for email",
                    noScriptTags: (value) =>
                      !/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi.test(
                        value
                      ) || "Script tags are not allowed",
                  },
                })}
              />
            </div>

            <div className="mb-3 w-full">
              <div className="flex flex-row items-center justify-between w-full">
                <label
                  className="block font-semibold mb-[2px] text-gray-800"
                  htmlFor="message_"
                >
                  Message <span className="text-red-600">*</span>
                </label>
                <p className="block font-semibold mb-[2px] text-red-500">
                  {errors?.message?.message}
                </p>
              </div>

              <textarea
                className="p-2 border w-full outline-none rounded-md border-gray-700 focus:border-black focus:border-2"
                name="message"
                id="message_"
                {...register("message", {
                  required: {
                    value: true,
                    message: "Email message is required",
                  },

                  // Validate for multiple conditions
                  validate: {
                    noScriptTags: (value) =>
                      !/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi.test(
                        value
                      ) || "Please submit a valid message",
                  },
                })}
              ></textarea>
            </div>

            <button
              disabled={isSubmitting}
              type="submit"
              value="Send"
              className="mb-6 mt-5 inline-block w-full rounded bg-gray-800 px-6 py-2.5 font-medium uppercase leading-normal text-white border border-transparent hover:shadow-md hover:bg-white hover:border-gray-800 hover:text-gray-800"
            >
              Send
            </button>
          </motion.form>
        </AnimatePresence>

        <AnimatePresence>
          <motion.div
            className="py-10 sm:pl-0 md:pl-0 lg:pl-0 xl:pl-20 w-full shrink-0 grow-0 basis-auto lg:w-7/12"
            initial={{ opacity: 0, x: "10vw" }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            exit={{ opacity: 0 }}
          >
            <div className="flex flex-wrap gap-y-5">
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="inline-block rounded-md bg-teal-400-100 p-4 text-gray-800">
                      <HiDeviceMobile className="text-3xl transition-all duration-200" />{" "}
                    </div>
                  </div>
                  <div className="ml-6 grow">
                    <p className="mb-2 font-bold">Mobile</p>
                    <a
                      href="tel:+959797509484"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 justify-start cursor-pointer"
                    >
                      <p className="text-neutral-500 hover:text-gray-950 hover:underline">
                        +959 797-509-484
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                <div className="flex items-start">
                  <div className="shrink-0">
                    <div className="inline-block rounded-md bg-teal-400-100 p-4 text-gray-800">
                      <FaFacebook className="text-2xl transition-all duration-200" />{" "}
                    </div>
                  </div>
                  <div className="ml-6 grow">
                    <p className="mb-2 font-bold ">Facebook</p>
                    <a
                      href="https://www.facebook.com/kghtetsan2600"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 justify-start cursor-pointer"
                    >
                      <p className="text-neutral-500 hover:text-gray-950 hover:underline">
                        Sam2600@Facebook
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                <div className="align-start flex">
                  <div className="shrink-0">
                    <div className="inline-block rounded-md bg-teal-400-100 p-4 text-gray-800">
                      <FaGithub className="text-2xl transition duration-200" />
                    </div>
                  </div>
                  <div className="ml-6 grow">
                    <p className="mb-2 font-bold">Github</p>
                    <a
                      href="https://github.com/Sam2600"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 justify-start  cursor-pointer"
                    >
                      <p className="text-neutral-500 hover:text-gray-950 hover:underline">
                        Sam2600@Github
                      </p>
                    </a>
                  </div>
                </div>
              </div>
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:w-6/12 md:px-3 lg:px-6">
                <div className="align-start flex">
                  <div className="shrink-0">
                    <div className="inline-block rounded-md bg-teal-400-100 p-4 text-gray-800">
                      <FaLinkedin className="text-2xl transition duration-200" />
                    </div>
                  </div>
                  <div className="ml-6 grow">
                    <p className="mb-2 font-bold">Linkedin</p>
                    <a
                      href="https://www.linkedin.com/in/kaung-htet-san-07034b218/"
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 justify-start cursor-pointer"
                    >
                      <p className="text-neutral-500 hover:text-gray-950 hover:underline">
                        Sam2600@linkedin
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );

  return component;
};
