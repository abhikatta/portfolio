"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaBars, FaGithub, FaLinkedin, FaTimes } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleclick = () => {
    setNav(!nav);
  };

  return (
    <header>
      <nav className="fixed z-10 h-[3rem] hover:h-[5rem] lg:transition-all duration-300 w-full md:top-4 flex justify-center items-center md:px-10 md:py-4 text-gray-300">
        <div className="h-[3rem] hover:h-[5rem] lg:transition-all duration-300 border-r-2 border-l-2 border-gray-300 rounded-[1rem] w-[50%] backdrop-blur-lg lg:flex hidden flex-row justify-between items-center shadow-lg">
          <Link className="lg:flex hidden" href="/">
            <Image
              src={"/logo.png"}
              alt="logo"
              width={48}
              height={96}
              className="w-[3rem]"
            />
          </Link>
          <ul className="hidden lg:flex">
            {/*if size > medium its flex else hidden */}
            <li>
              <Link
                className="hover:underline hover:underline-offset-4"
                href="#home">
                Home
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline hover:underline-offset-4"
                href="#about">
                About
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline hover:underline-offset-4"
                href="#skills">
                Skills
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline hover:underline-offset-4"
                href="#personal-projects">
                Personal Projects
              </Link>
            </li>
            <li>
              <Link
                className="hover:underline hover:underline-offset-4"
                href="#contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* on minimized/phone screen */}
        <div
          onClick={handleclick}
          style={{ zIndex: 3 }}
          className="lg:hover:cursor-pointer w-auhref absolute right-5 top-5 lg:hidden flex justify-end">
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
            <Link onClick={handleclick} href="home">
              Home
            </Link>
          </li>
          <li className="py-[4px] my-[25px] text-[2.5rem] hover:text-black hover:bg-slate-50 duration-300 transition-colors rounded-md ">
            <Link onClick={handleclick} href="about">
              About
            </Link>
          </li>
          <li className="py-[4px] my-[25px] text-[2.5rem] hover:text-black hover:bg-slate-50 duration-300 transition-colors rounded-md ">
            <Link onClick={handleclick} href="skills">
              Skills
            </Link>
          </li>
          <li className="py-[4px] my-[25px] text-[2.5rem] hover:text-black hover:bg-slate-50 duration-300 transition-colors rounded-md ">
            <Link onClick={handleclick} href="work">
              Work
            </Link>
          </li>
          <li className="py-[4px] my-[25px] text-[2.5rem] hover:text-black hover:bg-slate-50 duration-300 transition-colors rounded-md ">
            <Link onClick={handleclick} href="contact">
              Contact
            </Link>
          </li>
        </ul>
        {/* socials */}
      </nav>
      <div className="fixed lg:flex hidden flex-col items-center justify-center h-full">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/abhinaykatta/">
              LinkedIn
              <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/abhikatta">
              Github
              <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
            <Link
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
              href="#contact"
              onClick={handleclick}>
              Gmail
              <HiOutlineMail size={30} />
            </Link>
          </li>

          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              target="_blank"
              rel="noopener noreferrer"
              href="https://drive.google.com/file/d/1jrztL1KeejF93rVV4ezYNYoJMubPUMk6/view?usp=drive_link">
              Résumé
              <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};
export default Navbar;
