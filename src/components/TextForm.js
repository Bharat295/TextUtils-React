// Understanding state
// import { useState } from "react"
import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpClick = () => {
        // console.log(text);
        const myText = text.toUpperCase();
        setText(myText);
        props.showAlert("Converted to Uppercase", "Success");
    }
    const handleLoClick = () => {
        // console.log(text);
        const myText = text.toLowerCase();
        setText(myText);
        props.showAlert("Converted to Lowercase", "Success");
    }
    const handleClearClick = () => {
        // console.log(text);
        
        setText("");
        props.showAlert("Text is Cleared", "Success");
    }
    const handleOnChange = (event) => {
        // console.log("Hello1");
        setText(event.target.value)
    }
    const handleCopy = (event) => {
        // console.log("Hello1");
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text copied to clipboard ", "Success");

    }
    const handleRemoveExtraSpace = (event) => {
         
    }
    return (
      <>  
          <div style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h1> {props.heading} , {props.mode}</h1>
          <div className="form-group">
            <textarea mb-3 className="form-control" style={{ backgroundColor: props.mode === 'dark' ? '#0f1743' :'white' , color: props.mode === 'dark' ? 'white' : 'black'} } id="myBox" value={text} placeholder='Hello, How are you ?'  onChange = {handleOnChange} rows="5"></textarea>
          </div>
            <button className="btn btn-primary " onClick={handleUpClick}>Convert To UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleRemoveExtraSpace}>Copy Text</button>
         
      </div>
            <div className='my-3' style={{color: props.mode === 'dark' ? 'white' : 'black'}}>
                <h1>Your Text's Info is Here !!</h1>
                <p>It contains {text.length > 0 ?  text.split(" ").length : 0} words and {text.length} characters</p>      
                <p>{(0.008 * (text.length > 0 ? text.split(" ").length : 0))} Minute read</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Enter some text to preview"}</p>
            </div>
      </>
  )
}
