import { useState, useEffect } from "react";
import "../App.css";
import background_1 from "../../public/background-2.png";
import ProjectBox from "../components/ProjectBox.jsx";
import showProjects from "../mock_data/showProjects.jsx";

function Root() {
  //get data
  // const [Projects, setProjects] = useState([]);

  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     try {
  //       const response = await fetch("../data/show-projects.json");
  //       const jsonProjects = await response.json();
  //       setProjects(jsonProjects);
  //     } catch (error) {
  //       console.error("Error fetching data:", error);
  //     }
  //   };

  //   fetchProjects();
  // }, []);

  return (
    <div>
      {/* background */}
      <div
        className="w-500 h-300 bg-cover bg-center"
        style={{ backgroundImage: `url(${background_1})` }}
      >
        <div className="py-36 text-center text-white w-7/12 mx-auto">
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
        <div className="flex justify-center">
          {showProjects.map((element) => (
            <ProjectBox
              name={element.name}
              time={element.time}
              description={element.description}
              img_src={element.img_src}
            ></ProjectBox>
          ))}
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
