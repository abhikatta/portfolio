"use client";

import { BAR_LOADING_DELAY, BAR_LOADING_TOTAL_TIME } from "@/data/constants";
import { cn } from "@/utils/cn";
import { Bar } from "@/utils/types";
import { motion, Variants } from "motion/react";

const PageLoad = () => {
  const COLOR_OPTIONS = ["bg-white", "bg-[#FF0000]", "bg-[#FFD700]"];

  const MAX_BARS = 10,
    MIN_BARS = 3;

  const BARS_COUNT =
    Math.ceil(Math.random() * (MAX_BARS - MIN_BARS + 1)) + MIN_BARS;

  const loadVariants: Variants = {
    initial: {
      y: "100vh",
    },
    animate: (delay: number) => ({
      y: `-100vh`,
      transition: {
        duration: BAR_LOADING_TOTAL_TIME - BAR_LOADING_DELAY,
        delay: BAR_LOADING_DELAY + delay,
        ease: [0.25, 1, 0.5, 1],
      },
    }),
  };

  const getBars = (BARS_COUNT: number): Array<Bar> => {
    const bars: Bar[] = [];
    const barColor =
      COLOR_OPTIONS[Math.floor(Math.random() * COLOR_OPTIONS.length)];
    for (let index = 0; index < BARS_COUNT; index++) {
      bars.push({
        delay: Math.random() * 0.5,
        bgColor: barColor,
      });
    }
    return bars;
  };

  return (
    <motion.div
      variants={loadVariants}
      className="absolute flex h-screen w-full flex-row items-center justify-center overflow-hidden"
    >
      {getBars(BARS_COUNT).map((bar, index) => (
        <motion.div
          key={index}
          variants={loadVariants}
          initial="initial"
          animate="animate"
          custom={bar.delay}
          className={cn("h-[100vh] w-full rounded-t-full", bar.bgColor)}
        />
      ))}
    </motion.div>
  );
};

export default PageLoad;
