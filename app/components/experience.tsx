"use client";
import { type Experience, experiences } from "@/constants/experiences";
import { motion, MotionValue, useScroll, useTransform } from "motion/react";
import { memo, useRef } from "react";
import Container from "./ui/container";
import CommentTag from "./ui/comment-tag";
import SectionTitle from "./ui/section-title";

interface ExperienceLiProps {
  i: number;
  p: Experience["points"][0];
  scrollYProgress: MotionValue<number>;
}

interface ExperienceRowProps {
  exp: Experience;
  index: number;
}

const ExperienceLi = memo(({ i, p, scrollYProgress }: ExperienceLiProps) => {
  const opacity = useTransform(scrollYProgress, [0, 0.3 + i * 0.05], [0, 1]);
  const x = useTransform(scrollYProgress, [0, 0.2 + i * 0.1], [-120, 0]);
  return (
    <motion.li
      style={{ x, opacity }}
      transition={{ delay: i * 0.05 }}
      className="font-display flex gap-3 text-base leading-relaxed"
    >
      <span className="text-accent shrink-0">→</span>
      <span>{p}</span>
    </motion.li>
  );
});
ExperienceLi.displayName = "ExperienceLi";

const ExperienceRow = memo(({ exp, index }: ExperienceRowProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 70%", "end 30%"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0.25, 1, 1]);
  const y = useTransform(scrollYProgress, [0, 0.5], [60, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className="border-ink group grid w-full grid-cols-12 gap-4 border-t-2 py-10 first:border-t-0"
    >
      <div className="col-span-12 text-xs font-bold uppercase opacity-60 sm:col-span-2">
        0{index + 1}
      </div>
      <div className="col-span-12 sm:col-span-3">
        <div className="font-display text-3xl leading-none font-black uppercase">
          {exp.company}
        </div>
        <div className="mt-2 text-xs uppercase">{exp.period}</div>
        <div className="font-display text-accent mt-1 italic">{exp.title}</div>
      </div>
      <ul className="col-span-12 space-y-3 sm:col-span-7">
        {exp.points.map((p, i) => (
          <ExperienceLi scrollYProgress={scrollYProgress} key={i} p={p} i={i} />
        ))}
      </ul>
    </motion.div>
  );
});
ExperienceRow.displayName = "ExperienceRow";

const Experience = () => {
  return (
    <section className="h-full min-h-screen">
      <Container id="experience" wantSpacing className=" ">
        <CommentTag>timeline</CommentTag>
        <SectionTitle>
          Build
          <span className="text-accent italic"> log.</span>
        </SectionTitle>
        <div className="mt-12">
          {experiences.map((exp, i) => (
            <ExperienceRow key={i} exp={exp} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Experience;
