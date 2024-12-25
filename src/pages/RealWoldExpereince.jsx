import React, { useEffect } from "react";

import yaycha from "../assets/yaycha.png";
import shopping from "../assets/Shopping.png";
import shifthub from "../assets/Shifthub.png";
import burmaMeal from "../assets/BurmaMeal.png";
import movieNerds from "../assets/movieNerds.png";

import { HiVideoCamera } from "react-icons/hi";
import { FaAws, FaReact } from "react-icons/fa";
import { BiNetworkChart, BiShoppingBag } from "react-icons/bi";
import {
  SiBootstrap,
  SiGit,
  SiJquery,
  SiLaravel,
  SiLinux,
  SiReactrouter,
  SiRedux,
  SiTailwindcss,
} from "react-icons/si";

import { ProjectInfo } from "../components/ProjectInfo";
import { RealWoldProject } from "../components/RealWoldProject";

export const RealWoldExpereince = () => {
  //
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <div className="relative overflow-hidden pt-16 pb-32 space-y-24">
      <RealWoldProject
        icon={<HiVideoCamera className="text-4xl" />}
        pos={"left"}
        prj_title={"MovieNerds"}
        img={movieNerds}
        prj_url={"https://movie-nerds.vercel.app/"}
        about_prj={
          "A website with variety of movies categories and specific details with decent descriptions, rating and recommendations."
        }
      >
        <ProjectInfo
          pos_respon={
            "React self study and self assign project to test my knowledge and lessons I learned."
          }
        >
          <FaReact className="text-2xl text-blue-500" />
          <SiRedux className="text-2xl text-purple-500" />
          <SiReactrouter className="text-2xl text-pink-500" />
          <SiTailwindcss className="text-2xl text-blue-500" />
          <SiGit className="text-2xl text-orange-500" />
        </ProjectInfo>
      </RealWoldProject>

      <RealWoldProject
        icon={<BiNetworkChart className="text-4xl" />}
        pos={"right"}
        prj_title={"Shifthub"}
        img={shifthub}
        // prj_url={"#urlHere.."}
        about_prj={
          "A website to manage employees and their assigns with specific documentations instructions."
        }
      >
        <ProjectInfo
          pos_respon={
            "Final internship project with Laravel. I was responsible for both front-end and back-end as well as database design."
          }
        >
          <SiLinux className="text-2xl text-black" />
          <FaAws className="text-2xl text-orange-500" />
          <SiLaravel className="text-2xl text-red-600" />
          <SiJquery className="text-2xl text-blue-500" />
          <SiBootstrap className="text-2xl text-purple-500" />
          <SiGit className="text-2xl text-orange-500" />
        </ProjectInfo>
      </RealWoldProject>

      <RealWoldProject
        icon={<BiShoppingBag className="text-4xl" />}
        pos={"left"}
        prj_title={"Shoppie"}
        img={shopping}
        prj_url={"https://shoppie-seven.vercel.app"}
        about_prj={
          "A shopping website with decent prices and variety of categories. Best choice to find your needs."
        }
      >
        <ProjectInfo
          pos_respon={
            "React self study and self assign project to test my knowledge and lessons I learned."
          }
        >
          <FaReact className="text-2xl text-blue-500" />
          <SiRedux className="text-2xl text-purple-500" />
          <SiReactrouter className="text-2xl text-pink-500" />
          <SiTailwindcss className="text-2xl text-blue-500" />
          <SiGit className="text-2xl text-orange-500" />
        </ProjectInfo>
      </RealWoldProject>
    </div>
  );
};
