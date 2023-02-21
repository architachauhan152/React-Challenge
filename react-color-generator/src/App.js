import React, { useState } from "react";
import "./App.css";
import Values from "values.js";
import SingleColor from "./components/SingleColor";

function App() {
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [list, setList] = useState(new Values("#f15025").all(10));
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      let colors = new Values(color).all(10);
      setList(colors);
      console.log(colors)
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };
  return (
    <>
      <section className="container">
        <h3>Color Generataor</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={color}
            onChange={(e) => setColor(e.target.value)}
            placeholder="enter hexa value"
            className={`${error ? "error" : null}`}
          />
          <button className="btn" type="submit">
            Submit
          </button>
        </form>
      </section>
      <section className="colors">
        {
          list.map((colorName, index) =>{
            return (
              <SingleColor key={index}
              {...color}
              index={index}
              hexcolor={color.hex} />
            )
          })
        }

      </section>
    </>
  );
}

export default App;
