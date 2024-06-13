import { useState } from "react";
import Logo from "../assets/logo.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleclick = () => {
    setNav(!nav);
  };

  return (
    <div>
      <div
        style={{ zIndex: 2 }}
        className="fixed h-[3rem] hover:h-[6rem] transition-all duration-300 w-full top-4 flex justify-center items-center px-10 py-4 text-gray-300">
        <div className="h-[3rem] hover:h-[6rem] transition-all duration-300 border-r-4 border-[black] border-l-4 rounded-full w-[50%] backdrop-blur-lg flex flex-row justify-between items-center">
          <div className="h-[3rem] hover:h-[6rem] transition-all duration-300">
            <a className="lg:flex hidden " href="/portfolio">
              <img
                src={Logo}
                alt="logo"
                className="w-[3rem] hover:w-[5rem] transition-all duration-300"></img>
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

            {/* <li>
          <Link
            className="hover:underline hover:underline-offset-4"
            to="about"
            smooth={true}
            duration={500}>
            About
          </Link>
        </li> */}
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
          className=" hover:cursor-pointer lg:hidden">
          {!nav ? <FaBars size={40} /> : <FaTimes size={40} />}
        </div>
        {/* on minimized/phone screen */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen backdrop-blur-lg  flex flex-col justify-center items-center scale-125 "
          }>
          <li className="py-[4px] my-[25px] text-4xl hover:text-black hover:bg-slate-50 duration-300 transition-colors rounded-md ">
            <Link onClick={handleclick} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          {/* <li className="py-[4px] my-[25px] text-4xl hover:text-black hover:bg-slate-50 duration-300 transition-colors rounded-md ">
          <Link onClick={handleclick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li> */}
          <li className="py-[4px] my-[25px] text-4xl hover:text-black hover:bg-slate-50 duration-300 transition-colors rounded-md ">
            <Link
              onClick={handleclick}
              to="skills"
              smooth={true}
              duration={500}>
              Skills
            </Link>
          </li>
          <li className="py-[4px] my-[25px] text-4xl hover:text-black hover:bg-slate-50 duration-300 transition-colors rounded-md ">
            <Link onClick={handleclick} to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className="py-[4px] my-[25px] text-4xl hover:text-black hover:bg-slate-50 duration-300 transition-colors rounded-md ">
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
      <div className="fixed lg:flex flex sm:hidden flex-col top-[35%] left-0">
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
