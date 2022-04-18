import React from "react";
import "./../styles/Content.css";

function GreetPage(props) {

  const words = props.words;

  return (
    <div className="GreetPage"> 
      <h1>ENGEE greets you</h1>
    </div> 
  )    
}

export default GreetPage;