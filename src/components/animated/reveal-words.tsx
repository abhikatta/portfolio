"use client";
import { cn } from "@/utils/cn";
import { MotionValue, motion, useTransform } from "motion/react";

export const RevealWord = ({
  words,
  scrollYProgress,
  behindTextClassName,
}: {
  words: string[];
  scrollYProgress: MotionValue<number>;
  behindTextClassName?: string;
}) => {
  return words.map((t, index) => {
    const start = index / words.length;
    const end = start + 1 / words.length;
    const range = [start, end];
    const opacity = useTransform(scrollYProgress, range, [0.3, 1]);

    return (
      <span className="relative" key={index}>
        &nbsp;
        <span
          aria-hidden="true"
          className={cn("absolute opacity-[1%]", behindTextClassName)}
        >
          {t}
        </span>
        <motion.span
          className="!text-black"
          style={{
            opacity,
          }}
        >
          {t}
        </motion.span>
      </span>
    );
  });
};
