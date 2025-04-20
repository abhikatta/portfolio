import { HTMLMotionProps, motion } from "motion/react";

// too lazy to write different names for different variants, so spread this everywhere
export const variantProps: Partial<HTMLMotionProps<"div">> = {
  initial: "initial",
  animate: "animate",
};

export const MotionDiv = ({ children, ...props }: HTMLMotionProps<"div">) => (
  <motion.div {...props} {...variantProps}>
    {children}
  </motion.div>
);
