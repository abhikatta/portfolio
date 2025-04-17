"use client";
import { cn } from "@/utils/cn";
import { HTMLDivProps } from "@/utils/types";
import { AnimatePresence, motion, Variants } from "motion/react";

export const HamburgerMenuIcon = ({
  className,
  isOpen,
  ...props
}: HTMLDivProps<{ isOpen: boolean }>) => {
  const MiddleVariant: Variants = {
    initial: {
      width: 0,
      height: 0,
    },
    exit: {
      width: 0,
      height: 0,
    },
    animate: {
      rotate: "180deg",
      position: "absolute",
      height: "40px",
      width: "40px",
    },
  };

  const otherVariant: Variants = {
    initial: {
      rotate: 0,
    },
    animate: (delayValue: number) => ({
      position: "absolute",
      rotate: delayValue % 2 === 0 ? 45 : -45,
    }),
    exit: {
      rotate: 0,
    },
  };

  return (
    <div
      {...props}
      className={cn(
        "relative w-full h-full flex justify-center flex-col gap-y-2",
        isOpen ? "items-center" : "",
        className
      )}>
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <>
            <motion.div className="w-3/5 mr-auto border-1 rounded-full border-gray-600" />
            <motion.div className="w-full border-1 rounded-full border-gray-600" />
            <motion.div className="w-3/5 ml-auto border-1 rounded-full border-gray-600" />
          </>
        ) : (
          <>
            <motion.div
              variants={otherVariant}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={1}
              className="w-3/5  border-1 rounded-full border-gray-600"
            />
            <motion.div
              variants={MiddleVariant}
              initial="initial"
              animate="animate"
              exit="exit"
              className="w-full border-1 rounded-full border-gray-600"
            />
            <motion.div
              variants={otherVariant}
              initial="initial"
              animate="animate"
              exit="exit"
              custom={2}
              className="w-3/5  border-1 rounded-full border-gray-600"
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
