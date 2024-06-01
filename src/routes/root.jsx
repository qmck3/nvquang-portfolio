import { useState, useEffect } from "react";
import "../App.css";
import background_1 from "../../public/background-2.png";
import ProjectBox from "../components/ProjectBox.jsx";

function Root() {
  const tempProjectData = [
    {
      name: "Cyclistics Bike-share",
      time: "3/2024 - present",
      img_src: "",
      description:
        "Waze’s free navigation app makes it easier for drivers around the world to get to where they want to go. In this project, I try to figure out why the application is having churn users and how to prevent them.",
    },
    {
      name: "Youtube Videos Analysis",
      time: "1/2024 - 4/2024",
      img_src: "",
      description:
        "Crawl data from YouTube(through API) to analyze features of different videos segments, find patterns of trending videos and build an operational dashboard for end-users to analyze the data further",
    },
  ];

  return (
    <div>
      {/* background */}
      <div
        className="w-500 h-300 bg-cover bg-center"
        style={{ backgroundImage: `url(${background_1})` }}
      >
        <div className="py-36 text-center text-white w-5/12 mx-auto">
          <h1 className="text-3xl font-bold">Hi, I'm Quang</h1>
          <p className="py-4">
            Entry level data analyst with proven expertise in data collection,
            analysis, visualization, and storytelling. Passionate about
            collaborating on innovative projects and contributing to a
            data-driven future.
          </p>
        </div>
        <div className="">
          <hr className="w-3/12 border-1 border-stone-800" />
        </div>
      </div>

      {/* project section */}
      <div className="my-5 w-500 h-300">
        <p className="text-white text-3xl font-semibold text-center mb-3">
          Projects
        </p>
        <hr className="mx-auto w-5/12 mb-8" />
        <div className="flex">
          <div className="basis-1/12"></div>
          {tempProjectData.map((element) => (
            <ProjectBox
              name={element.name}
              time={element.time}
              description={element.description}
              img_src={element.img_src}
            ></ProjectBox>
          ))}
          <div className="basis-1/12"></div>
        </div>
        <div className="flex flex-col items-center">
          <a
            href="/nvquang-portfolio/projects/"
            className="bg-neutral-300 rounded font-semibold border-double border-white px-8 py-3 my-5 block"
          >
            See more
          </a>
        </div>
      </div>
    </div>
  );
}

export default Root;
