"use client";
import { navLinks } from "@/constants/nav";
import { motion, useScroll, useTransform } from "motion/react";
import CustomLink from "./ui/link";
import Link from "next/link";
import Container from "./ui/container";

export function Navbar() {
  const { scrollYProgress } = useScroll();
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <Container className="py-0 lg:py-0 mt-0 lg:my-0 relative">
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed  top-0 w-full mx-auto border-ink border-b inset-x-0 bg-paper/90 z-50 backdrop-blur-sm">
        <div className="flex justify-between items-center px-4 sm:px-8 py-3">
          {/* TODO: remove this and replace  */}
          <Link
            href="#"
            className=" selection:bg-transparent selection:text-ink font-syne md:text-4xl lg:text-5xl text-base uppercase tracking-tighter">
            AK
            <span className="text-accent font-primary text-7xl tracking-tighter leading-0">
              .
            </span>
          </Link>
          <div className="hidden md:flex gap-6 text-xs font-bold uppercase">
            {navLinks.map((l) => (
              <CustomLink key={l.href} href={l.href} className="border-ink">
                {l.label}
              </CustomLink>
            ))}
          </div>
          <a
            href="mailto:abhinaykatta97@gmail.com"
            className="bg-ink text-paper px-3 sm:px-4 py-1.5 font-mono text-xs font-bold uppercase hover:bg-accent transition-colors">
            Hire ↗
          </a>
        </div>
        <motion.div
          style={{ width }}
          className="h-[3px] bg-accent origin-left"
        />
      </motion.nav>
    </Container>
  );
}
