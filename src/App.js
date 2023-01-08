import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

import "./App.css";
// import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0a2a4a";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  };

  return (
    <div className="app">
      <Navbar title="Textify" mode={mode} toggleMode={toggleMode} />
      <div className="container">
        <Textform heading="Type here to Analyze" mode={mode} />
        {/* <About /> */}
      </div>
    </div>
  );
}

export default App;
