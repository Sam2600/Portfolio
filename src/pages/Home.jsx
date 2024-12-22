import React, { useEffect } from "react";
import { IntroBio } from "../components/IntroBio";
import { WorkExperience } from "../components/WorkExperience";

export const Home = () => {
  //
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <>
      <IntroBio />
      <WorkExperience />
    </>
  );
};
