"use client";
import { MotionValue, motion, useTransform } from "motion/react";

export const RevealWord = ({
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
    const opacity = useTransform(scrollYProgress, range, [0.3, 1]);

    return (
      <span className="relative" key={index}>
        &nbsp;
        <span aria-hidden="true" className="absolute opacity-20">
          {t}
        </span>
        <motion.span
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
