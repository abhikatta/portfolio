"use client";
import { initialPosition, NavItem, Pill } from "@/components/ui/follow-pill";
import { navLinks } from "@/constants/nav";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import Menu from "./menu";
import Container from "./ui/container";

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [position, setPosition] = useState(initialPosition);
  return (
    <>
      <Container className="hidden lg:flex">
        <motion.nav
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="fixed top-0 w-full mx-auto border-ink border-b inset-x-0 bg-paper/90 z-50 backdrop-blur-sm">
          <AnimatePresence mode="sync">
            <div className="md:flex hidden items-center justify-center w-full gap-6 px-4 sm:px-8 py-3">
              <Link
                href="/"
                className="selection:bg-transparent text-ink selection:text-ink font-syne md:text-4xl lg:text-5xl text-base uppercase tracking-tighter">
                AK
                <span className="text-accent text-8xl leading-0">.</span>
              </Link>
              <div className="flex flex-row items-center justify-center gap-6 mx-auto">
                {navLinks.map((l) => (
                  <NavItem
                    setPosition={setPosition}
                    nav={l}
                    key={l.href}
                    className="text-base uppercase font-bold border border-paper px-5 py-3 bg-ink text-paper"
                  />
                ))}
              </div>
              <NavItem
                key={"hire"}
                openInNewTab
                nav={{
                  href: "mailto:abhinaykatta97@gmail.com",
                  label: "Hire ↗",
                }}
                className="text-base uppercase font-bold border border-paper px-5 py-3 bg-ink text-paper"
                setPosition={setPosition}
              />
            </div>
            <Pill key={"pill"} {...position} />
          </AnimatePresence>
          <motion.div
            style={{ width }}
            className="h-[3px] bg-accent origin-left"
          />
        </motion.nav>
      </Container>

      <Menu />
    </>
  );
};

export default Navbar;
