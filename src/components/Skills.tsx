import skillIcons from "./data/Skills";

const Skills = () => {
  return (
    <div
      id="skills"
      className="w-full min-h-screen h-auto md:py-[0px] py-[40px] bg-[#1e1666] text-gray-300 ">
      {/* className="w-full min-h-screen h-auto py-[100px]  text-gray-300 "> */}
      <div className="max-w-[53.125rem] mx-auto  p-4 flex flex-col justify-center w-full h-screen">
        <div>
          <p className="font-bold inline border-b-4 border-[#5f4dff] component-title">
            Skills
          </p>
          <p className="py-4 component-caption">
            || These are the technologies I've worked with
          </p>
        </div>

        {/* container for icons */}
        <div className="w-full  grid grid-cols-2 lg:grid-cols-4 gap-4 text-center py-8">
          {skillIcons.map((v, i) => {
            return (
              <div className="shadow-md grayscale hover:grayscale-0 shadow-[#040c16] hover:scale-110 duration-500">
                <img
                  src={v.icon}
                  alt="skill-icon"
                  className="w-20 mx-auto  select-none"></img>
                <p className="my-4 ">{`{${v.name}}`}</p>
              </div>
            );
          })}
          {/* <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <a href="https://www.python.org/">
              <img
                src={Python}
                alt="skill-icon"
                className="w-20 mx-auto "></img>
              <p className="my-4 ">{"{Python}"}</p>
            </a>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <a href="https://react.dev/">
              <img
                src={ReactIcon}
                alt="skill-icon"
                className="w-20 mx-auto "></img>
              <p className="my-4 ">{"{React}/{React Native}"}</p>
            </a>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <a href="https://firebase.google.com/">
              <img
                src={Firebase}
                alt="skill-icon"
                className="w-20 mx-auto "></img>
              <p className="my-4 ">{"{Firebase}"}</p>
            </a>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <a href="https://unity.com/">
              <img src={Unity} alt="skill-icon" className="w-20 mx-auto "></img>
              <p className="my-4 ">{"{Unity 3D}"}</p>
            </a>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <a href="https://html.com/">
              <img src={HTML} alt="skill-icon" className="w-20 mx-auto "></img>
              <p className="my-4 ">{"{HTML5}"}</p>
            </a>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <a href="https://tailwindcss.com/">
              <img
                src={Tailwind}
                alt="skill-icon"
                className="w-20 mx-auto "></img>
              <p className="my-4 ">{"{Tailwind}"}</p>
            </a>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <a href="https://learn.microsoft.com/en-us/dotnet/csharp/">
              <img
                src={C_Sharp}
                alt="skill-icon"
                className="w-20 mx-auto "></img>
              <p className="my-4 ">{"{C#}"}</p>
            </a>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <a href="https://www.tensorflow.org/">
              <img
                src={Tensorflow}
                alt="skill-icon"
                className="w-20 mx-auto "></img>
              <p className="my-4 ">{"{Tensorflow}"}</p>
            </a>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <a href="https://flask.palletsprojects.com/en/2.3.x/">
              <img
                src={Flask}
                alt="skill-icon"
                className="w-20 mx-auto rounded-[0.55rem] "></img>
              <p className="my-4 ">{"{Flask}"}</p>
            </a>
          </div>

          <div className=" group shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <a href="https://git-scm.com/">
              <img
                src={GitIcon}
                alt="skill-icon"
                className="w-20 mx-auto rounded-[0.55rem] "></img>
              <p className="my-4 ">{"{Git}"}</p>
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Skills;
