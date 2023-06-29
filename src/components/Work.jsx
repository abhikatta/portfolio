import React from "react";
import Project1 from "../assets/project1.png";
import Project2 from "../assets/project2.png";
import Project3 from "../assets/project3.png";
import Project4 from "../assets/project4.png";
// Workimg from assets
const Work = () => {
  return (
    <div name="work" className="w-full lg:h-full  text-gray-300 bg-[#166e29]">
      {/* main container */}
      <div className="max-w-[53.125rem] mx-auto p-4 flex flex-col justify-center w-full h-screen">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-[#3ad889]">
            Work
          </p>
          <p className="py-6 ">||This is some of my work</p>
        </div>
        {/* items container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
          {/* grid container */}

          {/* project2 */}
          <div
            style={{ backgroundImage: `url(${Project2})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Webber
              </span>
              <div className="pt-8 text-center">
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
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                TimeTableTuner
              </span>
              <div className="pt-8 text-center">
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
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Portfolio Website
              </span>
              <div className="pt-8 text-center">
                <a href="/">
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
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
            {/* hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Spamde
              </span>
              <div className="pt-8 text-center">
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
