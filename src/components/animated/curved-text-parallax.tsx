import { cn } from "@/utils/cn";
import { useScroll } from "motion/react";
import { RefObject, useEffect, useRef } from "react";
import { CurveSvgProps } from "./types";

export const CurveText = ({
  topLine,
  svgTextClassName,
  svgTextColor,
  svgTextDisplacement,
  ...props
}: CurveSvgProps) => {
  const ref = useRef<SVGTextElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: ref as RefObject<HTMLElement | null>,
    offset: ["start 0.8", "end start"],
  });

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
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        id="curve"
        fill="none"
        d="M1 528C25.5 393 139.5 212.5 325 172C510.5 131.5 510.5 131.5 641 131.5C884.153 176.119 1028.36 248.976 1239 213.5C1429 181.5 1405 176 1490.5 154C1490.5 154 1711 67 1919 1"
      />
      <text
        ref={ref}
        className={cn(
          "font-bigShouldersStencil text-2xl uppercase",
          svgTextClassName,
        )}
        fill={svgTextColor || "white"}
      >
        {[...Array(20)].map((_, index) => (
          <textPath key={index} href="#curve">
            {topLine}
          </textPath>
        ))}
      </text>
    </svg>
  );
};
