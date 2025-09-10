"use client";
import { MotionDiv } from "@/components/common-motion-elements";
import { cn } from "@/utils/cn";
import { HTMLMotionProps, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export const SectionSmoothScroll = ({
  ...props
}: Omit<HTMLMotionProps<"div">, "ref">) => {
  const ref = useRef<HTMLParagraphElement | null>(null);

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

  return (
    <MotionDiv
      ref={ref}
      {...props}
      className={cn(
        "flex min-h-screen w-full flex-col items-center justify-center bg-black",
        props.className,
      )}
      style={{ scale, rotate, ...props.style }}
    >
      {props.children}
    </MotionDiv>
  );
};
