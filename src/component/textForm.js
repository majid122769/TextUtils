import React , { useState } from 'react'



export default function TextForm(props) {
    const [text, setText] = useState('');
    
    //setText("new text")
    const handleUpClick = ()=>{
      //  console.log("upercase was clicked: " + text);
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("converted to uppercase","success"); 
    }
    const handleLowClick = ()=>{
        //  console.log("upercase was clicked: " + text);
          let newText= text.toLowerCase();
          setText(newText);
          props.showAlert("converted to lowercase","success"); 
      }
    const handleOnChange = (event)=>{
      //  console.log("On change");
        setText(event.target.value);

    }
    const handleDownload = ()=>{
        const element = document.createElement("a");
        const file = new Blob([document.getElementById('myBox').value], {type: 'text/plain'});
        element.href = URL.createObjectURL(file);
        element.download = "myFile.txt";
        document.body.appendChild(element); // Required for this to work in FireFox
        element.click();
        props.showAlert("downloading your file below","success"); 
    }
    const handleClear = ()=>{
        setText('');
        props.showAlert("text cleared","success"); 
    }
    const handleCopy =()=>{
      var text = document.getElementById("myBox");
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert("Copied to Clipboard","success"); 
    }
    // const handleExtraSpaces =()=>{
    //   var text = document.getElementById("myBox");
    //   let newText =
    //   setText(newText);

    // }
 
  return (
    <>

    <div className='container' style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
         <div className="mb-3">
    <textarea className="form-control "  style={{backgroundColor: props.mode==='dark'?'#042743':'white', color: props.mode==='dark'?'white':'black'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    </div>
    <button type="button" class="btn btn-primary mx-1" onClick={handleDownload}>
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-download" viewBox="0 0 16 16">
  <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
  <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
</svg>
    </button>
    <button className="btn btn-primary my-1" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
    <button className="btn btn-primary " onClick={handleClear}>Clear</button>
    <button className="btn btn-primary mx-1 " onClick={handleCopy}>Copy</button>
    {/* <button  className="btn btn-primary mx-1 " onClick={handleExtraSpaces}>remove Extra Spaces</button> */}
    </div>
    
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h2>Your text summary here</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p> {0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>

        <p>{text.length>0?text:"Enter something to preview it here."}</p>
        
    </div>
    
    </>
  )
}

