import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const CustomLink = ({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noreferrer"
      whileHover={{
        y: -4,
        x: -4,
        boxShadow: "8px 8px 0 0 var(--accent)",
      }}
      className={cn(
        "font-mono text-xs uppercase font-bold border border-paper px-5 py-3 bg-ink text-paper transition-colors",
        className,
      )}>
      {children}
    </motion.a>
  );
};

export default CustomLink;
