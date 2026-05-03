"use client";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, Variants } from "motion/react";
import { HamburgerMenuIcon } from "@/components/ui/icons";
import { NavElement, Position } from "@/types";
import Container from "./ui/container";
import { cn } from "@/lib/utils";
import { navLinks } from "@/constants/nav";
import CustomLink from "./ui/link";

const initialPosition: Position = {
  top: 0,
  opacity: 0,
  height: 0,
  width: 0,
  left: 0,
};

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

const NavItem = ({ navVariants, index, nav, setPosition }: NavElement) => {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const pathname = usePathname();
  const getPropertiesForPill = () => {
    if (ref.current) {
      const { width, height } = ref.current.getBoundingClientRect();
      const { offsetTop, offsetLeft } = ref.current;
      setPosition({
        top: offsetTop,
        left: offsetLeft,
        width,
        height,
        opacity: 1,
      });
    }
  };

  const hidePill = () => setPosition((prev) => ({ ...prev, opacity: 0 }));

  return (
    <div className="flex h-auto w-full flex-row items-start justify-between lg:items-center">
      <CustomLink
        ref={ref}
        initial="initial"
        animate="animate"
        variants={navVariants}
        onMouseEnter={getPropertiesForPill}
        onMouseLeave={hidePill}
        exit="exit"
        custom={index}
        className={cn(
          "z-10 flex flex-row px-1.5 py-2 text-ink text-3xl whitespace-nowrap mix-blend-difference lg:p-2",
          pathname.replace("/", "") === nav.href ? "border" : "",
        )}
        href={nav.href}>
        {nav.label}
      </CustomLink>
    </div>
  );
};

const Pill = ({ ...props }: Position) => (
  <motion.div className="absolute z-3 bg-accent" animate={{ ...props }} />
);

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  const [position, setPosition] = useState<Position>(initialPosition);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <Container
      className={cn(
        "flex lg:hidden",
        "items-center justify-start",
        !isOpen && "relative",
      )}>
      <button onClick={toggleMenu} className="size-[40px]">
        <HamburgerMenuIcon isOpen={isOpen} />
      </button>
      <AnimatePresence mode="sync">
        {isOpen && (
          <div>
            {navLinks.map((nav, index) => (
              <NavItem
                key={index}
                index={index}
                nav={nav}
                setPosition={setPosition}
                navVariants={navVariants}
              />
            ))}
            <Pill {...position} />
          </div>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default Menu;
