interface skill {
  name: string;
  icon: string;
}
const skillIcons: skill[] = [
  {
    name: "React.js",
    icon: "/react.png",
  },
  {
    name: "Next.js",
    icon: "/next.png",
  },
  {
    name: "TypeScript",
    icon: "/react.png", // Using react icon as placeholder if TS isn't available
  },
  {
    name: "TailwindCSS",
    icon: "/tailwind.png",
  },
  {
    name: "Redux",
    icon: "/react.png", // Placeholder
  },
  {
    name: "Zustand",
    icon: "/react.png", // Placeholder
  },
  {
    name: "TanStack Query",
    icon: "/react.png", // Placeholder
  },
  {
    name: "HTML/CSS",
    icon: "/html.png",
  },
  {
    name: "Git",
    icon: "/git.png",
  },
];

export default skillIcons;
