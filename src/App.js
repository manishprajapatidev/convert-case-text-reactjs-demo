import React, { useState } from "react";
import _ from "lodash";
import "./styles.css";

export default function App() {
  const [initalTxt, setInitialTxt] = useState("My Nam is");
  const [convertedTxt, setConvertedTxt] = useState("");

  const convert = () => {
    const convertedText = _.snakeCase(initalTxt);
    setConvertedTxt(convertedText);
  };

  return (
    <div className="App">
      <div className="row">
        <div className="col">
          <textarea
            className="form-control"
            placeholder="Your Text"
            value={initalTxt}
            onChange={e => {
              setInitialTxt(e.target.value);
            }}
          />
        </div>
        <div className="col">
          <textarea
            className="form-control"
            placeholder="Converted Text"
            value={convertedTxt}
            onChange={e => {
              //setConvertedTxt(e.target.value);
            }}
          />
        </div>
      </div>
      <div className="row">
        <button className="btn btn-success" onClick={convert}>
          Convert
        </button>
      </div>
    </div>
  );
}
