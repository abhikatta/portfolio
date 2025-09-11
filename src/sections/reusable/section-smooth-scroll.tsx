"use client";
import { MotionDiv } from "@/components/common-motion-elements";
import { useIsMobile } from "@/hooks/use-is-mobile";
import { cn } from "@/utils/cn";
import { HTMLMotionProps, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export const SectionSmoothScroll = ({
  ...props
}: Omit<HTMLMotionProps<"div">, "ref">) => {
  const ref = useRef<HTMLParagraphElement | null>(null);
  const { isMobile } = useIsMobile();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 1, 0.7]);
  const rotate = useTransform(scrollYProgress, [0, 0.5, 1], [-5, 0, 5]);

  return (
    <MotionDiv
      ref={ref}
      {...props}
      className={cn(
        "flex min-h-screen w-full flex-col items-center justify-center bg-black",
        props.className,
      )}
      style={{
        ...(isMobile ? { scale } : { scale, rotate }),
        willChange: "transform",
        ...props.style,
      }}
    >
      {props.children}
    </MotionDiv>
  );
};
