import React, { useState } from "react"

export default function TextForm(props) {
  const HandleUpClick = () =>{
    //console.log("Uppercase Was Clicked" + text);
    let newText= text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase" ,"success")
  }
  const HandleLowClick =()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase" ,"success")
  }
  const HandleClearClick =()=>{
    let newText = ""; 
    setText(newText);
   
  }
  
  const HandleOnChange = (event) =>{
    //console.log("On change");
    setText(event.target.value)
    
  }

  /*const handleCopy = () => {
      console.log("copy button clicked");
      let copy= document.getElementById("textbox")
      text.select();
      navigator.clipboard.writeText(text.value);
  }*/


  const [text, setText] = useState("Enter Text Here");
  //text="UpperText " This is a wrong way to change the state
  //setText("setting text ") This is the correct way to change the state

  return (
    <>
    <div className="container" style={{color: props.mode === "dark" ? "white" : "black"}}>
      <h2>{props.heading}</h2>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={HandleOnChange}
          style={{backgroundColor: props.mode === "dark" ? "#50696e" : "white" , color:props.mode === "dark" ? "white" : "black"}}
          id="textbox"
          rows="10"
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={HandleUpClick}>UpperCase</button>
      <button className="btn btn-primary mx-3" onClick={HandleLowClick}>LowerCase</button>
      <button className="btn btn-primary mx-2" onClick={HandleClearClick}>Clear</button>
      {/*<button className="btn btn-primary mx-2" onClick={handleCopy}>Copy</button>*/ }
      
      
    </div>
    <div className="container my-4" style={{color: props.mode === "dark" ? "white" : "black"}}>
      <h2>Text Summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters </p>
      <p>{0.008 * text.split(" ").length } time to read whole text </p>
      <h3>Preview</h3>
      <p>{text.length>0?text : "Enter your text in the box to preview"}</p>
    </div>
    </>
  );
}
