// Understanding state
// import { useState } from "react"
import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("Enter Your Text");
    const handleUpClick = () => {
        // console.log(text);
        const myText = text.toUpperCase();
        setText(myText);
    }
    const handleOnChange = (event) => {
        // console.log("Hello1");
        setText(event.target.value)
    }
  return (
      <div>
          <h1> {props.heading} - {text}</h1>
          <div className="form-group">
            <textarea className="form-control" id="exa" placeholder='Hello How are you ?' value={text} onChange = {handleOnChange} rows="5"></textarea>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert To UpperCase</button>
         </div>
      
     </div>
  )
}
