"use client";
import { MotionDiv } from "@/components/common-motion-elements";
import Container from "@/components/container";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export const AboutHero = () => {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "end 0.7"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.7]);
  const scrollMoreScale = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scrollMoreY = useTransform(scrollYProgress, [0, 1], ["10%", "-100%"]);
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
      <MotionDiv
        style={{ scale: scrollMoreScale, y: scrollMoreY }}
        className="h-100"
      >
        <p className="font-boldonse rounded-3xl border-2 border-dotted px-3 py-2 text-xs">
          Scroll to read more{" "}
        </p>
      </MotionDiv>
    </Container>
  );
};
