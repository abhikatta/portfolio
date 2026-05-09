"use client";
import { cn } from "@/lib/utils";
import { MotionValue, motion, useTransform } from "motion/react";
import { memo } from "react";

interface RevealWordProps {
  textLength: number;
  scrollYProgress: MotionValue<number>;
  index: number;
  word: { word: string; className?: string };
  isFirstWordOfParagraph: boolean;
}

const RevealWord = memo(
  ({
    scrollYProgress,
    textLength,
    index,
    word,
    isFirstWordOfParagraph,
  }: RevealWordProps) => {
    const start = index / textLength;
    const end = start + 1 / textLength;
    const range = [start, end];
    const opacity = useTransform(scrollYProgress, range, [0.15, 1]);
    return (
      <>
        {isFirstWordOfParagraph && <div className="mt-6 w-full" />}
        <motion.p
          style={{ opacity }}
          className={cn("mr-3 inline-block", word.className)}
        >
          {word.word}
        </motion.p>
      </>
    );
  },
);
RevealWord.displayName = "RevealWord";

export default RevealWord;
