// Understanding state
// import { useState } from "react"
import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");
    const handleUpClick = () => {
        // console.log(text);
        const myText = text.toUpperCase();
        setText(myText);
    }
    const handleLoClick = () => {
        // console.log(text);
        const myText = text.toLowerCase();
        setText(myText);
    }
    const handleClearClick = () => {
        // console.log(text);
        
        setText("");
    }
    const handleOnChange = (event) => {
        // console.log("Hello1");
        setText(event.target.value)
    }
    return (
      <>
      <div>
          <h1> {props.heading}</h1>
          <div className="form-group">
            <textarea mb-3 className="form-control" id="exa" value={text} placeholder='Hello, How are you ?'  onChange = {handleOnChange} rows="5"></textarea>
         </div>
            <button className="btn btn-primary " onClick={handleUpClick}>Convert To UpperCase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert To LowerCase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
         
      </div>
      <div className='my-3'>
                <h1>Your Text's Info is Here !!</h1>
                <p>It contains {text.length > 0 ?  text.split(" ").length : 0} words and {text.length} characters</p>      
                <p>{(0.008 * (text.length > 0 ? text.split(" ").length : 0))} Minute read</p>
                <h2>Preview</h2>
                <p>{ text}</p>
            </div>
      </>
  )
}
