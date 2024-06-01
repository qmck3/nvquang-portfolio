import { useState } from "react";
import "../App.css";

function Contact() {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-gradient-to-r from-cyan-950 to-slate-950 py-10 w-full">
        <p className="text-center text-4xl text-white font-bold">CONTACT ME</p>
      </div>
      {/* <hr className="w-3/4 border-1 border-white" /> */}
      <div className="text-white text-lg w-1/2 mt-5">
        <p className="text-xl">
          I am open to work, I'm also happy to answer your questions and
          feedback. Please feel free to reach out to me in the following ways:
        </p>
        <div className="px-16 py-3">
          <div className="flex my-2">
            <img
              src="/nvquang-portfolio/src/assets/phone-logo.png"
              alt=""
              className="w-8 h-auto mr-2 rounded"
            />
            <p className="my-auto">Phone/Zalo: +84707 649 659</p>
          </div>
          <div className="flex mb-2">
            <img
              src="/nvquang-portfolio/src/assets/linkedin-logo.png"
              alt=""
              className="w-8 h-auto mr-2"
            />
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
          <div className="flex mb-2">
            <img
              src="/nvquang-portfolio/src/assets/mail-logo.png"
              alt=""
              className="w-8 h-auto mr-2 rounded"
            />
            <p className="my-auto">Mail: nvquang10712@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="h-44"></div>
    </div>
  );
}

export default Contact;
