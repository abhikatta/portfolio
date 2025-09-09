import { cn } from "@/utils/cn";
import {
  HTMLMotionProps,
  MotionProps,
  MotionValue,
  motion,
  useTransform,
} from "motion/react";

// too lazy to write different names for different variants, so spread this everywhere
export const variantProps: MotionProps = {
  initial: "initial",
  animate: "animate",
};

export const MotionDiv = ({ children, ...props }: HTMLMotionProps<"div">) => (
  <motion.div {...props} {...variantProps}>
    {children}
  </motion.div>
);

export const RevealWord = ({
  words,
  scrollYProgress,
  className,
}: {
  words: string[];
  scrollYProgress: MotionValue<number>;
  className?: string;
}) => {
  return words.map((t, index) => {
    const start = index / words.length;
    const end = start + 1 / words.length;
    const range = [start, end];
    const opacity = useTransform(scrollYProgress, range, [0, 1]);

    return (
      <span className={"relative"} key={index}>
        &nbsp;
        <span
          className={cn("absolute opacity-20", className)}
          dangerouslySetInnerHTML={{ __html: t }}
        />
        <motion.span
          style={{
            opacity,
          }}
          dangerouslySetInnerHTML={{ __html: t }}
        ></motion.span>
      </span>
    );
  });
};
