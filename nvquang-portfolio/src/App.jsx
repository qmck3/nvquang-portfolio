import { useState } from "react";
import "./App.css";
import background_1 from "../public/background-1.png";
import ProjectBox from "./components/ProjectBox.jsx";

function App() {
  return (
    <div className="">
      {/* background */}
      <div
        className="w-500 h-300 bg-cover bg-center"
        style={{ backgroundImage: `url(${background_1})` }}
      >
        <div className="py-36 text-center text-white">
          <h1 className="text-3xl font-bold">Hi, I'm Quang</h1>
          <p className="py-4">
            Data analyst skilled in data collecting, data analyzing
          </p>
        </div>
        <div className="">
          <hr className="w-3/12 border-1 border-stone-800" />
        </div>
      </div>

      {/* project section */}
      <div className="my-5 w-500 h-300">
        <p className="text-white text-2xl font-semibold text-center mb-3">
          Projects
        </p>
        <hr className="mx-auto w-3/12 mb-8" />
        <div className="">
          <div className="flex justify-center text-center">
            <ProjectBox
              name="project 1"
              description="abc"
              img_src="../public/image-1.jpg"
            />
            <ProjectBox
              name="project 1"
              description="abc"
              img_src="../public/image-1.jpg"
            />
            <ProjectBox
              name="project 1"
              description="abc"
              img_src="../public/image-1.jpg"
            />
          </div>
          <div className="flex flex-col items-center">
            <div className="mt-5">
              <button className="bg-neutral-300 px-8 py-3 rounded font-semibold border-double border-white">
                Projects
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* footer */}
      <div className="bg-gray-600 text-center">
        <div></div>
        <p>010203123</p>
      </div>
    </div>
  );
}

export default App;
