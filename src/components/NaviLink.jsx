import React from "react";
import { NavLink } from "react-router-dom";
import { Typography } from "@material-tailwind/react";

export const NaviLink = ({ to, link_name, children }) => {
  return (
    <Typography
      as="li"
      variant="small"
      className="flex items-center text-black hover:underline cursor-pointer gap-x-2 p-1 font-medium"
    >
      <NavLink to={to} className="flex items-center gap-x-2">
        {children}
        {link_name}
      </NavLink>
    </Typography>
  );
};
