"use client";
import { navItems } from "@/data/navlist";
import { usePathname } from "next/navigation";

const useIs404 = () => {
  const pathname = usePathname().replace("/", "");
  const pathFound = navItems.find((item) => item.path === pathname);

  return {
    is404: !pathFound,
  };
};

export default useIs404;
