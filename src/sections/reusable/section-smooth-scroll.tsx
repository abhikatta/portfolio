"use client";
import { CurveText } from "@/components/animated/curved-text-parallax";
import { RevealWord } from "@/components/animated/reveal-words";
import { CurveSvgProps } from "@/components/animated/types";
import { MotionDiv } from "@/components/common-motion-elements";
import Container from "@/components/container";
import { cn } from "@/utils/cn";
import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export const SectionSmoothScroll = ({
  ...props
}: {
  textProps: {
    text: string;
    className?: string;
    textClassName?: string;
  };
  curveTextProps: CurveSvgProps & { hasCurveText: boolean };
}) => {
  const { curveTextProps, textProps } = props;

  const { hasCurveText, ...otherCurveTextProps } = curveTextProps;
  const { text, textClassName, className } = textProps;

  const words = text.split(" ");

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
    offset: ["start 0.6", "end 0.6"],
  });

  return (
    <MotionDiv
      ref={ref}
      className={cn(
        "flex min-h-screen w-full flex-col items-center justify-center bg-black",
        className,
      )}
      style={{ scale, rotate }}
    >
      {hasCurveText && <CurveText {...otherCurveTextProps} />}
      <Container>
        <p
          ref={scrollRef}
          className={cn(
            "font-poppins text-lightBlue flex w-full flex-wrap text-lg 2xl:text-3xl 2xl:leading-12",
            textClassName,
          )}
        >
          <RevealWord words={words} scrollYProgress={yTextReveal} />
        </p>
      </Container>
    </MotionDiv>
  );
};
