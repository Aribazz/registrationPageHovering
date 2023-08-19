import React, { useState } from "react";

function App() {

  const [headingText, setHeading] = useState("Hello");
  const [isMouseOver,setMouseOver]= useState(false);
  function handleClicked(){
    setHeading("Details");
  }
  function mouseOver(){
setMouseOver(true)
  }
  function mouseOut(){
    setMouseOver(false)
  }
  return (
    <div className="container">
      <h1>{headingText}</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={{backgroundColor:isMouseOver ?"black": "white"}} 
      onClick={handleClicked}
      onMouseOver={mouseOver}
      onMouseOut={mouseOut}>Submit</button>
    </div>
  );
}

export default App;
