import { NavItem } from "@/utils/types";

export const navItems: NavItem[] = [
  {
    name: "Home",
  },
  {
    name: "About",
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
  isWorkInProgress: item.name === "Home" ? false : true,
}));
