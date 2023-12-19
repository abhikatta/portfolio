import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Maintainence from "./Maintainence";

// temporary when under maintainence:

const App = () => {
  // set this to true when updating the site and deploy,
  // add changes, set to false and deploy
  const onMaintainence = false;

  return onMaintainence ? (
    <Maintainence />
  ) : (
    <>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
      <Contact />
    </>
  );
};

export default App;
