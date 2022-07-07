import React, { useState } from "react"

export default function TextForm(props) {
  const HandleUpClick = () =>{
    //console.log("Uppercase Was Clicked" + text);
    let newText= text.toUpperCase();
    setText(newText);
  }
  const HandleLowClick =()=>{
    let newText = text.toLowerCase();
    setText(newText);
  }
  const HandleOnChange = (event) =>{
    //console.log("On change");
    setText(event.target.value)
    
  }
  const [text, setText] = useState("Enter Text Here");
  //text="UpperText " This is a wrong way to change the state
  //setText("setting text ") This is the correct way to change the state

  return (
    <>
    <div className="container">
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={HandleOnChange}
          id="textbox"
          rows="10"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={HandleUpClick}>UpperCase</button>
      <button className="btn btn-primary mx-4" onClick={HandleLowClick}>LowerCase</button>
      
    </div>
    <div className="container my-4">
      <h2>Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters </p>
      <p>{0.008 * text.split(" ").length } time to read whole text </p>
      <h3>Preview</h3>
      <p>{text}</p>
    </div>
    </>
  );
}
