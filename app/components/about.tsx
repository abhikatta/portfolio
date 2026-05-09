"use client";
import { useScroll } from "motion/react";
import { useEffect, useRef } from "react";
import CommentTag from "./ui/comment-tag";
import Container from "./ui/container";
import RevealWord from "./ui/reveal-word";
import SectionTitle from "./ui/section-title";
// import { WORDS } from "@/constants/about";

const WORDS = `
Hi, I'm Abhinay Katta a
frontend-focused software engineer with a strong foundation in
modern web technologies. I currently work as an
SDE-1 at ScaleReal, building scalable frontend architectures. 
I specialize in performance optimization having successfully reduced bundle sizes by 
99% in legacy applications and led migrations to modern build systems and reusable 
UI components.
`;

const About = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (e) => console.log(e));
    return unsubscribe();
  }, [scrollYProgress]);
  return (
    <section
      ref={ref}
      className="flex h-full min-h-screen flex-col items-center justify-center"
    >
      <Container id="about" wantSpacing>
        <CommentTag>about</CommentTag>
        <SectionTitle>
          Engineer first,
          <br />
          <span className="text-accent italic">curious always.</span>
        </SectionTitle>
        <div className="text-foreground/90 mt-12 space-y-3 text-lg leading-relaxed">
          {/* <p>
            Hello, I&apos;m{" "}
            <strong className="font-medium">Abhinay Katta</strong>, a
            frontend-focused software engineer with a strong foundation in
            modern web technologies. I currently work as an{" "}
            <span className="text-accent text-base">SDE-1 at ScaleReal</span>,
            building scalable frontend architectures.
          </p>
          <p>
            I specialize in{" "}
            <span className="text-accent">performance optimization</span> —
            having successfully reduced bundle sizes by{" "}
            <strong className="font-medium">99%</strong> in legacy applications
            and led migrations to modern build systems and reusable UI
            components.
          </p>
          <p>
            I started my journey with game development and Python, but quickly
            discovered my passion for building fast, intuitive, and
            high-performing web experiences and mobile applications.
          </p>
          <p>
            My current stack revolves around React, Next.js, TypeScript, paired
            with robust state management tools like Redux, TanStack Query, and
            Zustand.
          </p> */}

          {WORDS.split(" ").map((word, index) => (
            <RevealWord
              textLength={WORDS.length}
              key={index}
              index={index}
              scrollYProgress={scrollYProgress}
              word={{ word, className: "text-lg" }}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
export default About;
