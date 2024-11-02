"use client";

import { navList } from "@config/navList";
import Link from "next/link";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <section>
      <div
        onMouseOver={() => setShowNav(true)}
        onMouseLeave={() => setShowNav(false)}
        className="fixed top-16 right-16 cursor-pointer h-fit">
        <p className="z-10  leading-[62px] text-[#5a87a5] text-[100px]">=</p>
        <AnimatePresence>
          {showNav && (
            <motion.div
              initial={{ opacity: 0, x: 200, y: -125 }}
              transition={{ duration: 0.5, type: "spring" }}
              exit={{ opacity: 0, x: 300 }}
              animate={{ opacity: 1, x: -350 }}
              className="absolute w-[30rem] pl-[50px] h-screen rounded-tl-[100px] rounded-bl-[100px] bg-black  flex flex-col justify-center items-start">
              <motion.div
                initial={{ opacity: 0, x: 200 }}
                transition={{ duration: 0.5, type: "spring" }}
                exit={{ opacity: 0, x: 200 }}
                animate={{ opacity: 1, x: 0 }}
                className="relative flex flex-col min-h-screen justify-center items-start ">
                {navList.map((item, index) => (
                  <motion.div key={index} className="mb-[3rem]">
                    <Link
                      href={item.path}
                      className="hover:text-[#5a87a5] opacity-70 hover:opacity-100 duration-150 leading-[62px] text-[#5a87a5] text-[100px]">
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Navbar;
