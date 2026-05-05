"use client";

import { cn } from "@/lib/utils";
import { MotionValue } from "motion/react";
import { SVGProps, useEffect, useRef } from "react";

interface CurveSvgProps extends SVGProps<SVGSVGElement> {
  topLine: string;
  svgTextClassName?: string;
  svgTextColor?: string;
  svgTextDisplacement?: number;
  svgPath: React.ReactNode;
  svgPathHref: string;
  svgTextItemsCount: number;
  scrollYProgress: MotionValue<number>;
}

export const CurveText = ({
  topLine,
  svgTextClassName,
  svgTextColor,
  svgTextDisplacement,
  svgPath,
  svgPathHref,
  svgTextItemsCount,
  scrollYProgress,
  ...props
}: CurveSvgProps) => {
  const ref = useRef<SVGTextElement | null>(null);

  useEffect(() => {
    const scrollProgress = scrollYProgress.on("change", (e) => {
      if (!ref?.current?.childNodes) return;
      ref.current.childNodes.forEach((item, index) => {
        const distance = svgTextDisplacement || 10;
        if (item instanceof SVGTextPathElement) {
          item.setAttribute(
            "startOffset",
            `${-distance + index * distance + e * distance}%`,
          );
        }
      });
    });

    return scrollProgress;
  }, [scrollYProgress, svgTextDisplacement]);

  return (
    <svg
      viewBox="0 0 1920 529"
      fill="none"
      {...props}
      className={cn("absolute top-0", props.className)}
      xmlns="http://www.w3.org/2000/svg">
      {svgPath}
      <text
        ref={ref}
        className={cn("font-syne text-4xl", svgTextClassName)}
        fill={svgTextColor || "white"}>
        {[...Array(svgTextItemsCount)].map((_, index) => (
          <textPath key={index} href={`#${svgPathHref}`}>
            {topLine}
          </textPath>
        ))}
      </text>
    </svg>
  );
};
