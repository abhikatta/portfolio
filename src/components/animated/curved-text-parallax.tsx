"use client";

import { cn } from "@/utils/cn";
import { useEffect, useRef } from "react";
import { CurveSvgProps } from "./types";

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
      xmlns="http://www.w3.org/2000/svg"
    >
      {svgPath}
      <text
        ref={ref}
        className={cn(
          "font-bigShouldersStencil text-7xl uppercase 2xl:text-4xl",
          svgTextClassName,
        )}
        fill={svgTextColor || "white"}
      >
        {[...Array(svgTextItemsCount)].map((_, index) => (
          <textPath key={index} href={`#${svgPathHref}`}>
            {topLine}
          </textPath>
        ))}
      </text>
    </svg>
  );
};
