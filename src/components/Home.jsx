import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Text */}
      <div className="max-w-[1000px] mx-auto px-20 flex flex-col justify-center h-full">
        <p className="text-xl text-[#5a87a5]">hi, my name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          abhinay katta
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#747c96]">
          blah blah blah
        </h2>
        <p className="text-[#747c96] py-4 max-w-[780px]">
          more in depth self-description{" "}
        </p>
        {/* bs Text */}
      </div>
      <div>
        <button>
          View Work <HiArrowNarrowRight />
        </button>
      </div>
    </div>
  );
};

export default Home;
