"use client";
import { cn } from "@/lib/utils";
import { NavItemProps, Position } from "@/types";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { memo, useRef } from "react";
import CustomLink from "./link";

export const initialPosition: Position = {
  top: 0,
  opacity: 0,
  height: 0,
  width: 0,
  left: 0,
};

export const Pill = memo((position: Position) => (
  <motion.div className="absolute z-1 bg-accent" animate={{ ...position }} />
));

export const NavItem = memo(
  ({
    nav,
    setPosition,
    className,
    openInNewTab,
    customOffset = 4,
    ...props
  }: NavItemProps) => {
    const ref = useRef<HTMLAnchorElement | null>(null);
    const pathname = usePathname();
    const getPropertiesForPill = () => {
      if (ref.current) {
        const { width, height } = ref.current.getBoundingClientRect();
        const { offsetTop, offsetLeft } = ref.current;
        setPosition({
          top: offsetTop + customOffset,
          left: offsetLeft + customOffset,
          width,
          height,
          opacity: 1,
        });
      }
    };

    const hidePill = () => setPosition((prev) => ({ ...prev, opacity: 0 }));

    return (
      <div className="flex h-auto z-2 w-fit flex-row items-start justify-between lg:items-center">
        <CustomLink
          ref={ref}
          onMouseEnter={getPropertiesForPill}
          whileHover={{
            x: -4,
            y: -4,
            boxShadow: "unset",
          }}
          onMouseLeave={hidePill}
          className={cn(
            "flex flex-row px-1.5 py-2 whitespace-nowrap mix-blend-difference border-none",
            pathname.replace("/", "") === nav.href ? "border" : "",
            className,
          )}
          href={nav.href}
          openInNewTab={openInNewTab}
          {...props}>
          {nav.label}
        </CustomLink>
      </div>
    );
  },
);

Pill.displayName = "Pill";
NavItem.displayName = "NavItem";

/* use like:

<AnimatePresence mode="sync">
  <NavItem nav={item} setPosition={setPosition} />
  <Pill {...position} />
</AnimatePresence>;

*/
