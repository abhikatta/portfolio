import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-full bg-[#5F264A] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-screen">
        {/* Container */}
        <div className=" w-full max-w-[53.125rem] grid grid-cols-2 gap-8">
          <div className="md:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-[#be4d95]">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[850px] w-full grid sm:grid-cols-1 gap-8 pl-10">
          <div className="sm:text-left text-4xl font-bold">
            <p>
              {/* Further description */}
              Hello, I'm [Abhinay Katta], an experienced Python Developer
              specializing in React and Python libraries. My expertise is backed
              by certifications from Microsoft, including AI-900, AZ-900, and
              PL-900, which demonstrate my proficiency in Artificial
              Intelligence, Cloud Computing, and Power Platform.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
