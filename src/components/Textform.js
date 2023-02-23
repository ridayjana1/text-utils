import React, {useState} from 'react';


export default function TextForm(props){
    const handleUpClick = () =>{
        // console.log("Uppercase was clicked" + text)
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Convert to uppercase",`${props.mode}`);
        
    }
    const handleLoClick = () =>{
        // console.log("Uppercase was clicked" + text)
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase",`${props.mode}`);

    }
    const handleOnChange=(event)=>{
        // console.log("On change")
        setText(event.target.value);
    }
    const clear=()=>{
        let clearText = '';
        setText(clearText);
        props.showAlert("clear text", `${props.mode}`);

    }

    const [text, setText] = useState('Enter the text here')
    return(
        <>
        <div className='container' style={{backgrounColor: props.mode === 'dark'?'grey':'white', color: props.mode==='dark'?'white':'black'
                }}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <label htmlFor="myBox" className="form-label">Example Textarea</label>
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="3" style={{backgrounColor: props.mode === 'dark'?'white':'dark', color: props.mode==='dark'?'black':'black'
                }}></textarea>
            </div> 
            <button className="btn btn-primary mx-2" onClick={handleUpClick}>convert to uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>convert to Lowercase</button>
            <button className="btn btn-primary my-2 mx-2" onClick={clear}>Clear text </button>
        </div>
        <div className="container my-3" style={{backgrounColor: props.mode === 'dark'? 'white':'dark', color: props.mode==='dark'?'white':'black'}}>
            <h1>Your text summary</h1>
            <p>{text.split("").length} words and text are {text.length} characters</p>
            <p>{0.08 * text.split("").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    );
}