"use client";
import { motion, useMotionValue, useTransform } from "motion/react";

const RevealBox = () => {
  const x = useMotionValue(0);
  const opacity = useTransform(x, [-100, 0, 100], [1, 0.2, 1]);

  return (
    <div className="relative h-[150px] w-full overflow-hidden">
      {/* Punchline (underneath) */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 z-0 p-4 font-mono text-lg text-white"
      >
        Currently breaking pixels and writing tests at a startup.
        <br />
        Looking to make cool shit and maybe pay rent.
      </motion.div>

      {/* Draggable Block (on top) */}
      <motion.div
        drag
        dragConstraints={{ left: -100, right: 100, top: 100, bottom: -100 }}
        className="relative z-10 flex h-full w-full cursor-grab items-center justify-center bg-yellow-400 font-bold text-black"
      >
        🕹 Drag to reveal
      </motion.div>
    </div>
  );
};

export default RevealBox;
