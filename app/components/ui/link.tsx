import { cn } from "@/lib/utils";
import { CustomLinkProps } from "@/types";
import { motion } from "motion/react";
import { forwardRef } from "react";

const CustomLink = forwardRef<HTMLAnchorElement, CustomLinkProps>(
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
          boxShadow: "unset",
        }}
        className={cn(
          "border-paper bg-ink text-paper border px-5 py-0 text-xs font-bold uppercase transition-colors md:text-sm",
          className,
        )}
        {...props}
      >
        {children}
      </motion.a>
    );
  },
);

CustomLink.displayName = "CustomLink";

export default CustomLink;
