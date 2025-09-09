"use client";
import { RevealWord } from "@/components/common-motion-elements";
import Container from "@/components/container";
import { useScroll } from "motion/react";
import { useRef } from "react";

export const AboutFirstFold = () => {
  const ref = useRef<HTMLParagraphElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.6", "start 0.1"],
  });

  const text =
    "Hey. I'm a frontend developer with a backstory of a failed game dev dream, a brief backend fantasy, and a history of roasting frontend devs… before I became one. Now I spend most of my time turning Figma files into satisfying UIs, obsessing over tiny animations, and building weird side projects I never finish. Sometimes I even write tests voluntarily. I'm currently working at a startup, on a performance review platform, and client websites that actually look good and everything from UX overhauls to autosave logic, writing test cases, and trying not to break prod.<br/><br/> Before this, I messed around with React Native and Hugging Face to build an OCR app solo for a final year college project — which was <strong>supposed</strong> to be a group effort. Looking to level up, freelance a bit, and build things that feel really good to use.";

  const words = text.split(" ");

  return (
    <Container className="relative my-[50vh]">
      <p
        className="font-poppins sticky top-0 flex flex-wrap text-4xl leading-16"
        ref={ref}
      >
        <RevealWord words={words} scrollYProgress={scrollYProgress} />
      </p>
    </Container>
  );
};
