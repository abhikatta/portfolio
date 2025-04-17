export const navItems: { name: string; path: string }[] = [
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
