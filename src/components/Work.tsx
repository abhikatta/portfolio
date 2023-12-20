import "../index.css";
import React from "react";
import Project0 from "../assets/JoBo.png";
import Project1 from "../assets/project1.png";
import Project2 from "../assets/project2.png";
import Project3 from "../assets/project3.png";
import Project4 from "../assets/project4.png";
const Work = () => {
  return (
    <div
      id="work"
      className="w-full min-h-screen h-auto md:py-[100px] py-[150px]  bg-[#ac3c67] flex justify-center items-center">
      {/* main container */}
      <div className="max-w-[53.125rem] mx-auto p-4 flex flex-col justify-center w-full h-screen">
        <div className="pb-8">
          <p className=" font-bold inline border-b-4 text-gray-300 border-[#3ad889] component-title">
            Work
          </p>
          <p className="py-6 text-white component-caption">
            ||This is some of my work
          </p>
        </div>
        {/* items container */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {/* grid container */}
          {/* project 0 */}
          <div
            style={{ backgroundImage: `url(${Project0})` }}
            className="  shadow-lg shadow-[#040c16] group container hover:scale-105 duration-300 rounded-md flex justify-center items-center mx-auto content-div">
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100 px-2">
              <span className="text-2xl font-bold text-white tracking-wider">
                JoBo
              </span>
              <p className="font-bold text-white tracking-wider">
                A mobile application written in react native that converts
                handwritten text to digital text using hugging face's TrOCR
                model.
              </p>
              {/* <div className="pt-8 text-center"> */}
              <div className="pt-8 flex flex-row justify-evenly text-center">
                <a href="https://github.com/abhikatta/JoBo">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/abhikatta/JoBo">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* project2 */}
          <div
            style={{ backgroundImage: `url(${Project2})` }}
            className="  shadow-lg shadow-[#040c16] group container hover:scale-105 duration-300 rounded-md flex justify-center items-center mx-auto content-div">
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100 px-2">
              <span className="text-2xl font-bold text-white tracking-wider">
                Webber
              </span>
              <p className="text-sm font-bold text-white tracking-wider">
                A simple voice assistant for windows written in python.
              </p>
              {/* <div className="pt-8 text-center"> */}
              <div className="pt-8 flex flex-row justify-evenly text-center">
                <a href="https://github.com/abhikatta/Webber/releases/download/proto1/Webber.zip">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/abhikatta/Webber">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* project1 */}
          <div
            style={{ backgroundImage: `url(${Project1})` }}
            className="shadow-lg shadow-[#040c16] group  hover:scale-105 duration-300 container rounded-md flex justify-center items-center mx-auto content-div">
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100 px-2">
              <span className="text-2xl font-bold text-white tracking-wider">
                TimeTableTuner
              </span>
              <p className="text-sm font-bold text-white tracking-wider">
                A flask app that shows current time and class from a
                auto-cleaned excel sheet.
              </p>

              {/* <div className="pt-8 text-center"> */}
              <div className="pt-8 flex flex-row justify-evenly text-center">
                <a href="https://github.com/abhikatta/TimeTableTuner">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/abhikatta/TimeTableTuner">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* project3 */}
          <div
            style={{ backgroundImage: `url(${Project3})` }}
            className="  shadow-lg shadow-[#040c16] group container hover:scale-105 duration-300 rounded-md flex justify-center items-center mx-auto content-div">
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100 px-2">
              <span className="text-2xl font-bold text-white tracking-wider">
                Portfolio Website
              </span>
              <p className="text-sm font-bold text-white tracking-wider">
                Portfolio website written in react and tailwind css. Deployed to
                github pages.
              </p>
              {/* <div className="pt-8 text-center"> */}
              <div className="pt-8 flex flex-row justify-evenly text-center">
                <a href="https://abhikatta.github.io/portfolio">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/abhikatta/portfolio">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/*project4  */}
          <div
            style={{
              backgroundImage: `url(${Project4})`,
            }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex hover:scale-105 duration-300 justify-center items-center mx-auto content-div">
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100 px-2">
              <span className="text-2xl font-bold text-white tracking-wider">
                Spamde
              </span>
              <p className="text-sm font-bold text-white tracking-wider">
                A windows widget app that can spam a given text in any chat app
                or anywhere where a text can be typed.
              </p>
              {/* <div className="pt-8 text-center"> */}
              <div className="pt-8 flex flex-row justify-evenly text-center">
                <a href="https://github.com/Abhinay-Katta/Spam-with-Python/releases/download/v1.0.0/spamde.exe">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/abhikatta/Spamde">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
