import React, { useState } from "react";
import "./Calculator.css";

function Calculator() {
  const [result, setResult] = useState("");

  const clickHandle = e => {
    setResult(result.concat(e.target.value));
  };

  const clearDisplay = () => {
    setResult(" ");
  };

  const calculateItems = () => {
    setResult(eval(result).toString());
  };

  return (
    <div className="calculator">
      <input type="text" placeholder="Enter Here" id="answer" value={result} />
      <input type="button" value="7" className="button" onClick={clickHandle} />
      <input type="button" value="8" className="button" onClick={clickHandle} />
      <input type="button" value="9" className="button" onClick={clickHandle} />
      <input
        type="button"
        value="/"
        className="button button2"
        onClick={clickHandle}
      />
      <input type="button" value="4" className="button" onClick={clickHandle} />
      <input type="button" value="5" className="button" onClick={clickHandle} />
      <input type="button" value="6" className="button" onClick={clickHandle} />
      <input
        type="button"
        value="*"
        className="button button2"
        onClick={clickHandle}
      />
      <input type="button" value="1" className="button" onClick={clickHandle} />
      <input type="button" value="2" className="button" onClick={clickHandle} />
      <input type="button" value="3" className="button" onClick={clickHandle} />
      <input
        type="button"
        value="+"
        className="button button2"
        onClick={clickHandle}
      />
      <input type="button" value="." className="button" onClick={clickHandle} />
      <input type="button" value="0" className="button" onClick={clickHandle} />
      <input
        type="button"
        value="="
        className="button"
        onClick={calculateItems}
      />
      <input
        type="button"
        value="-"
        className="button button2"
        onClick={clickHandle}
      />
      <input
        type="button"
        value="Clear"
        className="button button1"
        onClick={clearDisplay}
      />
    </div>
  );
}

export default Calculator;
