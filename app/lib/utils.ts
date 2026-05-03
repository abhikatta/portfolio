import { twMerge } from "tailwind-merge";
import { ClassValue, clsx } from "clsx";

export const cn = (...classes: ClassValue[]) => twMerge(clsx(classes));
