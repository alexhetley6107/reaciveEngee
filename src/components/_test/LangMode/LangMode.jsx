import React from "react";
import "./LangMode.scss";

function LangMode(props) {

  return (
    <div className="LangMode">
      <div className="LangMode-title">Select mode</div>
      <div className="LangMode-wrap"> 
        <div className="LangMode-btn" 
          style={props.engMode ? {opacity: 1} : {opacity: 0.4}}
          onClick={()=>{if(!props.engMode){props.changeMode();}}}>Eng ➜ Rus</div>
        <div className="LangMode-sep"></div>
        <div className="LangMode-btn"
          style={!props.engMode ? {opacity: 1} : {opacity: 0.4}}
          onClick={()=>{if(props.engMode){props.changeMode();}}}>Rus ➜ Eng</div>
      </div>
      
    </div>
  )    
}

export default LangMode;