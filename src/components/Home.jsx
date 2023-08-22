import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div name="home" className="w-full h-full bg-[#0a192f]">
      {/* Text */}
      <div className="max-w-[53.125rem] mx-auto px-20 flex flex-col justify-center w-full h-screen">
        <p className="text-xl text-[#5a87a5]">hi, my name is </p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Abhinay Katta
        </h1>
        <h2 className="text-3xl sm:text-5xl font-bold animate-pulse text-[#747c96]">
          {"{python}+{frontend} developer"}
        </h2>
        <p className="text-[#747c96] py-4 max-w-[780px]">
          I have good level of proficiency in Python development. Additionally,I
          have a genuine passion for both game development and web development,
          with a specific focus on utilizing React for web projects.
        </p>
        {/* bs Text */}
        <div>
          <Link className="group" to="work" smooth={true} duration={500}>
            <button className="text-white group border-[#5a87a5] border-2 rounded-xl px-6 py-3 my-2 flex items-center transition-colors duration-500 hover:bg-[#5a87a5] hover:border-[#5a87a5]">
              View Work
              <span className=" group-hover:translate-y-1 w-3 duration-300">
                <HiArrowNarrowRight className="ml-3 rotate-90" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
