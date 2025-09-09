"use client";
import { navItems } from "@/data/navlist";
import { cn } from "@/utils/cn";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import Container from "./container";
import { AnimatePresence, motion, Variants } from "motion/react";
import { HamburgerMenuIcon } from "@/assets/icons/icons";
import { NavElement, Position } from "@/utils/types";
import useIs404 from "@/hooks/use-is-404";

const initialPosition: Position = {
  top: 0,
  opacity: 0,
  height: 0,
  width: 0,
};

const NavItem = ({ navVariants, index, nav, setPosition }: NavElement) => {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const pathname = usePathname();
  const getPropertiesForPill = () => {
    if (ref.current) {
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
    <div className="flex h-auto w-full flex-row items-start justify-between lg:items-center">
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
          "s:text-[34px] font-lemonMilk text-primaryBlue z-10 flex flex-row px-1.5 py-2 text-3xl whitespace-nowrap mix-blend-difference md:text-5xl lg:p-2 lg:text-7xl 2xl:text-8xl",
          pathname.replace("/", "") === nav.path ? "border" : "",
        )}
        href={`/${nav.path}`}
      >
        {nav.name}
      </motion.a>
      {nav.isWorkInProgress && (
        <p className="font-syne hidden text-xl text-black/75 xl:flex">
          {"["}Page is still work in progress{"]"}
        </p>
      )}
    </div>
  );
};

const Pill = ({ ...props }: Position) => (
  <motion.div className="absolute z-3 bg-black" animate={{ ...props }} />
);

// TODO: probably temporary, maybe change later
const WildernessNavItem = () => {
  return (
    <div className="font-lemonMilk text-primaryBlue z-10 flex flex-row border p-2 text-3xl whitespace-nowrap mix-blend-difference">
      Somewhere out in the wildneress of the internet
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const [position, setPosition] = useState<Position>(initialPosition);
  const { is404 } = useIs404();
  const navVariants: Variants = {
    initial: {
      x: -100,
      opacity: 0,
      y: -100,
      skewX: 45,
    },
    animate: (delayValue: number) => ({
      skewX: 0,
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
    <Container className="flex min-h-24 items-center justify-start 2xl:min-h-40">
      <button
        onClick={toggleMenu}
        onMouseEnter={toggleMenu}
        className={cn(
          "absolute z-999 size-[40px] cursor-pointer",
          is404 && "mt-8 2xl:mt-12",
        )}
      >
        <HamburgerMenuIcon isOpen={isOpen} />
      </button>
      <AnimatePresence mode="sync">
        {isOpen && (
          <div
            className={cn(
              "bg-accentBlue absolute top-0 left-0 z-100 flex h-screen w-full flex-col items-start justify-center px-6 lg:gap-y-6 2xl:gap-y-8 2xl:px-24",
              "backdrop-blur-2xl",
            )}
          >
            {navItems.map((nav, index) => (
              <NavItem
                key={index}
                index={index}
                nav={nav}
                setPosition={setPosition}
                navVariants={navVariants}
              />
            ))}
            {is404 && <WildernessNavItem />}
            <Pill {...position} />
          </div>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default Navbar;
