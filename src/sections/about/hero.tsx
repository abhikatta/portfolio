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
