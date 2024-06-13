import Python from "../../assets/python.png";
import HTML from "../../assets/html.png";
// import Tensorflow from "../../assets/tensorflow.png";
import ReactIcon from "../../assets/react.png";
import Tailwind from "../../assets/tailwind.png";
// import Flask from "../../assets/flask.jpg";
import GitIcon from "../../assets/git.png";
import Unity from "../../assets/unity.png";
import Firebase from "../../assets/firebase.png";
import NextIcon from "../../assets/next.png";
import C_Sharp from "../../assets/c_sharp.png";

interface skill {
  name: string;
  icon: string;
}
const skillIcons: skill[] = [
  {
    name: "React.js/ReactNative",
    icon: ReactIcon,
  },
  {
    name: "C#",
    icon: C_Sharp,
  },
  {
    name: "TailwindCSS",
    icon: Tailwind,
  },
  {
    name: "HTMl",
    icon: HTML,
  },
  { name: "Next.js", icon: NextIcon },
  {
    name: "Python",
    icon: Python,
  },
  {
    name: "Firebase",
    icon: Firebase,
  },
  {
    name: "Git",
    icon: GitIcon,
  },
  {
    name: "Unity 3D",
    icon: Unity,
  },
];

export default skillIcons;
