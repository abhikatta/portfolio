import { NavItem } from "@/utils/types";

export const navItems: NavItem[] = [
  {
    name: "Home",
  },
  {
    name: "Experience",
  },
  { name: "Work" },
  { name: "Personal Projects" },
  { name: "Contact" },
].map((item) => ({
  ...item,
  path: item.name === "Home" ? "" : item.name.replace(" ", "-").toLowerCase(),
}));
