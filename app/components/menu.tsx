"use client";
import { HamburgerMenuIcon } from "@/components/ui/icons";
import { navLinks } from "@/constants/nav";
import { socials } from "@/constants/socials";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
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
    <section>
      <div className="fixed z-99 mt-4 ml-4 flex size-13 items-center justify-center rounded-sm p-3 backdrop-blur-sm lg:hidden">
        <button onClick={toggleMenu} className="size-full">
          <HamburgerMenuIcon isOpen={isOpen} />
        </button>
      </div>
      <AnimatePresence mode="sync">
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
            className={cn(
              "bg-paper flex h-full w-fit flex-col items-start gap-10 px-4 lg:hidden",
              isOpen && "fixed z-10 h-screen w-full",
            )}
          >
            <div className="flex flex-1 flex-col items-start justify-center gap-4">
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
            </div>

            <div className="mb-[5vh] flex items-start justify-center gap-3">
              {socials.map((link) => (
                <CustomLink
                  key={link.href}
                  onClick={toggleMenu}
                  href={link.href}
                  className="py-2 text-sm"
                >
                  {link.label} ↗
                </CustomLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Menu;
