import "../index.css";
import projects from "./data/Projects";
// bg - [#ac3c67];

const Work = () => {
  return (
    <div
      id="work"
      className="w-auto min-h-screen h-auto md:py-[0px] py-[40px] bg-[#ac3c67] text-gray-300">
      <div className="max-w-[53.125rem] mx-auto  p-4 flex flex-col justify-center w-full h-full">
        <div className="-left-[10rem] w-[100vh] absolute items-center -rotate-90 text-white opacity-60 md:flex hidden flex-col">
          <p className="font-bold text-[10rem]">Work</p>
        </div>
        <div>
          <p className="md:pt-[8rem] component-caption">
            || This is some of my work
          </p>
        </div>
        {/* container for icons */}
        {projects.map((v, i) => {
          return (
            <div
              key={i}
              className={`min-h-[10rem] w-auto md:mx-0 mx-4 my-[20px] rounded-3xl hover:scale-110  md:border-none border  p-4
              transition-transform duration-300 flex flex-col ${
                i % 2 === 0 ? "md:items-start" : "md:items-end"
              }`}>
              <div className={`flex md:flex-row flex-col justify-evenly`}>
                <div
                  className={`flex 
                ${
                  i % 2 !== 0
                    ? "md:flex-row-reverse flex-col"
                    : "md:flex-row flex-col"
                }`}>
                  <div
                    className={`flex items-center
                ${
                  i % 2 !== 0
                    ? "md:flex-row-reverse flex-col"
                    : "md:flex-row flex-col"
                }`}>
                    <img
                      alt=""
                      className={`rounded-3xl w-[24rem]`}
                      src={`${v.backgroundImage}`}
                    />
                    <div className="mx-[7rem] flex flex-col items-center   h-min">
                      <h1
                        className={`md:flex hidden font-bold px-2  text-5xl
                        `}>
                        #{i + 1}
                      </h1>
                      <div className="flex flex-row md:my-0 my-4">
                        <a
                          className="rounded-md md:hover:bg-[#dc81a4] md:bg-inherit bg-[#dc81a4] md:text-base text-xl
                       hover:opacity-100 md:opacity-60 opacity-100 text-white font-bold h-min w-min mr-2 px-2 py-1"
                          href={`${v.link.download}`}>
                          Demo
                        </a>
                        <a
                          className="rounded-md md:hover:bg-[#dc81a4] md:bg-inherit bg-[#dc81a4] md:text-base text-xl
                       hover:opacity-100 md:opacity-60 opacity-100 text-white font-bold h-min w-min ml-2 px-2 py-1"
                          href={`${v.link.github}`}>
                          Github
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="font-medium text-md my-4">{v.description}</p>
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
