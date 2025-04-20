"use client";
import { navItems } from "@/data/navlist";
import { cn } from "@/utils/cn";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Container from "./container";
import { AnimatePresence, motion, Variants } from "motion/react";
import { HamburgerMenuIcon } from "@/assets/icons/icons";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const pathname = usePathname();
  const navVariants: Variants = {
    initial: {
      x: -100,
      opacity: 0,
      y: -100,
      skew: 45,
    },
    animate: (delayValue: number) => ({
      skew: 0,
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.25,
        delay: delayValue * 0.075,
        type: "spring",
      },
    }),
    exit: (delayValue: number) => ({
      opacity: 0,
      transition: {
        duration: 0.35,
        delay: delayValue * 0.075,
        type: "spring",
      },
    }),
  };
  return (
    <Container>
      <nav className="flex flex-col items-center justify-center relative">
        <button
          onClick={toggleMenu}
          onMouseEnter={toggleMenu}
          className="absolute top-0 left-0 size-[40px] cursor-pointer z-999 mt-10 2xl:mt-20"
        >
          <HamburgerMenuIcon isOpen={isOpen} />
        </button>
        <AnimatePresence mode="sync">
          {isOpen && (
            <div className="absolute lg:pt-5 2xl:pt-0 left-0 top-0 flex flex-col lg:gap-y-6 2xl:gap-y-8 max-h-[90vh] lg:max-h-screen h-screen w-full items-start justify-center bg-primaryBlue z-100">
              {navItems.map((nav, index) => (
                <motion.a
                  variants={navVariants}
                  key={index}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  custom={index}
                  id="menu-item"
                  className={cn(
                    "py-2 text-3xl s:text-4xl whitespace-nowrap lg:text-7xl 2xl:text-8xl flex flex-row font-lemonMilk lg:hover:scale-105 lg:duration-100",
                    pathname.replace("/", "") === nav.path
                      ? "bg-primaryYellow "
                      : ""
                  )}
                  href={`/${nav.path}`}
                >
                  {nav.name}
                </motion.a>
              ))}
            </div>
          )}
        </AnimatePresence>
      </nav>
    </Container>
  );
};

export default Navbar;
