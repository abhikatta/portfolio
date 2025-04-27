import { Variants } from "motion/react";
import { Dispatch, HTMLAttributes, SetStateAction } from "react";
export type HTMLDivProps<T = unknown> = HTMLAttributes<HTMLDivElement> & T;

export interface Bar {
  bgColor: string;
  delay: number;
}

export interface NavItem {
  name: string;
  path: string;
  isWorkInProgress: boolean;
}
export interface Position {
  top: number;
  width: number;
  height: number;
  opacity: number;
}

export interface NavElement {
  navVariants: Variants;
  index: number;
  setPosition: Dispatch<SetStateAction<Position>>;

  nav: NavItem;
}
