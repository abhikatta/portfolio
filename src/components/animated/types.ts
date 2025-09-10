import { ReactNode, SVGProps } from "react";

export interface CurveSvgProps extends SVGProps<SVGSVGElement> {
  topLine?: string;
  svgTextClassName?: string;
  svgTextColor?: string;
  svgPathHref: string;
  svgTextDisplacement?: number;
  svgPath: ReactNode;
}
