import "../index.css";
import projects from "./data/Projects";

const Work = () => {
  return (
    <div
      id="work"
      className="w-full min-h-screen h-auto md:py-[0px] py-[20px]  bg-[#ac3c67] flex justify-center items-center">
      {/* main container */}
      <div className="max-w-[54rem] mx-auto p-4 flex flex-col justify-center w-full h-screen">
        <div className="pb-8">
          <p className=" font-bold inline border-b-4 text-gray-300 border-[#3ad889] component-title">
            Work
          </p>
          <p className="py-6 text-white component-caption">
            ||This is some of my work
          </p>
        </div>
        {/* items container */}
        <div className="">
          {/* grid container */}
          {projects.map((v, i) => {
            return (
              <div
                key={i}
                style={{ backgroundImage: `url(${v.backgroundImage})` }}
                className="-mt-[130px] md:w-[20rem] w-auto h-auto shadow-lg shadow-[#040c16] group container hover:scale-105 duration-300 rounded-md flex justify-center items-center content-div">
                {/* hover effects */}
                <div className="opacity-0 group-hover:opacity-100 px-2">
                  <span className="text-2xl font-bold text-white tracking-wider">
                    {v.name}
                  </span>
                  <p className="text-sm font-bold text-white tracking-wider">
                    {v.description}
                  </p>
                  {/* <div className="pt-8 text-center"> */}
                  <div className="pt-8 flex flex-row justify-evenly text-center">
                    <a href={v.link.download}>
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Demo
                      </button>
                    </a>
                    <a href={v.link.github}>
                      <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                        Code
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;
