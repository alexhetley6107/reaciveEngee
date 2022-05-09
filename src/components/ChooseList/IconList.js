import React, { useContext, useRef } from "react";

function IconList(props) {

  const btn = useRef();  

  function mouseOver() {
    btn.current.style.backgroundColor = "white";
    btn.current.style.borderColor = props.choosen ? "green": "red";
    btn.current.style.color = props.choosen ? "green": "red";
  }
  
  function mouseOut() {
    btn.current.style.backgroundColor = props.choosen ? "green": "red";
    btn.current.style.borderColor = "white";
    btn.current.style.color = "white";
  }

  return (
    <div className="IconList">
      <p className="IconList-name">{props.name}</p>
      <p className="IconList-amount">{props.amount} words</p>
      <div className="IconList-btn" ref={btn}
      style={props.choosen ? {backgroundColor: "green"} 
      : {backgroundColor: "red", opacity: 0.5}}
      onMouseOver={mouseOver} onMouseOut={mouseOut}
      onClick={()=>{ props.choose(props.name); mouseOut();}}>
        {props.choosen ? "ON" : "OFF"}</div>
    </div>
  )    
}

export default IconList;