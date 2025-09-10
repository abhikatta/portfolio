"use client";
import { MotionDiv, RevealWord } from "@/components/common-motion-elements";
import Container from "@/components/container";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export const AboutFirstFold = () => {
  return (
    <section className="h-auto w-full">
      <TitleSection />
      <DescriptionSection />
      <DescriptionSection2 />
    </section>
  );
};

const TitleSection = () => {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end 0.7"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.7]);
  return (
    <Container
      ref={ref}
      className="flex h-screen w-full flex-col items-center justify-center"
    >
      <MotionDiv style={{ scale }} className="h-full w-full">
        <h2 className="font-boldonse relative top-0 left-0 text-[8vw] uppercase">
          <span className="absolute left-[6vw] text-[18vw]">A</span>
          <span className="absolute left-[18vw]">bhinay</span>{" "}
          <span className="absolute top-[13vw] left-0">K</span>
          <span className="hidden">a</span>
          <span className="absolute top-[13vw] left-[18vw]">tta</span>
        </h2>
      </MotionDiv>
      <div className="h-100">
        <p className="font-boldonse text-2xl">Scroll to read more below</p>
      </div>
    </Container>
  );
};

const text =
  "Hey. I'm a frontend developer with a backstory of a failed game dev dream, a brief backend fantasy, and a history of roasting frontend devs… before I became one. Now I spend most of my time turning Figma files into satisfying UIs, obsessing over tiny animations, and building weird side projects I never finish. Sometimes I even write tests voluntarily. I'm currently working at a startup, on a performance review platform, and client websites that actually look good and everything from UX overhauls to autosave logic, writing test cases, and trying not to break prod.<br/><br/> Before this, I messed around with React Native and Hugging Face to build an OCR app solo for a final year college project — which was <strong>supposed</strong> to be a group effort. Looking to level up, freelance a bit, and build things that feel really good to use.";

//   TODO: make this a reuable component/section
const DescriptionSection = () => {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const scrollRef = useRef<HTMLParagraphElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["70%", "100%", "70%"],
  );
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-5, 0, 5]);

  const { scrollYProgress: yTextReveal } = useScroll({
    target: scrollRef,
    offset: ["start 0.6", "start center"],
  });

  const words = text.split(" ");

  return (
    <MotionDiv
      ref={ref}
      className="flex min-h-screen w-full flex-col items-center justify-center bg-black"
      style={{ scale, rotate }}
    >
      <Container>
        <p
          ref={scrollRef}
          className="font-poppins text-lightBlue flex w-full flex-wrap text-lg 2xl:text-3xl 2xl:leading-12"
        >
          <RevealWord words={words} scrollYProgress={yTextReveal} />
        </p>
      </Container>
    </MotionDiv>
  );
};

const DescriptionSection2 = () => {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const scrollRef = useRef<HTMLParagraphElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5], ["70%", "100%"]);
  const rotate = useTransform(scrollYProgress, [0, 0.5], [-5, 0]);

  const { scrollYProgress: yTextReveal } = useScroll({
    target: scrollRef,
    offset: ["start 0.6", "start center"],
  });

  const words = text.split(" ");

  return (
    <MotionDiv
      ref={ref}
      className="flex min-h-screen w-full flex-col items-center justify-center bg-black"
      style={{ scale, rotate }}
    >
      <Container>
        <p
          ref={scrollRef}
          className="font-poppins text-lightBlue flex w-full flex-wrap text-lg 2xl:text-3xl 2xl:leading-12"
        >
          <RevealWord words={words} scrollYProgress={yTextReveal} />
        </p>
      </Container>
    </MotionDiv>
  );
};
