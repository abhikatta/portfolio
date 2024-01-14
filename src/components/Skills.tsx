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
