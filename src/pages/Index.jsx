import React from "react";
import { Outlet } from "react-router-dom";
import { NavbarComponent } from "../components/NavbarComponent";

export const Index = () => {
  return (
    <main>
      <NavbarComponent />
      <Outlet />
    </main>
  );
};
