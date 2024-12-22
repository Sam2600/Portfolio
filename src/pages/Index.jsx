import React from "react";
import { Outlet } from "react-router-dom";
import { NavigationBar } from "../components/NavigationBar";
import { Footer } from "../components/Footer";

export const Index = () => {
  return (
    <main>
      <NavigationBar />
      <Outlet />
      <Footer />
    </main>
  );
};
