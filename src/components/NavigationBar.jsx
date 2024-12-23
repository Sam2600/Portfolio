import React from "react";
import {
  Navbar,
  Typography,
  IconButton,
  Collapse,
} from "@material-tailwind/react";

import { FaHome, FaPhone, FaProjectDiagram } from "react-icons/fa";

import { HiUserCircle } from "react-icons/hi";
import { NavLink } from "react-router-dom";

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
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center text-black hover:underline cursor-pointer gap-x-2 p-1 font-medium "
      >
        <NavLink to={"/"} className="flex items-center gap-x-1">
          <FaHome className="text-xl" />
          Home
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center text-black hover:underline cursor-pointer p-1 font-medium "
      >
        <NavLink to={"/contact-me"} className="flex items-center gap-x-1">
          <FaPhone className="text-xl" />
          Contact
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="small"
        className="flex items-center text-black hover:underline cursor-pointer gap-x-2 p-1 font-medium"
      >
        <NavLink to={"/projects"} className="flex items-center gap-x-2">
          <FaProjectDiagram className="text-xl" />
          Projects
        </NavLink>
      </Typography>

      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="flex items-center text-black hover:underline cursor-pointer gap-x-2 p-1 font-medium"
      >
        <NavLink to={"/about-me"} className="flex items-center gap-x-1">
          <HiUserCircle className="text-xl" />
          About me
        </NavLink>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="w-full rounded-none py-5 px-4 md:px-10 lg:px-10 border-b-gray-500 bg-white shadow-none sticky top-0 z-auto">
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
