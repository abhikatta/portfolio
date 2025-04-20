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
    "var(--color-bloodRed)",
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
      scale: "110%",
      transition: {
        repeat: Infinity,
        duration: ALL_COLORS.length * 2,
        delay: delay * 0.4,
      },
    }),
  };
  const getColor = () =>
    ALL_COLORS[Math.floor(Math.random() * ALL_COLORS.length)];

  return (
    <MotionDiv className="grid rotate-45 grid-cols-10 gap-4">
      {Array.from({ length: GRID_SIZE }).map((_, indexi) =>
        Array.from({ length: GRID_SIZE }).map((_, indexj) => (
          <MotionDiv
            variants={indexVariant}
            custom={Math.abs(indexi - indexj)}
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
