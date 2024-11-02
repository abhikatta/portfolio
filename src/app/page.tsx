"use client";
import "./index.css";
import Contact from "../components/Contact";
import Home from "../components/Home";
import About from "../components/About";
import Skills from "../components/Skills";
import Work from "../components/Work";
import Maintainence from "./Maintainence";
const App = () => {
  // set this to true when updating the site and deploy,
  // add changes, set to false and deploy
  const onMaintainence = false;

  return onMaintainence ? (
    <Maintainence />
  ) : (
    <>
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </>
  );
};

export default App;
