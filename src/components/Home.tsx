import Link from "next/link";

const Home = () => {
  return (
    <section id="home" className="w-full h-full bg-[#0a192f]">
      {/* Text */}
      <div className="max-w-[53.125rem] mx-auto px-20 flex flex-col justify-center w-full h-screen">
        <p className="text-[#5a87a5] component-subheading">hi, my name is </p>
        <h1 className=" font-bold text-[#ccd6f6] component-title">
          Abhinay Katta
        </h1>
        <h2 className="font-bold hover:animate-pulse text-[#747c96] component-caption">
          {"Frontend Software Engineer"}
        </h2>
        <p className="text-[#747c96] py-4 max-w-[780px] component-text">
          Frontend-focused software engineer specializing in performance
          optimization, deep state management, and building high-performance web
          applications. Experienced in React, Next.js, and TypeScript with a
          passion for clean, scalable, and responsive user interfaces.
        </p>

        <div>
          <Link className="group" href="work">
            <button className="text-white  border-[#5a87a5] rounded-xl px-6 py-3 my-2 flex items-center transition-colors duration-500 hover:bg-[#5a87a5] hover:border-[#5a87a5]">
              View Work
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
