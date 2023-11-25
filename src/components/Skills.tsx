import Python from "../assets/python.png";
import HTML from "../assets/html.png";
import Tensorflow from "../assets/tensorflow.png";
import ReactIcon from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import Flask from "../assets/flask.jpg";
import GitIcon from "../assets/git.png";
import Unity from "../assets/unity.png";
import Firebase from "../assets/firebase.png";
import C_Sharp from "../assets/c_sharp.png";
const Skills = () => {
  return (
    <div id="skills" className="w-full h-full bg-[#1e1666]  text-gray-300 ">
      <div className="max-w-[53.125rem] mx-auto p-4 flex flex-col justify-center w-full h-screen">
        <div>
          <p className="lg:text-4xl text-5xl font-bold inline border-b-4 border-[#5f4dff] ">
            Skills
          </p>
          <p className="py-4 lg:text-xl text-4xl">
            || These are the technologies I've worked with
          </p>
        </div>

        {/* container for icons */}
        <div className="w-full grid grid-cols-2 lg:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <a href="https://www.python.org/">
              <img
                src={Python}
                alt="skill-icon"
                className="w-20 mx-auto "></img>
              <p className="my-4 lg:text-xl text-3xl">{"{Python}"}</p>
            </a>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <a href="https://react.dev/">
              <img
                src={ReactIcon}
                alt="skill-icon"
                className="w-20 mx-auto "></img>
              <p className="my-4 lg:text-xl text-3xl">
                {"{React}/{React Native}"}
              </p>
            </a>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <a href="https://firebase.google.com/">
              <img
                src={Firebase}
                alt="skill-icon"
                className="w-20 mx-auto "></img>
              <p className="my-4 lg:text-xl text-3xl">{"{Firebase}"}</p>
            </a>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <a href="https://unity.com/">
              <img src={Unity} alt="skill-icon" className="w-20 mx-auto "></img>
              <p className="my-4 lg:text-xl text-3xl">{"{Unity 3D}"}</p>
            </a>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <a href="https://html.com/">
              <img src={HTML} alt="skill-icon" className="w-20 mx-auto "></img>
              <p className="my-4 lg:text-xl text-3xl">{"{HTML5}"}</p>
            </a>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <a href="https://tailwindcss.com/">
              <img
                src={Tailwind}
                alt="skill-icon"
                className="w-20 mx-auto "></img>
              <p className="my-4 lg:text-xl text-3xl">{"{Tailwind}"}</p>
            </a>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <a href="https://learn.microsoft.com/en-us/dotnet/csharp/">
              <img
                src={C_Sharp}
                alt="skill-icon"
                className="w-20 mx-auto "></img>
              <p className="my-4 lg:text-xl text-3xl">{"{C#}"}</p>
            </a>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <a href="https://www.tensorflow.org/">
              <img
                src={Tensorflow}
                alt="skill-icon"
                className="w-20 mx-auto "></img>
              <p className="my-4 lg:text-xl text-3xl">{"{Tensorflow}"}</p>
            </a>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <a href="https://flask.palletsprojects.com/en/2.3.x/">
              <img
                src={Flask}
                alt="skill-icon"
                className="w-20 mx-auto rounded-[0.55rem] "></img>
              <p className="my-4 lg:text-xl text-3xl">{"{Flask}"}</p>
            </a>
          </div>

          <div className=" group shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <a href="https://git-scm.com/">
              <img
                src={GitIcon}
                alt="skill-icon"
                className="w-20 mx-auto rounded-[0.55rem] "></img>
              <p className="my-4 lg:text-xl text-3xl">{"{Git}"}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
