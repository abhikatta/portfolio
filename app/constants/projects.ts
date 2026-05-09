export interface Project {
  title: string;
  tag: string;
  description: string;
  demo: string | null;
  github: string | null;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: "Re-tro",
    tag: "WEB · COLLAB",
    description:
      "Collaborative retrospective tool with real-time WebSocket sync, FastAPI backend, and PostgreSQL persistence. Built end-to-end and deployed on Render + Vercel.",
    demo: "https://re-tro.vercel.app",
    github: "https://github.com/abhikatta/retro-app",
    tags: ["react", "vite", "fastapi", "typescript", "postgresql", "websocket"],
  },
  {
    title: "JoBo",
    tag: "MOBILE · ML",
    description:
      "React Native app that converts handwritten text to digital using Hugging Face's TrOCR model. Handles image capture, preprocessing, and inference on-device.",
    demo: "https://github.com/abhikatta/jobo",
    github: "https://github.com/abhikatta/jobo",
    tags: ["react native", "huggingface", "firebase", "android"],
  },
  {
    title: "Spamde",
    tag: "DESKTOP · UTIL",
    description:
      "A Windows widget that can repeatedly input a specified text in any chat or text-entry interface.",
    demo: "https://github.com/Abhinay-Katta/Spam-with-Python/releases/download/v1.0.0/spamde.exe",
    github: "https://github.com/abhikatta/Spamde",
    tags: ["python", "windows", "automation"],
  },
  {
    title: "Bloged",
    tag: "WEB · BLOG",
    description:
      "Full-stack blogging platform built with Next.js, Prisma ORM, and MongoDB. Auth, CRUD, and server-side rendering.",
    demo: "https://bloged.vercel.app",
    github: "https://github.com/abhikatta/bloged",
    tags: ["nextjs", "css modules", "typescript", "prisma", "mongodb"],
  },
  {
    title: "Webber",
    tag: "DESKTOP · PY",
    description:
      "A simple voice assistant for Windows written in Python with infi.systray and speech recognition.",
    demo: null,
    github: "https://github.com/abhikatta/webber",
    tags: ["python", "windows", "infi.systray", "speechrecognition"],
  },
  {
    title: "TimeTableTuner",
    tag: "WEB · DATA",
    description:
      "Flask backend that parses Excel timetables with pandas and serves current class info. Data cleaning, scheduling logic, and a lightweight frontend.",
    demo: null,
    github: "https://github.com/abhikatta/TimeTableTuner",
    tags: ["python", "flask", "tailwindcss", "jquery"],
  },
];
