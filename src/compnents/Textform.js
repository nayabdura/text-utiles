import React, {useState} from 'react';

export default function Textform(props) {
    const handleUpclick =()=>{
 let newText= text.toUpperCase();
   setText(newText);
    }
    const handleClearclick =()=>{
        let newText= "";
          setText(newText);
           }
    const handleloclick =()=>{
  let newText =text.toLowerCase();
  setText(newText);
    }
    const handleExtraSpaces = ()=>{
        let newText = text.replace(/\s+/g, ' ').trim();
        setText(newText)
        }
    
    const reversed = () => {
        let splitWord = text.split("");
    
        let reverseWord = splitWord.reverse("");
        let joinedWords = reverseWord.join("");
        let newText = joinedWords
    
        setText(newText);
      };
      const handleCapitalizeFirstLetter = () => {
        let newText = text.toLowerCase().split(' ');
        for (let i = 0; i < newText.length; i++) {
           newText[i] = newText[i].charAt(0).toUpperCase() + newText[i].substring(1);
        }
        setText(newText.join(' '));
    }
    const handleCopyClick = (event) => {
        navigator.clipboard.writeText(text);
        setText(text);
      };

    const speak = () => {
        let msg = new SpeechSynthesisUtterance();
        msg.text = text;
        window.speechSynthesis.speak(msg);
      }

    const handleOnChange =(event)=>{
     setText(event.target.value)   
    }
    const [text, setText] = useState('Enter Text Here!');
    return (
        <>
        <div className="container " style ={{color : props.mode==='light' ? 'black' : 'white'} }>
           <h1>{props.heading}</h1>
              <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange}  id="myBox" rows="8"></textarea>
            <button className="btn btn-primary m-1" onClick={handleUpclick}>Convert to Uppercase</button>
           <button className="btn btn-primary m-1" onClick={handleloclick}>Convert to Lowercase</button>
           <button className="btn btn-primary m-1" onClick={handleClearclick}>Clear Text</button>
           <button className="btn btn-primary m-1" onClick={handleExtraSpaces}>Remove Extra Spaces </button>
           <button className="btn btn-primary mx-2" onClick={handleCapitalizeFirstLetter}>Capitalize First Letter</button>
           <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy to Clipboard</button>
           <button className="btn btn-primary m-1" onClick={reversed}>Reverse </button>
           <button className="btn btn-primary m-1" onClick={speak}>Voice Text</button>
        </div>
        </div>
        <div>
            <div className="container " style ={{color : props.mode==='light' ? 'black' : 'white'} }>
         <h1>Your Text Summary</h1>
         <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} Words and {text.length} Characters</p>
         <p>You can read this paragraph in {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes</p>
        </div>
        </div>

        </>
    )
}
