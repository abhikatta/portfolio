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
      <nav className="bg-parisad relative flex flex-col items-center justify-center">
        <button
          onClick={toggleMenu}
          onMouseEnter={toggleMenu}
          className="absolute top-0 left-0 z-999 mt-10 size-[40px] cursor-pointer 2xl:mt-20"
        >
          <HamburgerMenuIcon isOpen={isOpen} />
        </button>
        <AnimatePresence mode="sync">
          {isOpen && (
            <div className="bg-primaryBlue absolute top-0 left-0 z-100 flex h-screen max-h-[90vh] w-full flex-col items-start justify-center lg:max-h-screen lg:gap-y-6 lg:pt-5 2xl:gap-y-8 2xl:pt-0">
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
                    "s:text-4xl font-lemonMilk flex flex-row py-2 text-3xl whitespace-nowrap hover:cursor-none hover:underline lg:text-7xl lg:duration-100 lg:hover:scale-105 2xl:text-8xl",
                    pathname.replace("/", "") === nav.path
                      ? "bg-primaryYellow"
                      : "",
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
