import {
  Popover,
  PopoverContent,
  PopoverHandler,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiDeviceMobile } from "react-icons/hi";

const ContactComponent = ({ children }) => {
  return (
    <>
      <Popover placement="top">
        <PopoverHandler>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="flex items-center text-black hover:text-slate-500 cursor-pointer gap-x-2 font-medium"
          >
            {children}
          </Typography>
        </PopoverHandler>
        <PopoverContent>
          <div className="flex flex-col space-y-2 justify-between">
            <a
              href="tel:+959797509484"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 justify-start hover:text-blue-600 cursor-pointer"
            >
              <HiDeviceMobile className="text-xl transition-all duration-200 hover:text-blue-600 cursor-pointer" />{" "}
              <p className="text-md">09 797 509 484</p>
            </a>
            <hr />
            <a
              href="https://www.facebook.com/kghtetsan2600"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 justify-start hover:text-blue-600 cursor-pointer"
            >
              <FaFacebook className="text-xl transition-all duration-200 hover:text-blue-600 cursor-pointer" />{" "}
              <p className="text-md">Facebook</p>
            </a>
            <hr />
            <a
              href="https://github.com/Sam2600"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 justify-start hover:text-blue-600 cursor-pointer"
            >
              <FaGithub className="text-xl transition duration-200" />
              <p className="text-md">Github</p>
            </a>
            <hr />
            <a
              href="https://www.linkedin.com/in/kaung-htet-san-07034b218/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 justify-start hover:text-blue-600 cursor-pointer"
            >
              <FaLinkedin className="text-xl transition duration-200 hover:text-blue-600 cursor-pointer" />
              <p className="text-md">Linkedin</p>
            </a>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default ContactComponent;
