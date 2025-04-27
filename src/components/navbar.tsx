"use client";
import { navItems } from "@/data/navlist";
import { cn } from "@/utils/cn";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import Container from "./container";
import { AnimatePresence, motion, Variants } from "motion/react";
import { HamburgerMenuIcon } from "@/assets/icons/icons";
import { NavElement, Position } from "@/utils/types";

const initialPosition: Position = {
  top: 0,
  opacity: 0,
  height: 0,
  width: 0,
};

export const NavItem = ({
  navVariants,
  index,
  pathname,
  nav,
  setPosition,
}: NavElement) => {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const getPropertiesForPill = () => {
    if (ref.current) {
      console.log(ref.current);
      const { width, height } = ref.current.getBoundingClientRect();
      const { offsetTop } = ref.current;
      setPosition({
        top: offsetTop,
        width,
        height,
        opacity: 1,
      });
    }
  };

  const hidePill = () => setPosition((prev) => ({ ...prev, opacity: 0 }));

  return (
    <motion.a
      ref={ref}
      variants={navVariants}
      onMouseEnter={getPropertiesForPill}
      onMouseLeave={hidePill}
      initial="initial"
      animate="animate"
      exit="exit"
      custom={index}
      id="menu-item"
      className={cn(
        "s:text-4xl font-lemonMilk text-primaryBlue z-10 flex flex-row p-2 text-3xl whitespace-nowrap mix-blend-difference lg:text-7xl 2xl:text-8xl",
        pathname.replace("/", "") === nav.path ? "border" : "",
      )}
      href={`/${nav.path}`}
    >
      {nav.name}
    </motion.a>
  );
};

export const Pill = ({ ...props }: Position) => (
  <motion.div className="absolute z-3 bg-black" animate={{ ...props }} />
);

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const [position, setPosition] = useState<Position>(initialPosition);
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
      <nav className="relative flex flex-col items-center justify-center">
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
                <NavItem
                  key={index}
                  index={index}
                  nav={nav}
                  setPosition={setPosition}
                  navVariants={navVariants}
                  pathname={pathname}
                />
              ))}
              <Pill {...position} />
            </div>
          )}
        </AnimatePresence>
      </nav>
    </Container>
  );
};

export default Navbar;
