import React from "react";
import "./Burger.scss";

function Burger(props) {  

  return (
    <div className="Burger" onClick={props.toggle}>
      <div className={props.isOn ? "Burger-line active" : "Burger-line"}></div>
    </div>
  )    
}

export default Burger;