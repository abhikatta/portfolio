"use client";
import { initialPosition, NavItem, Pill } from "@/components/ui/follow-pill";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";
import { navLinks } from "@/constants/nav";
import { cn } from "@/lib/utils";
import Menu from "./menu";
import Container from "./ui/container";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [position, setPosition] = useState(initialPosition);
  const [fullyScrolled, setFullyScrolled] = useState(false);

  useEffect(() => {
    width.on("change", (val) => {
      const percentage = parseInt(val.split("%")[0].toString());
      if (percentage >= 97) {
        setFullyScrolled(true);
      } else setFullyScrolled(false);
    });
  }, [width]);

  const navItemClassName = cn(
    "text-base uppercase font-bold border border-paper px-5 py-3 bg-ink text-paper",
    fullyScrolled ? "text-ink bg-paper" : "text-paper bg-ink",
  );

  return (
    <>
      <Container className="hidden lg:flex">
        <motion.nav
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={cn(
            "border-ink fixed inset-x-0 top-0 z-50 mx-auto w-full border-b backdrop-blur-sm transition-colors duration-300 ease-in-out",
            fullyScrolled ? "bg-ink/80" : "bg-paper/90",
          )}
        >
          <AnimatePresence mode="sync">
            <div className="hidden w-full items-center justify-center gap-6 px-4 py-3 sm:px-8 md:flex">
              <a
                href="#home"
                className={cn(
                  "font-syne text-base tracking-tighter uppercase selection:bg-transparent md:text-4xl lg:text-5xl",
                  fullyScrolled ? "text-paper" : "text-ink",
                )}
              >
                AK
                <span className="text-accent text-8xl leading-0">.</span>
              </a>
              <div className="mx-auto flex flex-row items-center justify-center gap-6">
                {navLinks.map((l) => (
                  <NavItem
                    setPosition={setPosition}
                    nav={l}
                    key={l.href}
                    className={navItemClassName}
                  />
                ))}
              </div>
              <NavItem
                key={"hire"}
                openInNewTab
                nav={{
                  href: "mailto:abhinaykatta97@gmail.com",
                  label: "Send a Message ↗",
                }}
                className={navItemClassName}
                setPosition={setPosition}
              />
            </div>
            <Pill key={"pill"} {...position} />
          </AnimatePresence>
          <motion.div
            style={{ width }}
            className="bg-accent h-[3px] origin-left"
          />
        </motion.nav>
      </Container>

      <Menu />
    </>
  );
};

export default Navbar;
