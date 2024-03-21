import React from "react";
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
