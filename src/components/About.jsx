import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#0a192f] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        {/* Container */}
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border- border-[#5a87a5]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 pl-11">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              {/* Further description */}
              Hi, I'm abhinay, nice to meet you. Please take a look around. Hi,
              Hi, I'm abhinay, nice to meet you. Please take a look around. I'm
              Hi, I'm abhinay, nice to meet you. Please take a look around. Hi,
              I'm abhinay, nice to meet you. Please take a look around. Hi, I'm
              abhinay, nice to meet you. Please take a look around. abhinay, Hi,
              I'm abhinay, nice to meet you. Ple .
            </p>
          </div>
          <div>
            <p>
              Some random bsSome random bsSome random bsSome random bsSome
              random bs Some random bsSome random bsSome random bs Some random
              bsSome random bs Some random bs Some random bs Some random bs Some
              bs Some random bs Some random bsSome random bs Some random bs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
