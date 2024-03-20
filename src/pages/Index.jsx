import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";

export const Index = () => {
  return (
    <main className="px-5 py-5">
      <Navbar />
      <Outlet />
    </main>
  );
};
