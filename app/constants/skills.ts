export type Skills = Array<{ label: string; weight: "BLACK" | "ITALIC" }>;

export const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Django",
  "TailwindCSS",
  "Redux",
  "Zustand",
  "TanStack Query",
  "Zod",
];

export const skills2 = [
  "shadcn/ui",
  "Mantine",
  "SCSS",
  "Jest",
  "Docker",
  "Vitest",
  "FastAPI",
  "Motion",
  "Strapi",
];

export const groups = [
  {
    label: "core",
    items: ["React.js", "Next.js", "TypeScript"],
  },
  {
    label: "styling",
    items: ["TailwindCSS"],
  },
  {
    label: "state",
    items: ["Redux", "Zustand", "TanStack Query"],
  },
  {
    label: "tooling",
    items: ["Git", "Vite", "Webpack"],
  },
  {
    label: "exploring",
    items: ["React Native", "FastAPI", "Python", "PostgreSQL"],
  },
];
