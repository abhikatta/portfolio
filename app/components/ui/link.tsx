import { motion } from "motion/react";

const CustomLink = ({ label, href }: { label: string; href: string }) => {
  return (
    <motion.a
      key={label}
      href={href}
      target="_blank"
      rel="noreferrer"
      whileHover={{
        y: -4,
        x: -4,
        boxShadow: "8px 8px 0 0 var(--accent)",
      }}
      className="font-mono text-xs uppercase font-bold border-2 border-paper px-5 py-3 bg-ink transition-colors">
      {label} ↗
    </motion.a>
  );
};

export default CustomLink;
