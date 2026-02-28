interface Projects {
  name: string;
  description: string;
  link: { download: string; github: string };
  backgroundImage: unknown;
  tags?: string[];
}
const projects: Projects[] = [
  {
    name: "JoBo",
    description:
      "A mobile application written in react native that converts handwritten text to digital text using hugging face's TrOCR model.",
    link: {
      download: "https://github.com/abhikatta/JoBo",
      github: "https://github.com/abhikatta/JoBo",
    },
    backgroundImage: "/JoBo.png",
    tags: ["reactnative", "huggingface", "firebase", "android"],
  },
  {
    name: "Webber",
    description:
      "A simple voice assistant for windows written in python with the infi.systray and speech recognition libraries.",
    link: {
      github: "https://github.com/abhikatta/Webber",
      download:
        "https://github.com/abhikatta/Webber/releases/download/proto1/Webber.zip",
    },
    backgroundImage: "/webber.png",
    tags: ["python", "windows", "infi.systray", "vscode", "speechrecognition"],
  },
  {
    name: "TimeTableTuner",
    description: `A Flask application that displays the current time and class
       information retrieved from an Excel sheet cleaned using python and pandas and numPy libraries.`,

    link: {
      github: "https://github.com/abhikatta/TimeTableTuner",
      download: "https://github.com/abhikatta/TimeTableTuner",
    },
    backgroundImage: "/timeTableTuner.png",
    tags: [
      "python",
      "flask",
      "tailwindCSS",
      "HTML",
      "javascript",
      "jquery",
      "data-cleaning",
      "vscode",
    ],
  },
  {
    name: "Portfolio Website",
    description:
      "Portfolio website made using Next.js and TailwindCSS and Forminit.",
    link: {
      github: "https://github.com/portfolio",
      download: "https://abhikatta.github.io/portfolio",
    },
    backgroundImage: "/portfolio.png",
    tags: [
      "nextjs",
      "tailwindcss",
      "typescript",
      "github",
      "vscode",
      "forminit",
    ],
  },
  {
    name: "Spamde",
    description:
      "A Windows widget application that can repeatedly input a specified text in any chat application or text-entry interface.",
    link: {
      github: "https://github.com/abhikatta/spamde",
      download:
        "https://github.com/Abhinay-Katta/Spam-with-Python/releases/download/v1.0.0/spamde.exe",
    },
    backgroundImage: "/spamde.png",
    tags: ["windows", "python", "pyautogui", "pyqt6", "vscode"],
  },
];

export default projects;
