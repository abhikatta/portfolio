import { HTMLAttributes } from "react";
export type HTMLDivProps<T = unknown> = HTMLAttributes<HTMLDivElement> & T;

export interface Bar {
  bgColor: string;
  delay: number;
}
