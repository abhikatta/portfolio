import React, { useState } from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const Main = () => {
  const [counter, setCounter] = useState(0);
  const Increment = () => {
    setCounter(counter + 1);
  };
  const Decrement = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>Abhinay-Katta</h1>
      {counter}
      <br></br>
      <button className="buttons" onClick={Increment}>
        Inc
      </button>
      <button className="buttons" onClick={Decrement}>
        Dec
      </button>
    </>
  );
};

const testt = ReactDom.createRoot(document.getElementById("root"));

testt.render(
  <>
    <Main />
  </>
);
