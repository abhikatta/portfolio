"use client";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "motion/react";
import { memo, useRef, useState } from "react";
import Container from "./ui/container";
import { initialPosition, NavItem, Pill } from "./ui/follow-pill";
import CommentTag from "./ui/comment-tag";
import SectionTitle from "./ui/section-title";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { Project, projects } from "@/constants/projects";

interface ProjectCardProps {
  p: Project;
  i: number;
}

const ProjectCard = memo(({ p, i }: ProjectCardProps) => {
  const [position, setPosition] = useState(initialPosition);
  const { isMobile } = useIsMobile();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const isEven = i % 2 === 0;

  const rotate = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    isEven ? [3, 0, -2] : [-3, 0, 2],
  );

  const yRange1Indexes = [0, 3, 4, 7];

  const yRange = () => {
    if (yRange1Indexes.includes(i) && !isMobile) {
      return [-80, 80];
    } else {
      return [80, -80];
    }
  };

  const y = useTransform(scrollYProgress, [0, 1], yRange());

  return (
    <motion.div
      ref={ref}
      style={{ rotate, y }}
      className={cn("group bg-paper/50", isEven ? "" : "lg:mt-32")}>
      <div className="border-2 border-ink shadow-[14px_14px_0_0_rgba(24,24,24)] group-hover:shadow-brutal-accent transition-shadow duration-300">
        <div className="border-b-2 border-ink flex justify-between items-center px-4 py-2  text-[10px] uppercase font-bold">
          <span className="text-accent">0{i + 1}</span>
          <span>{p.tag}</span>
          <div className="flex gap-1">
            <span className="size-2.5 rounded-full bg-accent" />
            <span className="size-2.5 rounded-full bg-ink/30" />
            <span className="size-2.5 rounded-full bg-ink/30" />
          </div>
        </div>
        <div className="aspect-5/3 bg-secondary relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, currentColor 0 1px, transparent 1px 12px)",
            }}
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-display text-[14vw] lg:text-7xl font-black tracking-tighter uppercase opacity-10">
              {p.title}
            </span>
          </div>
          <div className="absolute bottom-3 left-3  text-[10px] uppercase opacity-60">
            FIG. {i + 1}
          </div>
        </div>
        <div className="p-6 border-t-2 border-ink">
          <div className="flex flex-col md:flex-row justify-between items-baseline gap-3">
            <h3 className="font-display text-4xl font-black uppercase tracking-tighter leading-none">
              {p.title}
            </h3>
            <div className="flex gap-3 text-xs font-bold uppercase">
              {p.demo && (
                <NavItem
                  customOffset={2}
                  setPosition={setPosition}
                  openInNewTab
                  href={p.demo}
                  nav={{
                    href: p.demo,
                    label: "Demo ↗",
                  }}
                />
              )}
              {p.github && (
                <NavItem
                  customOffset={2}
                  nav={{
                    href: p.github,
                    label: "Code ↗",
                  }}
                  openInNewTab
                  setPosition={setPosition}
                />
              )}
              <Pill {...position} />
            </div>
          </div>
          <p className="mt-4 font-display text-base leading-snug opacity-80">
            {p.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {p.tags.map((t) => (
              <span
                key={t}
                className="text-[10px] uppercase border border-dashed border-ink px-2 py-0.5">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
});

ProjectCard.displayName = "ProjectCard";

const Projects = () => {
  return (
    <section>
      <Container wantSpacing id="projects">
        <CommentTag>projects</CommentTag>
        <SectionTitle>
          Personal
          <br />
          <span className="text-accent italic">experiments.</span>
        </SectionTitle>
        <div className="mt-30 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
