import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./components/Navbar";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Contact from "./routes/contact.jsx";
import About from "./routes/about.jsx";
import Projects from "./routes/projects.jsx";
import Footer from "./components/Footer.jsx";

const router = createBrowserRouter([
  {
    path: "/nvquang-portfolio/",
    element: <Root />,
  },
  {
    path: "./contact",
    element: <Contact />,
  },
  {
    path: "./about",
    element: <About />,
  },
  {
    path: "./projects",
    element: <Projects />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode className="">
    <div>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </div>
  </React.StrictMode>
);
