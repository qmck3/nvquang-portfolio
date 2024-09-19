import React from "react";

const ProjectBox = ({ name, description, img_src, time }) => {
  return (
    <div className="basis-4/12 bg-white mx-5 rounded-md border-4 border-yellow-500 pt-5">
      <div className="flex  px-8 justify-between items-center">
        <a
          href="/nvquang-portfolio/projects/"
          className="text-xl font-semibold block"
        >
          {name}
        </a>
      </div>
      <p className="px-5">{description}</p>
      <div className="m-2">
        {img_src != "" && (
          <img src={img_src} className="h-7/12 mx-auto m-2 rounded-lg" />
        )}
      </div>
    </div>
  );
};

export default ProjectBox;
