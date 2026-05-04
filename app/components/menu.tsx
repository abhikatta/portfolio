"use client";
import { HamburgerMenuIcon } from "@/components/ui/icons";
import { navLinks } from "@/constants/nav";
import { cn } from "@/lib/utils";
import { Position } from "@/types";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import Container from "./ui/container";
import { initialPosition, NavItem, Pill } from "./ui/follow-pill";

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
        "flex flex-col items-start justify-start w-full lg:hidden",
        isOpen && "fixed z-999 bg-paper",
      )}>
      <button onClick={toggleMenu} className="size-[40px] mt-8 z-5">
        <HamburgerMenuIcon isOpen={isOpen} />
      </button>
      <AnimatePresence mode="sync">
        {isOpen && (
          <motion.div className="left-0 top-0 h-screen w-full min-h-screen items-start px-4 justify-start gap-10 my-20 flex flex-col z-999 ">
            {navLinks.map((nav) => (
              <NavItem
                key={nav.href}
                nav={nav}
                setPosition={setPosition}
                className="text-3xl"
              />
            ))}
            <Pill {...position} />
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default Menu;
