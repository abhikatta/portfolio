"use client";

import { cn } from "@/utils/cn";
import { MotionDiv } from "@/utils/variant-props-spread";
import { animate, motion } from "motion/react";
import { memo, useState } from "react";

const idConstructor = (i: number, j: number) => `#${i}-${j}`;

// const getColor = () =>
//   ALL_COLORS[Math.floor(Math.random() * ALL_COLORS.length)];

// const ALL_COLORS = [
//   "var(--color-primaryYellow)",
//   "var(--color-primaryBlue)",
//   "var(--color-lightBlue)",
//   "var(--color-accentYellow)",
//   "var(--color-accentBlue)",
//   "var(--color-viltrumRed)",
//   "var(--color-white)",
//   "var(--color-sinisterYellow)",
// ];

const GRID_SIZE = 10;

const RightHomeInteraction = memo(() => {
  const [values, setValues] = useState({
    i: 0,
    j: 0,
  });

  const animateGrid = (i: number, j: number, type: "leave" | "enter") => {
    setValues({ i, j });
    const directions = [
      { dx: 0, dy: -1 }, // Up
      { dx: 0, dy: 1 }, // Down
      { dx: -1, dy: 0 }, // Left
      { dx: 1, dy: 0 }, // Right

      { dx: 1, dy: 1 },
      { dx: 1, dy: -1 },
      { dx: -1, dy: -1 },
      { dx: -1, dy: 1 },
    ];

    // Animate the center cell
    const center = document.getElementById(idConstructor(i, j));
    if (center) {
      animate(center, {
        backgroundColor: type === "enter" ? "transparent" : "",
        x: 0,
        y: 0,
      });
    }

    // Animate surrounding elements
    directions.forEach(({ dx, dy }) => {
      const x = i + dx;
      const y = j + dy;
      const el = document.getElementById(idConstructor(x, y));
      if (!el) return;

      animate(
        el,
        {
          x: type === "enter" ? dx * 20 : 0,
          y: type === "enter" ? dy * 20 : 0,
        },
        {
          duration: 0.1,
        },
      );
    });
  };

  // TODO: make this stagger like a ripple effect or something like the particles js thing that pushes away neighboring elements
  return (
    <>
      <MotionDiv className="relative z-10 grid grid-cols-10">
        {Array.from({ length: GRID_SIZE }).map((_, indexj) =>
          Array.from({ length: GRID_SIZE }).map((_, indexi) => (
            <motion.div
              id={idConstructor(indexi, indexj)}
              onMouseOver={() => animateGrid(indexi, indexj, "enter")}
              onMouseLeave={() => animateGrid(indexi, indexj, "leave")}
              className={cn(
                "bg-accentYellow size-6 cursor-pointer rounded-[6px] will-change-transform",
              )}
              key={`${indexi}-${indexj}`}
            />
          )),
        )}
      </MotionDiv>
      <pre className="mt-10">{JSON.stringify(values)}</pre>
    </>
  );
});

RightHomeInteraction.displayName = "RightHomeInteraction";
export default RightHomeInteraction;
