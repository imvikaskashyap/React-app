import React, { useState } from "react";

function Textform(props) {
  const upperCaseClick = () => {
    // console.log("Upper case was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  const lowerCaseClick = () => {
    // console.log("Upper case was clicked " + text);
    let newText = text.toLowerCase();
    setText(newText);
  };

  const clearClick = () => {
    let newText = "";
    setText(newText);
  };

  const copyText = () => {
    let text = document.getElementById("textForm");
    text.select();
    navigator.clipboard.writeText(text.value);
  };

  const removeExtraSpace = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  };

  const upperOnChange = (event) => {
    // console.log("Upper change was clicked");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  //   setText("Please type your text");

  return (
    <>
      <div
        className="conatiner m-5"
        style={{ color: props.mode === "dark" ? "white" : "#0a2a4a" }}
      >
        <h1 className="">{props.heading}</h1>
        <textarea
          className="form-control my-3"
          onChange={upperOnChange}
          value={text}
          id="textForm"
          rows="8"
          style={{
            backgroundColor: props.mode === "dark" ? "#ccd6d5" : "white",
            // color: props.mode === "dark" ? "white" : "#1c1b07",
          }}
        ></textarea>
        <button className="btn btn-primary mx-2" onClick={upperCaseClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-info m-2" onClick={lowerCaseClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-danger m-2" onClick={clearClick}>
          Clear Text
        </button>
        <button className="btn btn-success m-2" onClick={copyText}>
          Copy Text
        </button>
        <button className="btn btn-warning m-2" onClick={removeExtraSpace}>
          Remove Extra Space
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#0a2a4a" }}
      >
        <h2>Your Text Summary</h2>
        <p>Your Words : {text.split(" ").length} </p>
        <p>Your Letters : {text.length}</p>
        <p>
          How many times you will get to read this :{" "}
          {0.008 * text.split(" ").length}
        </p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : "Please type some text to Preview"}</p>
      </div>
    </>
  );
}

export default Textform;
