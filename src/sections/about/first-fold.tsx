"use client";

import Container from "@/components/container";
import { SectionSmoothScroll } from "../reusable/section-smooth-scroll";
import { useRef } from "react";
import { useScroll } from "motion/react";
import { RevealWord } from "@/components/animated/reveal-words";
import { CurveText } from "@/components/animated/curved-text-parallax";

const AboutFirstFold = () => {
  const topLine = "Why do I work as a frontend developer?";
  const text =
    "I've always been a huge gamer, which is what got me into coding. I started out learning game development with Unity, then got pulled into the world of AI and machine learning for a while. I eventually found that what I really enjoy is building things people can see and use, which is how I landed in frontend development with React and Next.js.";
  const scrollRef = useRef<HTMLParagraphElement | null>(null);

  const words = text.split(" ");

  const { scrollYProgress: yTextReveal } = useScroll({
    target: scrollRef,
    offset: ["end end", "start center"],
  });

  return (
    <SectionSmoothScroll className="relative">
      <CurveText
        svgTextClassName="text-boldonse text-4xl"
        svgTextDisplacement={25}
        className="absolute top-0"
        topLine={topLine}
      />
      <Container ref={scrollRef}>
        <p className="font-poppins text-lightBlue flex h-full w-full flex-wrap text-lg 2xl:text-3xl 2xl:leading-12">
          <RevealWord words={words} scrollYProgress={yTextReveal} />
        </p>
      </Container>
      ;
    </SectionSmoothScroll>
  );
};

export default AboutFirstFold;
