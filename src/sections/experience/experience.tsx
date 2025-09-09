"use client";
import Container from "@/components/container";
import { useScroll, motion, useTransform, MotionValue } from "motion/react";
import { useRef } from "react";

const Paragraph = ({
  words,
  scrollYProgress,
}: {
  words: string[];
  scrollYProgress: MotionValue<number>;
}) => {
  return words.map((t, index) => {
    const start = index / words.length;
    const end = start + 1 / words.length;
    const range = [start, end];
    const opacity = useTransform(scrollYProgress, range, [0, 1]);

    return (
      <span className={"relative"} key={index}>
        &nbsp;
        <span
          className="absolute opacity-20"
          dangerouslySetInnerHTML={{ __html: t }}
        />
        <motion.span
          style={{
            opacity,
          }}
          dangerouslySetInnerHTML={{ __html: t }}
        ></motion.span>
      </span>
    );
  });
};

export const ExperienceFirstFold = () => {
  const ref = useRef<HTMLParagraphElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.6", "start 0.1"],
  });

  const paragraph1 =
    "Hey. I'm a frontend developer with a backstory of a failed game dev dream, a brief backend fantasy, and a history of roasting frontend devs… before I became one. Now I spend most of my time turning Figma files into satisfying UIs, obsessing over tiny animations, and building weird side projects I never finish. Sometimes I even write tests voluntarily. I'm currently working at a startup, on a performance review platform, and client websites that actually look good and everything from UX overhauls to autosave logic, writing test cases, and trying not to break prod.<br/><br/> Before this, I messed around with React Native and Hugging Face to build an OCR app solo for a final year college project — which was <strong>supposed</strong> to be a group effort. Looking to level up, freelance a bit, and build things that feel really good to use.";

  const words1 = paragraph1.split(" ");

  return (
    <Container className="relative py-[100vh]">
      <p
        className="font-poppins sticky top-0 flex flex-wrap text-4xl leading-16"
        ref={ref}
      >
        <Paragraph words={words1} scrollYProgress={scrollYProgress} />
      </p>
    </Container>
  );
};
