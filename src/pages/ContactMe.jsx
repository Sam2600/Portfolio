import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDeviceMobile } from "react-icons/hi";
import emailjs from "@emailjs/browser";
import { Alert } from "@material-tailwind/react";
import { useEffect } from "react";

export const ContactMe = () => {
  //
  const form = useRef();

  const [success, setSuccess] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        form.current,
        {
          publicKey: import.meta.env.VITE_EMAIL_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(!success);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className="container my-12 mx-auto px-4 md:px-4">
      <div className="flex flex-wrap justify-between">
        <div className="text-center md:max-w-xl lg:max-w-3xl">
          <h1
            id="my-project"
            className="inline-block md:ml-3 lg:ml-6 mb-3 text-center w-50 lg:w-50 md:w-auto border border-gray-800 shadow-lg text-lg sm:text-xl md:text-xl font-semibold text-gray-900 capitalize p-3 rounded-md"
          >
            Contact me
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap">
        <AnimatePresence>
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            className="py-5 mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6"
            initial={{ opacity: 0, x: "-10vw" }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
            exit={{ opacity: 0 }}
          >
            <div className="mb-3 w-full">
              <label
                className="block font-semibold mb-[2px] text-gray-800"
                htmlFor="exampleInput90"
              >
                Name
              </label>
              <input
                name="from_name"
                type="text"
                className="px-2 py-2 border w-full outline-none rounded-md border-black"
                id="exampleInput90"
                placeholder="Name"
              />
            </div>

            <div className="mb-3 w-full">
              <label
                className="block font-semibold mb-[2px] text-gray-800"
                htmlFor="exampleInput90"
              >
                Email
              </label>
              <input
                type="email"
                name="from_email"
                className="px-2 py-2 border w-full outline-none rounded-md border-black"
                id="exampleInput90"
                placeholder="Enter your email address"
              />
            </div>

            <div className="mb-3 w-full">
              <label
                className="block font-semibold mb-[2px] text-gray-800"
                htmlFor="exampleInput90"
              >
                Message
              </label>
              <textarea
                className="px-2 py-2 border rounded-[5px] w-full outline-none border-black"
                name="message"
                id=""
              ></textarea>
            </div>

            <button
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
};
