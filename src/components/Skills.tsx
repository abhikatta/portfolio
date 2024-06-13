import skillIcons from "./data/Skills";

const Skills = () => {
  return (
    <div
      id="skills"
      className="w-full min-h-screen h-full bg-[#1e1666] text-gray-300 ">
      <div className="max-w-[53.125rem] mx-auto  p-4 flex flex-col justify-center w-full h-auto">
        <div className="-left-[10rem] w-[100vh] absolute items-center -rotate-90 text-white opacity-60 md:flex hidden flex-col">
          <p className="font-bold  text-[10rem]">Skills</p>
        </div>
        <div>
          <p className="py-4 pt-[10rem] component-caption">
            || These are the technologies I've worked with
          </p>
        </div>
        {/* container for icons */}
        <div className="w-full  grid grid-cols-2 lg:grid-cols-4 gap-4 text-center py-8">
          {skillIcons.map((v, i) => {
            return (
              <div
                key={i}
                className="shadow-md grayscale hover:grayscale-0 shadow-[#040c16] hover:scale-110 duration-500">
                <img
                  src={v.icon}
                  alt="skill-icon"
                  className="w-20 mx-auto  select-none"
                />
                <p className="my-4 ">{`{${v.name}}`}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
