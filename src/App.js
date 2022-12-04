import Navbar from './compnents/Navbar';
import './App.css';
import Textform from './compnents/Textform';
import React, {useState} from 'react';
import About from './compnents/About';




function App() {
  const [mode,setMode] = useState('light');

  const toggleMode =()=>{
    if(mode ==='light'){
    setMode('dark')  
    document.body.style.backgroundColor = '#042743';
    }
    else{
    setMode('light')
    document.body.style.backgroundColor = 'white';
    }
  }

  
  return (
  <>
     <div className=" App ">
       <Navbar title="Text Manipulating" mode={mode} toggleMode={toggleMode} />
     
      <div className="container">
      
       <Textform heading="Enter Your Text Below!" mode={mode} />
       <About/>
        
       </div>     
  </div>
  </>
  );
}

export default App;
