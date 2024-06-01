import { useState, useEffect } from "react";
import LargeProjectBox from "../components/LargeProjectBox";

function Projects() {
  ///// get data for individual projects section
  const [individualProjects, setIndividualProjects] = useState([]);

  useEffect(() => {
    const fetchIndividualProjects = async () => {
      try {
        const response = await fetch("../data/individual-projects.json");
        const jsonIndividualProjects = await response.json();
        setIndividualProjects(jsonIndividualProjects);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchIndividualProjects();
  }, []);

  ///// get data for individual projects section
  const [groupProjects, setGroupProjects] = useState([]);

  useEffect(() => {
    const fetchGroupProjects = async () => {
      try {
        const response = await fetch("../data/group-projects.json");
        const jsonGroupProjects = await response.json();
        setGroupProjects(jsonGroupProjects);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchGroupProjects();
  }, []);

  /////return component Projects
  return (
    <div className="text-white">
      <div className="bg-gradient-to-r from-cyan-950 to-slate-950 py-10 w-full">
        <p className="text-center text-4xl text-white font-bold">PROJECTS</p>
      </div>

      <div className="w-11/12 mx-auto my-8 p-5 rounded-lg">
        {/*/////individual section  */}
        <p className="text-3xl font-semibold">Individual Projects</p>
        {individualProjects.map((element) => (
          <LargeProjectBox
            name={element.name}
            participants={element.participants}
            skills={element.skills}
            category={element.category}
            description={element.description}
            time={element.time}
            link={element.link}
            img_src={element.img_src}
          ></LargeProjectBox>
        ))}
        <hr className="w-5/12 mx-auto mt-8 border-1 border-stone-100" />
        {/*/////group section  */}
        <p className="text-3xl font-semibold">Group projects</p>
        {groupProjects.map((element) => (
          <LargeProjectBox
            name={element.name}
            participants={element.participants}
            skills={element.skills}
            category={element.category}
            description={element.description}
            time={element.time}
            link={element.link}
            img_src={element.img_src}
          ></LargeProjectBox>
        ))}
        {/* <hr className="w-5/12 mx-auto mt-8 border-1 border-stone-100" /> */}
      </div>
    </div>
  );
}

export default Projects;
