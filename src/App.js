import React from "react";
import Navbar from "./components/Navbar";
// import Textform from "./components/Textform";

import "./App.css";
import About from "./components/About";

function App() {
  return (
    <div className="app">
      <Navbar title="Textify" />
      <div className="container">
        {/* <Textform heading="Type here to Analyze" /> */}
        <About />
      </div>
    </div>
  );
}

export default App;
