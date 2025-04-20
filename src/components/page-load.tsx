"use client";

import { cn } from "@/utils/cn";
import { motion, Variants } from "motion/react";

const PageLoad = () => {
  const loadVariants: Variants = {
    initial: {
      y: "100vh",
    },
    animate: (delay: number) => ({
      y: -2000,
      transition: {
        duration: 1.5,
        delay: delay,
      },
    }),
  };

  const COLOR_OPTIONS = ["bg-white"];
  const BARS_COUNT = Math.ceil(Math.random() * 10);

  const getDelay = () => Math.random() * 0.5;

  interface Bar {
    bgColor: string;
    delay: number;
  }

  const getBars = (BARS_COUNT: number): Array<Bar> => {
    const bars: Bar[] = [];
    for (let index = 0; index < BARS_COUNT; index++) {
      bars.push({
        delay: getDelay(),
        bgColor:
          COLOR_OPTIONS[Math.floor(Math.random() * COLOR_OPTIONS.length)],
      });
    }
    return bars;
  };

  return (
    <motion.div
      variants={loadVariants}
      className="absolute flex h-[2000px] w-full flex-row items-center justify-center"
    >
      {getBars(BARS_COUNT).map((bar, index) => (
        <motion.div
          key={index}
          variants={loadVariants}
          initial="initial"
          animate="animate"
          custom={bar.delay}
          className={cn("h-[2000px] w-full rounded-t-full", bar.bgColor)}
        />
      ))}
    </motion.div>
  );
};

export default PageLoad;
