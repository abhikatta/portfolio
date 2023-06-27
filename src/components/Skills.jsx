import React from "react";
import Python from "../assets/python.png";
import HTML from "../assets/html.png";
import Tensorflow from "../assets/tensorflow.png";
import ReactIcon from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import Flask from "../assets/flask.png";
const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f]  text-gray-300 ">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#5a87a5] ">
            Skills
          </p>
          <p className="py-4">|| These are the technologies I've worked with</p>
        </div>

        {/* container for icons */}
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Python} alt="skill-icon" className="w-20 mx-auto "></img>
            <p className="my-4">{"{Python}"}</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              src={ReactIcon}
              alt="skill-icon"
              className="w-20 mx-auto "></img>
            <p className="my-4">{"{React}"}</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={HTML} alt="skill-icon" className="w-20 mx-auto "></img>
            <p className="my-4">{"{HTML}"}</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              src={Tensorflow}
              alt="skill-icon"
              className="w-20 mx-auto "></img>
            <p className="my-4">{"{Tensorflow}"}</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              src={Tailwind}
              alt="skill-icon"
              className="w-20 mx-auto "></img>
            <p className="my-4">{"{Tailwind}"}</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img src={Flask} alt="skill-icon" className="w-20 mx-auto "></img>
            <p className="my-4">{"{Flask}"}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
