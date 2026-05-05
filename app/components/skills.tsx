"use client";

import { useIsMobile } from "@/hooks/use-is-mobile";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { memo, useRef } from "react";
import Container from "./ui/container";
import { CurveText } from "./ui/curved-text-parallax";
import CommentTag from "./ui/comment-tag";
import SectionTitle from "./ui/section-title";
import { cn } from "@/lib/utils";

type Skills = Array<{ label: string; weight: "BLACK" | "ITALIC" }>;

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Django",
  "TailwindCSS",
  "Redux",
  "Zustand",
  "TanStack Query",
  "Zod",
];

const skills2 = [
  "shadcn/ui",
  "Mantine",
  "SCSS",
  "Jest",
  "Docker",
  "Vitest",
  "FastAPI",
  "Motion",
  "Strapi",
];

const SkillMarqueeStrip = memo(
  ({ skills, x }: { skills: string[]; x: MotionValue<string> }) => {
    return (
      <motion.div
        style={{ x }}
        className="flex gap-4 whitespace-nowrap mt-4 will-change-transform">
        {skills.map((s, i) => (
          <span
            key={s}
            className={cn(
              "font-primary text-[12vw] lg:text-[8vw] leading-none uppercase tracking-tighter",
              i % 2 === 0
                ? "text-ink font-black"
                : "text-accent font-thin italic",
            )}>
            {s}
            <span className="text-stamp mx-4">·</span>
          </span>
        ))}
      </motion.div>
    );
  },
);

SkillMarqueeStrip.displayName = "SkillMarqueeStrip";

const SkillLabels = memo(({ skills }: { skills: string[] }) =>
  skills.map((s) => (
    <motion.span
      key={s}
      whileHover={{
        y: -3,
      }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className="text-xs uppercase border-2 border-ink px-3 py-1.5 text-ink bg-paper">
      {s}
    </motion.span>
  )),
);

SkillLabels.displayName = "SkillLabels";

const Skills = () => {
  const ref = useRef(null);
  const { isMobile } = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.3", "end end"],
  });

  const row1X = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["120vw", "-40vw"] : ["100vw", "-290vw"],
  );

  const row2X = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["-120vw", "40vw"] : ["-320vw", "0vw"],
  );
  return (
    <section ref={ref} className=" min-h-[400vh] ">
      <Container
        wantSpacing
        id="skills"
        className="sticky top-[76px] min-h-screen h-full overflow-hidden">
        <CurveText
          svgTextItemsCount={20}
          svgTextColor="black"
          scrollYProgress={scrollYProgress}
          className="top-0 text-2xl "
          svgTextDisplacement={13}
          svgTextClassName="text-5xl"
          {...(isMobile ? { height: "400" } : {})}
          topLine=" stack I use "
          svgPathHref="second-fold"
          svgPath={
            <path
              id="second-fold"
              d="M0.5 1C10.1721 64.0532 25.5 83.5 77.5 119C165 164 228.139 155.902 312 94.5C416.907 35.3546 470.684 31.98 560.5 62C654.693 110.037 713.443 130.861 826 160C969.713 174.52 1049.29 173.44 1193 160C1341.5 138.5 1395.14 99.8279 1538 94.5C1693.63 96.0904 1775.58 103.569 1912 129"
              stroke="none"
            />
          }
        />

        <Container wantSpacing className="overflow-hidden relative pt-20">
          <CommentTag>skills</CommentTag>
          <SectionTitle>
            The stack, <br />
            <span className="text-accent italic">opinionated.</span>
          </SectionTitle>

          <SkillMarqueeStrip x={row1X} skills={skills} />
          <SkillMarqueeStrip x={row2X} skills={skills2} />

          <div className="w-full mx-auto mt-12 flex flex-wrap items-center md:justify-between gap-2">
            <SkillLabels skills={skills} />
            <SkillLabels skills={skills2} />
          </div>
        </Container>
      </Container>
    </section>
  );
};

export default Skills;
