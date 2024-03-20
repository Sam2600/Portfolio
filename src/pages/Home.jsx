import React from "react";
import brand2 from "../assets/brand-2.png";
import brand3 from "../assets/brand-3.png";
import brand4 from "../assets/brand-4.png";
import brand5 from "../assets/brand-5.png";
import { IntroBio } from "../components/IntroBio";
import { Projects } from "../components/Projects";
import { WorkExperience } from "../components/WorkExperience";

export const Home = () => {
  return (
    <>
      <IntroBio />
      <Projects />
      <WorkExperience />
    </>
  );
};
