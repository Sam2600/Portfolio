import React from "react";
import {
  Navbar,
  Typography,
  IconButton,
  Collapse,
} from "@material-tailwind/react";

import { FaHome, FaCode, FaPhone, FaLaptopCode } from "react-icons/fa";

import { HiUserCircle } from "react-icons/hi";
import { NavLink } from "react-router-dom";
import { NaviLink } from "./NaviLink";

export const NavigationBar = () => {
  //
  const [openNav, setOpenNav] = React.useState(false);

  const nameClickHandler = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <NaviLink to={"/"} link_name="Home">
        <FaHome className="text-xl" />
      </NaviLink>
      <NaviLink to={"/realworld-projects"} link_name="Work Experience">
        <FaCode className="text-xl" />
      </NaviLink>
      <NaviLink to={"/contact-me"} link_name="Contact">
        <FaPhone className="text-xl" />
      </NaviLink>
      {/* <NaviLink to={"/projects"} link_name="My projects">
        <FaLaptopCode className="text-xl" />
      </NaviLink> */}
      <NaviLink to={"/about-me"} link_name="About me">
        <HiUserCircle className="text-xl" />
      </NaviLink>
    </ul>
  );

  return (
    <Navbar className="w-full rounded-none py-5 px-4 md:px-10 lg:px-10 border-b-gray-500 bg-white shadow-none sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap items-center justify-between text-blue-gray-900">
        <NavLink
          to={"/"}
          onClick={nameClickHandler}
          className="cursor-pointer text-black transition hover:underline text-2xl font-semibold"
        >
          Kaung Htet San
        </NavLink>
        <div className="hidden lg:block">{navList}</div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6 text-black"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">{navList}</div>
      </Collapse>
    </Navbar>
  );
};
