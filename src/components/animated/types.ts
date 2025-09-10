import { SVGProps } from "react";

export interface CurveSvgProps extends SVGProps<SVGSVGElement> {
  topLine?: string;
  svgTextClassName?: string;
  svgTextColor?: string;
  svgTextDisplacement?: number;
}
