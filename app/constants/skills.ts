export type Skills = Array<{ label: string; weight: "BLACK" | "ITALIC" }>;

export const skills = [
  "React",
  "Next",
  "TypeScript",
  "TanStack Query",
  "TailwindCSS",
  "Zustand",
  "Zod",
  "Redux",
  "Django",
];

export const skills2 = [
  "SCSS",
  "Strapi",
  "Vitest",
  "shadcn/ui",
  "Mantine",
  "Docker",
  "Bash",
  "FastAPI",
  "Motion",
];

export const groups = [
  {
    label: "core",
    items: ["React", "Next", "TypeScript", "Python"],
  },
  {
    label: "styling",
    items: ["TailwindCSS"],
  },
  {
    label: "state",
    items: ["Zustand", "TanStack Query"],
  },
  {
    label: "tooling",
    items: ["Git", "Vite", "Docker"],
  },
  {
    label: "building with",
    items: ["FastAPI", "Linux", "PostgreSQL", "React Native"],
  },
];
