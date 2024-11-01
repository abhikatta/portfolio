import { useState } from "react";
import Logo from "../assets/logo.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import Image from "next/image";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleclick = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div
        style={{ zIndex: 2 }}
        className="fixed h-[3rem] hover:h-[5rem] lg:transition-all duration-300 w-full md:top-4 flex justify-center items-center md:px-10 md:py-4 text-gray-300">
        <div className="h-[3rem] hover:h-[5rem] lg:transition-all duration-300 border-r-4 border-l-4 rounded-[1rem] w-[50%] backdrop-blur-lg lg:flex hidden flex-row justify-between items-center">
          <div className="h-[3rem] hover:h-[5rem] lg:transition-all duration-300">
            <a className="lg:flex hidden " href="/portfolio">
<<<<<<< HEAD
              <Image
                src={"/logo.png"}
=======
              <img
                src={Logo}
>>>>>>> 8444f7b0f4ca2d06c0d7c508915d0cc71cb9d61c
                alt="logo"
                width={48}
                height={96}
                className="w-[3rem] hover:w-[5rem] transition-all duration-300"
              />
            </a>
          </div>
          <ul className="hidden lg:flex">
            {/*if size > medium its flex else hidden */}
            <li>
              <Link
                className="hover:underline hover:underline-offset-4"
                to="home"
                smooth={true}
                duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline hover:underline-offset-4"
                to="about"
                smooth={true}
                duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline hover:underline-offset-4"
                to="skills"
                smooth={true}
                duration={500}>
                Skills
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline hover:underline-offset-4"
                to="work"
                smooth={true}
                duration={500}>
                Work
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline hover:underline-offset-4"
                to="contact"
                smooth={true}
                duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* on minimized/phone screen */}
        <div
          onClick={handleclick}
          style={{ zIndex: 3 }}
          className="lg:hover:cursor-pointer w-auto absolute right-5 top-5 lg:hidden flex justify-end">
          {!nav ? <FaBars size={40} /> : <FaTimes size={40} />}
        </div>
        {/* on minimized/phone screen */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen backdrop-blur-lg  flex flex-col justify-center items-center  "
          }>
          <li className="py-[4px] my-[25px] text-[2.5rem] hover:text-black hover:bg-slate-50 duration-300 transition-colors rounded-md ">
            <Link onClick={handleclick} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="py-[4px] my-[25px] text-[2.5rem] hover:text-black hover:bg-slate-50 duration-300 transition-colors rounded-md ">
            <Link onClick={handleclick} to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="py-[4px] my-[25px] text-[2.5rem] hover:text-black hover:bg-slate-50 duration-300 transition-colors rounded-md ">
            <Link
              onClick={handleclick}
              to="skills"
              smooth={true}
              duration={500}>
              Skills
            </Link>
          </li>
          <li className="py-[4px] my-[25px] text-[2.5rem] hover:text-black hover:bg-slate-50 duration-300 transition-colors rounded-md ">
            <Link onClick={handleclick} to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className="py-[4px] my-[25px] text-[2.5rem] hover:text-black hover:bg-slate-50 duration-300 transition-colors rounded-md ">
            <Link
              onClick={handleclick}
              to="contact"
              smooth={true}
              duration={500}>
              Contact
            </Link>
          </li>
        </ul>
        {/* socials */}
      </div>
      <div className="fixed lg:flex hidden flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/abhinaykatta/">
              LinkedIn
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/abhikatta">
              Github
              <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
            <Link
              className="flex justify-between items-center w-full text-gray-300"
              to="contact"
              smooth={true}
              duration={500}>
              Gmail
              <HiOutlineMail size={30} />
            </Link>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://drive.google.com/file/d/1aGqC8vclVRaSls0spoNOOnhQADMtNJQQ/view?usp=sharing">
              Résumé
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Navbar;
