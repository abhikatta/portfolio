"use client";
import CommentTag from "@/components/ui/comment-tag";
import { mailTo, socials } from "@/constants/socials";
import { motion, useScroll, useTransform } from "motion/react";
import Link from "next/link";
import { useRef, useState } from "react";
import Container from "./ui/container";
import { initialPosition, NavItem, Pill } from "./ui/follow-pill";
import { useIsMobile } from "@/hooks/use-is-mobile";

const Footer = () => {
  const [position, setPosition] = useState(initialPosition);
  const { isMobile } = useIsMobile();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll();
  const scale = useTransform(
    scrollYProgress,
    [0.8, 1],
    isMobile ? [0.5, 1] : [0.7, 1],
  );
  const rot = useTransform(
    scrollYProgress,
    [0.8, 1],
    isMobile ? [-10, 0] : [-3, 0],
  );

  return (
    <section
      ref={ref}
      className="bg-ink relative flex h-full min-h-screen flex-col items-center justify-center"
    >
      <Container id="contact" wantSpacing className="scroll-mt-0 lg:py-0">
        <CommentTag className="text-paper">end of file</CommentTag>
        <motion.div
          style={{ scale, rotate: rot }}
          className="w-full origin-left"
        >
          <h2 className="font-syne text-paper w-fit text-2xl leading-[0.85] font-black tracking-tighter uppercase min-[390px]:text-3xl md:text-5xl xl:text-9xl">
            Let&apos;s
            <br />
            <span className="text-accent">make</span> something.
          </h2>
        </motion.div>

        <div className="mt-15 flex w-full flex-col items-end justify-between gap-6 lg:flex-row">
          <div className="flex flex-col items-start justify-center gap-4">
            <Link
              href={`mailto:${mailTo}`}
              className="text-paper hover:text-accent hover:decoration-accent text-base underline decoration-2 underline-offset-8 transition-colors md:text-lg"
            >
              {mailTo}
            </Link>
            <Link
              className="text-paper hover:text-accent hover:decoration-accent text-sm transition-colors lg:text-base"
              href="tel:+919182848361"
            >
              +91 9182848361
            </Link>
            <p className="text-paper mt-6 max-w-md text-xs opacity-70 lg:uppercase">
              Currently looking for new opportunities. Full-time role offers,
              project collaborations, or even a coffee chat are welcome!
            </p>
          </div>

          <div className="flex w-full flex-wrap items-center justify-start gap-4 md:justify-end">
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

        <p className="text-paper mt-10 text-xs opacity-70">
          Constructed with structural honesty · © 2026 AK
        </p>
      </Container>
    </section>
  );
};

export default Footer;
