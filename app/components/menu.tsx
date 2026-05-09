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
        "flex w-full flex-col items-start justify-start lg:hidden",
        isOpen && "bg-paper fixed z-999",
      )}
    >
      <div className="fixed z-99 mt-8 flex size-15 items-center justify-center rounded-sm p-4 backdrop-blur-sm">
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
            className="z-999 my-30 flex h-screen min-h-screen w-full flex-col items-start justify-start gap-10 px-4"
          >
            {navLinks.map((nav) => (
              <CustomLink
                key={nav.href}
                onClick={toggleMenu}
                href={nav.href}
                className="py-2 text-3xl"
              >
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
