import { useEffect, useState } from "react";
import "../index.css";
import projects from "./data/Projects";
// bg - [#ac3c67];

const Work = () => {
  return (
    <div
      id="work"
      className="w-full min-h-screen h-auto md:py-[0px] py-[40px] bg-[#ac3c67] text-gray-300 ">
      {/* className="w-full min-h-screen h-auto py-[100px]  text-gray-300 "> */}
      <div className="max-w-[53.125rem] mx-auto  p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="font-bold inline border-b-4 border-[#5f4dff] component-title">
            Work
          </p>
          <p className="py-4 component-caption">|| This is some of my work</p>
        </div>

        {/* container for icons */}

        {projects.map((v, i) => {
          return (
            <div
              key={i}
              className={`min-h-[10rem] w-auto md:mx-0 mx-4 my-[20px] rounded-3xl hover:scale-110 
              transition-transform duration-300 flex flex-col ${
                i % 2 === 0 ? "md:items-start" : "md:items-end"
              }
              `}>
              <div className={`flex flex-row justify-evenly`}>
                <p
                  className="md:flex hidden font-bold text-5xl px-2 py-10 text-[#261a91] underline 
                underline-offset-4">
                  #{i + 1}
                </p>
                <img
                  alt=""
                  className={`rounded-3xl w-[24rem]`}
                  src={`${v.backgroundImage}`}
                />
              </div>
              <p className="font-medium text-md">{v.description}</p>
              <div className="md:flex hidden">
                {v.tags?.map((tag, i) => {
                  return (
                    <p
                      key={i}
                      className="mx-2 rounded-lg bg-[#deaaad] cursor-pointer select-text selection:bg-none opacity-60
                       hover:opacity-100 px-2 py-1 text-black">
                      {tag}
                    </p>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Work;
