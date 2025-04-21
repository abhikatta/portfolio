"use client";

import { cn } from "@/utils/cn";
import { MotionDiv } from "@/utils/variant-props-spread";
import { Variants } from "motion/react";

const RightHomeInteraction = () => {
  const ALL_COLORS = [
    "var(--color-darkBlue)",
    "var(--color-primaryYellow)",
    "var(--color-primaryBlue)",
    "var(--color-lightBlue)",
    "var(--color-accentYellow)",
    "var(--color-black)",
    "var(--color-deepRed)",
    "var(--color-accentBlue)",
    "var(--color-viltrumRed)",
    "var(--color-gray)",
    "var(--color-darkGray)",
    "var(--color-white)",
    "var(--color-sinisterYellow)",
  ];

  const GRID_SIZE = 10;

  const indexVariant: Variants = {
    initial: {
      scale: "90%",
      backgroundColor: ALL_COLORS[1],
    },
    animate: (delay: number) => ({
      backgroundColor: ALL_COLORS,
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 180, 180, 0],
      borderRadius: ["0%", "0%", "50%", "50%", "0%"],
      transition: {
        duration: 2,
        delay: delay * 0.4,
        ease: "easeInOut",
        times: [0, 0.2, 0.5, 0.8, 1],
        repeat: Infinity,
        repeatDelay: 1,
      },
    }),
  };
  const getColor = () =>
    ALL_COLORS[Math.floor(Math.random() * ALL_COLORS.length)];
  // TODO: make this stagger like a ripple effect
  return (
    <MotionDiv className="animate-slow-spin grid grid-cols-10 gap-4">
      {Array.from({ length: GRID_SIZE }).map((_, indexi) =>
        Array.from({ length: GRID_SIZE }).map((_, indexj) => (
          <MotionDiv
            variants={indexVariant}
            custom={Math.abs((indexi - indexj) / 2)}
            style={{ backgroundColor: getColor() }}
            className={cn("size-5 rounded-full")}
            key={`${indexi}-${indexj}`}
          />
        )),
      )}
    </MotionDiv>
  );
};

export default RightHomeInteraction;
