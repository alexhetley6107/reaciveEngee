import React from "react";
import "./../styles/Endorse.scss";

function Endorse(props) {

  return (
    <div className="Endorse">     
      <div className="Endorse-wrap">
        <div className="Endorse-title">{props.title}</div>

        <div className="Endorse-btns">
          <div className="Endorse-yes" onClick={props.yes}>yes</div>
          <div className="Endorse-sep"></div>
          <div className="Endorse-no" onClick={props.no}>no</div>
        </div>
        
      </div>      
    </div>
  )    
}

export default Endorse;