import React from "react";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="text-white flex flex-row bg-gradient-to-r from-slate-950 to-cyan-950">
      <div className="w-4/12 bg-grey basis-7/12">
        <div className="ml-8 mt-4">
          <a href="/nvquang-portfolio/" className="text-xl">
            Home
          </a>
        </div>
      </div>
      <div className="basis-5/12 pt-5">
        <div className="flex flex-row pb-5 text-center">
          <div className="basis-1/3 md:basis-1/3 ml-20 ">
            <a
              className="hover:bg-gray-600/50 rounded px-6 py-1"
              href="/nvquang-portfolio/about/"
            >
              About
            </a>
          </div>
          <div className="basis-1/3 md:basis-1/3 ">
            <a
              className="hover:bg-gray-600/50 rounded px-6 py-1"
              href="/nvquang-portfolio/projects/"
            >
              Projects
            </a>
          </div>
          <div className="basis-1/3 md:basis-1/3 mr-10 ">
            <a
              className="hover:bg-gray-600/50 rounded px-6 py-1"
              href="/nvquang-portfolio/contact/"
            >
              Contact
            </a>
          </div>
        </div>
        <hr className="w-full" />
      </div>
    </nav>
  );
}

export default Navbar;
