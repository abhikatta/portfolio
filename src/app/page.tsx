"use client";
import "./index.css";
import Home from "../components/Home";
import Maintainence from "./Maintainence";
import { MouseEvent, useRef, useState } from "react";
import { motion } from "framer-motion";
const App = () => {
  // set this to true when updating the site and deploy,
  // add changes, set to false and deploy
  const onMaintainence = false;
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);
  const handleMouseEffect = (e: MouseEvent) => {
    setPosition({ x: e.clientX + scrollX, y: e.clientY + scrollY });
    const target = ref.current;
    if (target) {
      target.style.filter = "invert(1)";
      target.style.background =
        "radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 30%, rgba(0,0,0,1) 100%)";
    }
  };

  return onMaintainence ? (
    <Maintainence />
  ) : (
    <div
      onMouseMove={handleMouseEffect}
      className="   overflow-x-hidden custom-mouse-effect">
      <motion.div
        ref={ref}
        initial={{
          opacity: 0,
          scale: 0,
          x: position.x - 100,
          y: position.y - 100,
        }}
        animate={{
          opacity: 1,
          borderRadius: 100,
          scale: 1,
          x: position.x - 100,
          y: position.y - 100,
        }}
        transition={{ duration: 0.1 }}
        className="cursor-effect"
      />
      <Home />
    </div>
  );
};

export default App;
