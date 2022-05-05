import React, { useContext, useRef } from "react";
import "./MyBtn.scss";

function MyBtn(props) {

  const btn = useRef();  

  function mouseOver() {
    if(document.documentElement.clientWidth >= "1000"){
      btn.current.style.backgroundColor = "white";
      btn.current.style.borderColor = props.back;
      btn.current.style.color = props.back;
    }
  }  
  function mouseOut() {
      btn.current.style.backgroundColor = props.back;
      btn.current.style.borderColor = props.border;
      btn.current.style.color = "white"; 
    
  }

  return (
    <button className="MyBtn" ref={btn} 
      onClick={props.method}
      onMouseOver={mouseOver} onMouseOut={mouseOut}
      style={{border:`${props.big ?"3px":"2px"} solid ${props.border}`, 
        backgroundColor: props.back,
        fontSize: props.big ? "2.5rem" : "1.7rem",
        lineHeight: props.big ? "2rem" : "1.7rem",
        padding: props.big ? "1rem 1.5rem" : "0.5rem 1rem",
        color: 'white',
        opacity: props.transparent ? 0.25 : 1
      }}>
      {props.children}      
    </button>
  )    
}

export default MyBtn;