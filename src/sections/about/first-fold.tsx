"use client";
import { MotionDiv, RevealWord } from "@/components/common-motion-elements";
import Container from "@/components/container";
import { MotionValue, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export const AboutFirstFold = () => {
  const ref = useRef<HTMLParagraphElement | null>(null);

  const { scrollYProgress: yTextReveal } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={ref} className="relative h-[200vh] w-full">
      <DescriptionSection scrollYProgress={yTextReveal} />
    </section>
  );
};

export const DescriptionSection = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const scrollRef = useRef<HTMLParagraphElement | null>(null);

  const { scrollYProgress: yTextReveal } = useScroll({
    target: scrollRef,
    offset: ["start 0.6", "start 0.4"],
  });

  const text =
    "Hey. I'm a frontend developer with a backstory of a failed game dev dream, a brief backend fantasy, and a history of roasting frontend devs… before I became one. Now I spend most of my time turning Figma files into satisfying UIs, obsessing over tiny animations, and building weird side projects I never finish. Sometimes I even write tests voluntarily. I'm currently working at a startup, on a performance review platform, and client websites that actually look good and everything from UX overhauls to autosave logic, writing test cases, and trying not to break prod.<br/><br/> Before this, I messed around with React Native and Hugging Face to build an OCR app solo for a final year college project — which was <strong>supposed</strong> to be a group effort. Looking to level up, freelance a bit, and build things that feel really good to use.";

  const words = text.split(" ");

  const scale = useTransform(scrollYProgress, [0, 1], ["100%", "70%"]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -3]);

  return (
    <MotionDiv
      className="bg-accentYellow sticky top-0 mt-[100vh] flex h-screen w-full flex-col items-center justify-center"
      style={{ scale, rotate }}
    >
      <Container>
        <p
          ref={scrollRef}
          className="font-poppins flex w-full flex-wrap text-lg 2xl:text-3xl 2xl:leading-12"
        >
          <RevealWord words={words} scrollYProgress={yTextReveal} />
        </p>
      </Container>
    </MotionDiv>
  );
};
