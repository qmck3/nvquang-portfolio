import React from "react";

const ProjectBox = ({ name, description, img_src, time }) => {
  return (
    <div className="basis-5/12 bg-white mx-5 rounded-md border-4 border-yellow-500 py-3">
      {img_src != "" && (
        <img src={img_src} className="h-1/2 mx-auto my-2 rounded-lg" />
      )}
      <div className="flex  pl-3 pr-5 justify-between">
        <a href="/projects" className="text-xl font-semibold block">
          {name}
        </a>
        <p>{time}</p>
      </div>

      <p className="px-5">{description}</p>
    </div>
  );
};

export default ProjectBox;
