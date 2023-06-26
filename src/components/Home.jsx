import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Text */}
      <div className="max-w-[1000px] mx-auto px-20 flex flex-col justify-center h-full">
        <p className="text-xl text-[#5a87a5]">hi, my name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Abhinay Katta
        </h1>
        <h2 className="text-3xl sm:text-6xl font-bold text-[#747c96]">
          python developer
        </h2>
        <p className="text-[#747c96] py-4 max-w-[780px]">
          I am interested in game development, python development and proficient
          in web development with react
        </p>
        {/* bs Text */}
        <div>
          <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#5a87a5] hover:border-[#5a87a5]">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3 " />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
