import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {

  const [getFlag,setFlag] = useState(false);

  const onClickHandler=()=>{
    setFlag(true);
  }

  return (
    <div id="main">
      // Do not alter the main div
      <button onClick={onClickHandler} id="click">Show</button>
      {getFlag && <p id="para">Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy</p>}
    </div>
  );
}


export default App;
