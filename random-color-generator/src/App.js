import './App.css';
import {SketchPicker} from "react-color";
import { useState } from 'react';

function App() {
  const [currentColor, setCurrentcolor]=useState("#ff6")
  const handleonChange=(color)=>{
    setCurrentcolor(color.hex)
  }
  const appStyle={
    backgroundColor:currentColor,
    height:"100vh",
    textAlign:"center"
  }
  
  return (
    <div className="App" style={appStyle}>
      <h1>React Color Picker</h1>
      <SketchPicker 
      color={currentColor} onChangeComplete={handleonChange} />
      <h1>Color Code: {currentColor}</h1>

    </div>
  );
}

export default App;
