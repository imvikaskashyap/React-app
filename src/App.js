import React from "react";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar title="Textify" />
      <div className="container">
        <Textform heading="Type here to Analyze" />
      </div>
    </div>
  );
}

export default App;
