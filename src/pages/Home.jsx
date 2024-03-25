import React, { useEffect } from "react";
import { IntroBio } from "../components/IntroBio";
import { Projects } from "../components/Projects";
import { WorkExperience } from "../components/WorkExperience";

export const Home = () => {
  //
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <>
      <IntroBio />
      <Projects />
      <WorkExperience />
    </>
  );
};
