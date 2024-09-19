import React from "react";
import { useState } from "react";
import "../App.css";
import phoneLogo from "../assets/phone-logo.png";
import linkedInLogo from "../assets/linkedin-logo.png";
import mailLogo from "../assets/mail-logo.png";

const Footer = () => {
  return (
    <div id="Footer">
      <div className="bg-slate-950 w-full text-center text-white">
        <div className="bg-gradient-to-b from-cyan-950 to-slate-950 py-8 w-full">
          <p className="text-center text-3xl font-bold">CONTACT ME</p>
        </div>
        <div className="text-lg w-8/12 mt-5 mx-auto">
          <p className="text-xl">
            I am open to work, I'm also happy to answer your questions and
            feedback. Please feel free to reach out to me in the following ways:
          </p>
          <div className="grid grid-cols-2 mt-5">
            <div className="flex mb-5">
              <img src={phoneLogo} alt="" className="w-8 h-auto mr-2 rounded" />
              <p className="my-auto">Phone/Zalo: +84-707 649 659</p>
            </div>
            <div className="flex mb-5">
              <img src={linkedInLogo} alt="" className="w-8 h-auto mr-2" />
              <p className="my-auto">
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/quang-nguy%E1%BB%85n-223244250/"
                  target="_blank"
                  className="underline text-blue visited:text-purple-600"
                >
                  Quang Nguyễn
                </a>
              </p>
            </div>
            <div className="flex mb-5">
              <img src={mailLogo} alt="" className="w-8 h-auto mr-2 rounded" />
              <p className="my-auto">Mail: nvquang10712@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
