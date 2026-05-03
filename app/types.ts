import { HTMLMotionProps } from "motion/react";
import { Dispatch, SetStateAction } from "react";

export interface Bar {
  bgColor: string;
  delay: number;
}

export interface NavItem {
  label: string;
  href: string;
}
export interface Position {
  top: number;
  width: number;
  height: number;
  opacity: number;
  left: number;
}
export interface CustomLinkProps extends HTMLMotionProps<"a"> {
  openInNewTab?: boolean;
}

export interface NavItemProps extends CustomLinkProps {
  setPosition: Dispatch<SetStateAction<Position>>;
  nav: NavItem;
}
