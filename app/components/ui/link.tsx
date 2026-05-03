import { cn } from "@/lib/utils";
import { HTMLMotionProps, motion } from "motion/react";
import { forwardRef } from "react";

interface ElementProps extends HTMLMotionProps<"a"> {
  openInNewTab?: boolean;
}

const CustomLink = forwardRef<HTMLAnchorElement, ElementProps>(
  ({ href, className, children, openInNewTab, ...props }, ref) => {
    const newTabProps = openInNewTab
      ? {
          target: "_blank",
          rel: "noreferrer",
        }
      : {};

    return (
      <motion.a
        ref={ref}
        href={href}
        {...newTabProps}
        whileHover={{
          y: -4,
          x: -4,
          boxShadow: "8px 8px 0 0 var(--accent)",
        }}
        whileTap={{
          y: -0,
          x: -0,
          boxShadow: 0,
        }}
        className={cn(
          "font-mono text-xs uppercase font-bold border border-paper px-5 py-3 bg-ink text-paper transition-colors",
          className,
        )}
        {...props}>
        {children}
      </motion.a>
    );
  },
);

CustomLink.displayName = "CustomLink";

export default CustomLink;
