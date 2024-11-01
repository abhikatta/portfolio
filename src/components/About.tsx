const About = () => {
  return (
    <div
      id="about"
      className="w-full min-h-screen h-auto bg-[#5F264A] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-screen">
        {/* Container */}
        <div className=" w-full max-w-[53.125rem]">
          <div className="-left-[10rem] w-[100vh] mt-10 absolute items-center -rotate-90 text-white opacity-60 xl:flex hidden flex-col">
            <p className="font-bold text-[10rem]">About</p>
          </div>
        </div>
        <div className="max-w-[850px] w-full grid md:grid-cols-2 gap-8 pl-10 pr-10">
          <p className="font-normal md:text-right component-text">
            {/* Further description */}
            Hello, I&apos;m Abhinay Katta, Passionate and dedicated computer
            science student having good amount of development knowledge in
            python. I have minor to mid-level projects on my GitHub.
          </p>
          <p className="font-normal component-text">
            I got into programming because of my interest in gaming which turned
            into interest in game development which turned into interest in
            Artificial Intelligence and software development.
          </p>
          <p className="font-normal md:text-right component-text">
            Learned game development with unity but soon got into machine
            learning and AI.
          </p>
          <p className="font-normal component-text">
            Currently learning frontend development with React and React-Native
            for mobile application development.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
