"use client";
import { mailTo, socials } from "@/constants/socials";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Container from "./ui/container";
import Link from "next/link";
import CustomLink from "./ui/link";
import { navLinks } from "@/constants/nav";
import CommentTag from "@/components/ui/comment-tag";

const Footer = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.85, 1, 1.05]);
  const rot = useTransform(scrollYProgress, [0, 1], [-2, 2]);

  return (
    <section
      ref={ref}
      id={navLinks.find((i) => i.label.toLowerCase() === "contact")?.href}
      className="bg-ink h-screen max-h-[1080px] text-paper border-b-2 border-ink relative overflow-hidden">
      <Container>
        <CommentTag>end of file</CommentTag>

        <motion.div style={{ scale, rotate: rot }} className="origin-left">
          <h2 className="font-syne text-2xl min-[390px]:text-5xl md:text-6xl xl:text-9xl leading-[0.85] font-black uppercase tracking-tighter">
            Let&apos;s
            <br />
            <span className="text-accent">make</span> something.
          </h2>
        </motion.div>

        <div className="mt-15 flex w-full flex-col lg:flex-row gap-6 items-end justify-between">
          <div className="col-span-12 lg:col-span-7">
            <Link
              href={`mailto:${mailTo}`}
              className="font-primary text-2xl sm:text-4xl underline underline-offset-8 decoration-2 hover:text-accent hover:decoration-accent transition-colors break-all">
              {mailTo}
            </Link>
            <p className="mt-6 font-mono text-xs uppercase opacity-60 max-w-md">
              Currently looking for new opportunities. Full-time role offers,
              project collaborations, or even a coffee chat are always `welcome!
            </p>
          </div>

          <div className="col-span-12 lg:col-span-5 flex flex-wrap gap-3">
            {socials.map(({ label, href }) => (
              <CustomLink key={label} href={href}>
                {label} ↗
              </CustomLink>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Footer;
