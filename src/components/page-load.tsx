"use client";

import {
  BAR_LOADING_DELAY,
  BAR_LOADING_TOTAL_TIME,
  MAX_BARS,
  MIN_BARS,
} from "@/data/constants";
import { cn } from "@/utils/cn";
import { getBars } from "@/utils/get-bars";
import { Bar } from "@/utils/types";
import { motion, Variants } from "motion/react";
import { useEffect, useState } from "react";

const PageLoad = () => {
  const [isAnimationCompleted, setIsAnimationCompleted] = useState(false);
  const [bars, setBars] = useState<Bar[] | null>(null);

  useEffect(() => {
    setBars(getBars(MAX_BARS, MIN_BARS));
  }, []);

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

  const maxDelay = bars ? Math.max(...bars.map((bar) => bar.delay)) : 0;

  return (
    !isAnimationCompleted && (
      <motion.div
        variants={loadVariants}
        className="absolute flex h-screen w-full flex-row items-center justify-center overflow-hidden"
      >
        {bars &&
          bars.map((bar, index) => (
            <motion.div
              key={index}
              variants={loadVariants}
              initial="initial"
              onAnimationComplete={() => {
                if (maxDelay === bar.delay) {
                  setTimeout(() => {
                    setIsAnimationCompleted(true);
                  }, 500);
                }
              }}
              animate="animate"
              custom={bar.delay}
              className={cn("h-[100vh] w-full rounded-t-full", bar.bgColor)}
            />
          ))}
      </motion.div>
    )
  );
};

export default PageLoad;
