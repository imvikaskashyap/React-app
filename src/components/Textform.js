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

  const upperOnChange = (event) => {
    // console.log("Upper change was clicked");
    setText(event.target.value);
  };

  const [text, setText] = useState("Type your text");
  //   setText("Please type your text");

  return (
    <>
      <div className="m-5">
        <h1 className="">{props.heading}</h1>
        <textarea
          className="form-control my-3"
          onChange={upperOnChange}
          value={text}
          id="textForm"
          rows="8"
        ></textarea>
        <button className="btn btn-primary" onClick={upperCaseClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-info m-2" onClick={lowerCaseClick}>
          Convert to Lowercase
        </button>
      </div>
    </>
  );
}

export default Textform;
