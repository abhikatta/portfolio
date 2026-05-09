"use client";
import { experiences } from "@/constants/experiences";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Container from "./ui/container";
import CommentTag from "./ui/comment-tag";
import SectionTitle from "./ui/section-title";

function ExperienceRow({
  exp,
  index,
}: {
  exp: (typeof experiences)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 90%", "end 30%"],
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
          <motion.li
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className="font-display flex gap-3 text-base leading-relaxed"
          >
            <span className="text-accent shrink-0">→</span>
            <span>{p}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

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
