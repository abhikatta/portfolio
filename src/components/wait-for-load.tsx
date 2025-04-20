"use client";

import { BAR_LOADING_TOTAL_TIME } from "@/data/constants";
import { motion } from "motion/react";
import { ReactNode, useEffect, useState } from "react";

const WaitForLoad = ({ children }: { children: ReactNode }) => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShouldRender(true);
    }, BAR_LOADING_TOTAL_TIME * 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 0.75,
          delay: BAR_LOADING_TOTAL_TIME,
        },
      }}
    >
      {shouldRender && children}
    </motion.div>
  );
};

export default WaitForLoad;
