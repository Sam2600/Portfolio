import React from "react";
import { Outlet } from "react-router-dom";
import { NavbarComponent } from "../components/NavbarComponent";
import { FooterComponent } from "../components/FooterComponent";

export const Index = () => {
  return (
    <main>
      <NavbarComponent />
      <Outlet />
      <FooterComponent />
    </main>
  );
};
