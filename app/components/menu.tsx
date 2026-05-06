"use client";
import { HamburgerMenuIcon } from "@/components/ui/icons";
import { navLinks } from "@/constants/nav";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import Container from "./ui/container";
import CustomLink from "./ui/link";

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

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
      <div className="backdrop-blur-sm size-15 mt-8 z-99 p-4 fixed rounded-sm flex items-center justify-center">
        <button onClick={toggleMenu} className="size-full">
          <HamburgerMenuIcon isOpen={isOpen} />
        </button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            exit={{
              opacity: 0,
            }}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            className="h-screen w-full min-h-screen items-start px-4 justify-start gap-10 my-30 flex flex-col z-999 ">
            {navLinks.map((nav) => (
              <CustomLink
                key={nav.href}
                onClick={toggleMenu}
                href={nav.href}
                className="text-3xl py-2">
                {nav.label}
              </CustomLink>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default Menu;
