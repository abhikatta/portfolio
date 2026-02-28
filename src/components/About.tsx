const About = () => {
  return (
    <section
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
            Hello, I&apos;m Abhinay Katta, a Frontend-focused software engineer
            with a strong foundation in modern web technologies. I currently
            work as an SDE-1 at ScaleReal, building scalable frontend
            architectures.
          </p>
          <p className="font-normal component-text">
            I specialize in performance optimization, having successfully
            reduced bundle sizes by 99% in legacy applications and led
            migrations to modern build systems and reusable UI components.
          </p>
          <p className="font-normal md:text-right component-text">
            I initially started my journey with game development and python, but
            quickly discovered my passion for building fast, intuitive, and
            high-performing web experiences and mobile applications.
          </p>
          <p className="font-normal component-text">
            My current stack heavily revolves around React, Next.js, and
            TypeScript, along with robust state management tools like
            Redux/TanStack Query and Zustand.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
