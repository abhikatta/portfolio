"use client";
import CommentTag from "@/components/ui/comment-tag";
import { navLinks } from "@/constants/nav";
import { mailTo, socials } from "@/constants/socials";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { useRef, useState } from "react";
import Container from "./ui/container";
import { initialPosition, NavItem, Pill } from "./ui/follow-pill";

const Footer = () => {
  const [position, setPosition] = useState(initialPosition);

  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0.8, 1], [0.7, 1]);
  const rot = useTransform(scrollYProgress, [0.8, 1], [-3, 0]);

  return (
    <section
      ref={ref}
      className="bg-ink min-h-screen max-h-[1080px] text-paper border-b-2 border-ink relative flex flex-col items-center justify-end md:justify-center">
      <Container id="contact" wantSpacing>
        <CommentTag>end of file</CommentTag>

        <motion.div
          style={{ scale, rotate: rot }}
          className="origin-left w-full">
          <h2 className="font-syne text-2xl w-fit min-[390px]:text-3xl md:text-5xl xl:text-9xl leading-[0.85] font-black uppercase tracking-tighter">
            Let&apos;s
            <br />
            <span className="text-accent">make</span> something.
          </h2>
        </motion.div>

        <div className="mt-15 flex w-full flex-col lg:flex-row gap-6 items-end justify-between">
          <div className="col-span-12 lg:col-span-7">
            <Link
              href={`mailto:${mailTo}`}
              className="font-primary text-base md:text-lg underline underline-offset-8 decoration-2 hover:text-accent hover:decoration-accent transition-colors break-all">
              {mailTo}
            </Link>
            <p className="mt-6 text-xs uppercase opacity-70 max-w-md">
              Currently looking for new opportunities. Full-time role offers,
              project collaborations, or even a coffee chat are always welcome!
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-start md:justify-end w-full gap-4">
            {socials.map(({ label, href }) => (
              <NavItem
                openInNewTab
                key={label}
                nav={{
                  label: `${label} ↗`,
                  href: href,
                }}
                setPosition={setPosition}
                className="text-ink bg-paper border-paper"
              />
            ))}
            <Pill {...position} />
          </div>
        </div>

        <hr className="my-20" />
        <p className="text-xs opacity-70">
          Constructed with structural honesty · © 2026 AK
        </p>
      </Container>
    </section>
  );
};

export default Footer;
