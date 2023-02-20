import React, {useState} from "react"
import './App.css';
import Data from "./data"
import List from "./List";

function App() {
  const [people, setPeople]=useState(Data)
  return (
    <div className="App">
      <h3>{people.length} Students</h3>
      <List people={people}/>
      <button onClick={() =>{
        setPeople({})
      }}>Clear All</button>
      
    </div>
  );
}

export default App;
