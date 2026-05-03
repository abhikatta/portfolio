"use client";
import { HamburgerMenuIcon } from "@/components/ui/icons";
import { navLinks } from "@/constants/nav";
import { cn } from "@/lib/utils";
import { Position } from "@/types";
import { AnimatePresence } from "motion/react";
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
            {navLinks.map((nav) => (
              <NavItem key={nav.href} nav={nav} setPosition={setPosition} />
            ))}
            <Pill {...position} />
          </div>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default Menu;
