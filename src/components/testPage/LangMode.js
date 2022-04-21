import React from "react";
import "./../../styles/LangMode.scss";

function LangMode(props) {

  return (
    <div className="LangMode">
      <div className="LangMode-title">Select translate mode</div>
      <div className="LangMode-wrap"> 
        <div className="LangMode-btn" onClick={{}}>English ➜ Russian</div>
        <div className="Langmode-sep"></div>
        <div className="LangMode-btn" onClick={{}}>Russian ➜ English</div>
      </div>
      
    </div>
  )    
}

export default LangMode;