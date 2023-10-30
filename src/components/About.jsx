import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full  h-full bg-[#5F264A] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-screen">
        {/* Container */}
        <div className=" w-full max-w-[53.125rem] grid grid-cols-2 gap-8">
          <div className="md:text-left pb-8 pl-4">
            <p className="text-4xl sm:text-4xl font-bold inline border-b-4 border-[#be4d95]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[850px] w-full grid sm:grid-cols-1 gap-8 pl-10 md:pr-10 sm:pr-10 pr-10">
          <div className="text-3xl font-bold">
            <p>
              {/* Further description */}
              Hello, I'm [Abhinay Katta], Passionate and dedicated computer
              science student having good amount of development knowledge in
              python. I have minor to mid-level projects on my GitHub. I got
              into programming because of my interest in gaming which turned
              into interest in game development which turned into interest in
              Artificial Intelligence and software development. Learned game
              development with unity but soon got into machine learning and AI.
              Currently learning frontend development with React and
              React-Native for mobile application development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
