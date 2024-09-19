import { useState } from "react";

function About() {
  return (
    <div className="text-white">
      <div className="bg-gradient-to-r from-cyan-950 to-slate-950 py-10 w-full">
        <p className="text-center text-4xl font-bold">ABOUT</p>
      </div>
      <div className="w-11/12 mx-auto my-8 px-5 rounded-lg">
        <p className="text-4xl font-semibold mb-3">Background</p>
        <p className="pl-5">
          I am a fourth-year student major in Information Technology at Ho Chi
          Minh University of Science, currently pursuing a career as a Data
          Analyst. Throughout my studies, I have acquired a solid foundation in
          Data Analytics through courses such as: Introduction to Data Science,
          Probability and Statistics, Introduction to Databases, Machine
          Learning, Data Visualization, Application of Data Science, Application
          of Data Analytics. I'm also studying some courses about data analytics
          on the internet to improve my skills. Additionally, I have
          participated in some projects in data science or even web application,
          you can find more details at Projects section.
        </p>
        <p className="text-4xl font-semibold my-3">Skills</p>
        <p>Data Analytics:</p>
        <ul className="list-disc pl-8">
          <li>Data crawling - Tool: Python</li>
          <li>Data cleaning - Tool: Python</li>
          <li>Data analysis - Tool: Python</li>
          <li>Data visualization - Tools: Python, Tableau, Power BI</li>
        </ul>
        <p>Others:</p>

        <ul className="list-disc pl-8">
          <li>Designing database - Tool: Draw.io</li>
          <li>Building ETL - Tool: SISS (Visual Studio)</li>
          <li>Requirement Gathering and Designing Use cases for websites</li>
          <li>Implementing Websites - Tools: React, Javascript, Tailwind</li>
        </ul>
        <p className="text-4xl font-semibold my-3">Work Experience</p>
        <p className="text-xl font-semibold">QC intern at GSOFT</p>
        <p className="pl-5">
          From November 2023 to February 2024, I participated in a Quality
          Control (QC) internship. Although this position was in the field of
          software development, which differs from my current pursuit of Data
          Analysis, it provided me with valuable experience and skills. I
          learned the importance of time management, teamwork, and quality
          assurance in project delivery. The primary project I worked on was a
          bank's website for property management.
        </p>
        <p></p>
        <p className="text-4xl font-semibold my-3">Certificates</p>
        <ul className="list-disc pl-8">
          <li>Google Data Analytics - Coursera</li>
          <li>Basic SQL - HackerRank</li>
          <li>Intermediate SQL - HackerRank</li>
          <li>TOEIC (Reading and listening): 945/990</li>
        </ul>
      </div>
    </div>
  );
}

export default About;
