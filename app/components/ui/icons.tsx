"use client";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, MotionProps, Variants } from "motion/react";
import { HTMLAttributes } from "react";

export type HTMLDivProps<T = unknown> = HTMLAttributes<HTMLDivElement> & T;

const variantProps: HTMLAttributes<HTMLDivElement> & MotionProps = {
  initial: "initial",
  animate: "animate",
};
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
        "relative flex h-full w-full flex-col justify-center gap-y-2",
        isOpen ? "items-center" : "",
        className,
      )}
    >
      <AnimatePresence mode="wait">
        {!isOpen ? (
          <>
            <motion.div className="mr-auto w-3/5 rounded-full border border-gray-600" />
            <motion.div className="w-full rounded-full border border-gray-600" />
            <motion.div className="ml-auto w-3/5 rounded-full border border-gray-600" />
          </>
        ) : (
          <>
            <motion.div
              variants={otherVariant}
              {...variantProps}
              exit="exit"
              custom={1}
              className="w-3/5 rounded-full border border-gray-600"
            />
            <motion.div
              variants={MiddleVariant}
              {...variantProps}
              exit="exit"
              className="w-full rounded-full border border-gray-600"
            />
            <motion.div
              variants={otherVariant}
              {...variantProps}
              exit="exit"
              custom={2}
              className="w-3/5 rounded-full border border-gray-600"
            />
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
