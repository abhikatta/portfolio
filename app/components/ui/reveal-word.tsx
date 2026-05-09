"use client";
import { cn } from "@/lib/utils";
import { MotionValue, motion, useTransform } from "motion/react";
import { memo } from "react";

// <span className="relative" key={index}>
//   &nbsp;
//   <span
//     aria-hidden="true"
//     className={cn("absolute opacity-1", behindTextClassName)}>
//     {t}
//   </span>
//   <motion.span
//     className="text-ink"
//     style={{
//       opacity,
//     }}>
//     {t}
//   </motion.span>
// </span>

const RevealWord = memo(
  ({
    scrollYProgress,
    textLength,
    index,
    word,
  }: {
    textLength: number;
    scrollYProgress: MotionValue<number>;
    index: number;
    word: { word: string; className?: string };
  }) => {
    const start = index / textLength;
    const end = start + 1 / textLength;
    const range = [start, end];
    const opacity = useTransform(scrollYProgress, range, [0.15, 1]);
    return (
      <motion.p
        style={{ opacity }}
        className={cn("mr-3 inline-block text-3xl", word.className)}
      >
        {word.word}
      </motion.p>
    );
  },
);
RevealWord.displayName = "RevealWord";

export default RevealWord;
