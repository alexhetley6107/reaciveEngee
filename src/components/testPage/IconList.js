import React, { useContext } from "react";
import { WordContext } from "../App";
import "./../../styles/TestPage.scss";

function IconList(props) {

  const choose = useContext(WordContext);

  return (
    <div className="IconList">
      <p className="IconList-name">{props.name}</p>
      <p className="IconList-amount">{props.amount} words</p>
      <div className="IconList-btn"
      style={props.choosen ? {backgroundColor: "green"} : {backgroundColor: "red", opacity: 0.3}}
      onClick={()=>{props.choose(props.name);}}>
        {props.choosen ? "ON" : "OFF"}</div>
    </div>
  )    
}

export default IconList;