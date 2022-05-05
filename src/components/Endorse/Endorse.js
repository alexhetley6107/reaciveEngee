import React from "react";
import "./Endorse.scss";
import MyBtn from "../MyBtn/MyBtn";

function Endorse(props) {

  return (
    <div className="Endorse" onClick={props.no}>     
      <div className="Endorse-wrap" onClick={(e) => e.stopPropagation()}>
        <div className="Endorse-title">{props.title}</div>        
        <div className="Endorse-btns">
          <MyBtn big={true} border={'white'} back={'crimson'}
            method={props.yes}>yes</MyBtn>
          <div className="Endorse-sep"></div>
          <MyBtn big={true} border={'white'} back={'green'}
            method={props.no}>no</MyBtn>
        </div>
      </div>      
    </div>
  )    
}

export default Endorse;