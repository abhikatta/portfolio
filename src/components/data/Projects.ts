import Project1 from "../../assets/jobo.png";
import Project2 from "../../assets/webber.png";
import Project3 from "../../assets/timeTableTuner.png";
import Project4 from "../../assets/portfolio.png";
import Project5 from "../../assets/spamde.png";

interface Projects {
  name: string;
  description: string;
  link: { download: string; github: string };
  backgroundImage: File;
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
    backgroundImage: Project1,
    tags: ["reactnative", "huggingface", "firebase", "android"],
  },
  {
    name: "Webber",
    description: "A simple voice assistant for windows written in python.",
    link: {
      github: "https://github.com/abhikatta/Webber",
      download:
        "https://github.com/abhikatta/Webber/releases/download/proto1/Webber.zip",
    },
    backgroundImage: Project2,
    tags: ["python", "windows", "infi.systray", "vscode", "speechrecognition"],
  },
  {
    name: "TimeTableTuner",
    description:
      "A flask app that shows current time and class from a auto-cleaned excel sheet.",
    link: {
      github: "https://github.com/abhikatta/TimeTableTuner",
      download: "https://github.com/abhikatta/TimeTableTuner",
    },
    backgroundImage: Project3,
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
    description: "Portfolio website written in React and TailwindCSS.",
    link: {
      github: "https://abhikatta.github.io/portfolio",
      download: "https://github.com/portfolio",
    },
    backgroundImage: Project4,
    tags: ["react", "tailwindcss", "typescript", "github", "vscode"],
  },
  {
    name: "Spamde",
    description:
      "A windows widget app that can spam a given text in any chat app or anywhere where a text can be typed.",
    link: {
      github: "https://github.com/abhikatta/spamde",
      download:
        "https://github.com/Abhinay-Katta/Spam-with-Python/releases/download/v1.0.0/spamde.exe",
    },
    backgroundImage: Project5,
    tags: ["windows", "python", "pyautogui", "pyqt6", "vscode"],
  },
];

export default projects;
