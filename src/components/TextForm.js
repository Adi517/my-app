import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick = ()=>{
    // console.log("UpperCase was Clicked" + Text);
    let newText = Text.toUpperCase();
    setText(newText)
    props.showAlert("Convertwd to uppercase!" , "success")
  }
  const handleLoClick = ()=>{
    // console.log("UpperCase was Clicked" + Text);
    let newText = Text.toLowerCase();
    setText(newText)
    props.showAlert("Convertwd to lowercase!" , "success")
  }
  const handleReverseClick = ()=>{
    // console.log("UpperCase was Clicked" + Text);
    let words = Text.split(" ");
    let reverseWords = words.reverse();
    let reversePara = reverseWords.join(" ");
    setText(reversePara)
    props.showAlert("Reversed!" , "success")
  }
  const handleBrailClick = ()=>{
    let brailleLetters = {
      'a': '⠠⠁', 'b': '⠠⠃', 'c': '⠠⠉', 'd': '⠠⠙', 'e': '⠠⠑',
      'f': '⠠⠋', 'g': '⠠⠛', 'h': '⠠⠓', 'i': '⠠⠊', 'j': '⠠⠚',
      'k': '⠅⠁', 'l': '⠇⠁', 'm': '⠍⠁', 'n': '⠝⠁', 'o': '⠕⠁',
      'p': '⠏⠁', 'q': '⠟⠁', 'r': '⠗⠁', 's': '⠎⠁', 't': '⠞⠁',
      'u': '⠥⠁', 'v': '⠧⠁', 'w': '⠺⠁', 'x': '⠭⠁', 'y': '⠽⠁',
      'z': '⠵⠁',
      ' ': '⠀⠀'
    };
    let newText = Text.toLowerCase();
    let brailRepresentation = brailleLetters[newText] || ' ';
    setText(brailRepresentation);
  }

  const handleResetClick = ()=>{
    let newText =''
    setText(newText)
  }
  const handleCopyClick = ()=>{
    let texts = document.getElementById("myBox");
    texts.select();
    navigator.clipboard.writeText(texts.value);
  }
  const handleOnChange = (event)=>{
    // console.log("on Change");
    setText(event.target.value);
  }
  const [Text, setText] = useState('');
  return (
    <>
    <div className="container" style={{color: props.mode === 'dark'?'white':'#0f0230'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={Text} onChange={handleOnChange} style={{backgroundColor: props.mode === 'dark'?'#0f0230':'white' , color: props.mode === 'dark'?'white':'#0f0230'}} id="mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleReverseClick}>Reverse pragraph</button>
      <button className="btn btn-primary mx-1" onClick={handleBrailClick}>Letter to Brail</button>
      <button className="btn btn-primary mx-1" onClick={handleCopyClick}>Copy</button>
      <button className="btn btn-primary mx-1" onClick={handleResetClick}>Reset</button>
    </div>
    
    <div className="container my-4" style={{color: props.mode === 'dark'?'white':'#0f0230'}}>
        <h2>Your summary</h2>
        <p>{Text.split(" ").length} words and {Text.length} characters</p>
        <p>{0.008*Text.split(" ").length} Minutes to read</p>
        <h2>Preivew</h2>
        <p>{Text}</p>
    </div>
  </>
  )
}
