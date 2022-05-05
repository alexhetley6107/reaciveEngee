import React from "react";
import { NavLink } from "react-router-dom";
import "./MenuBurger.scss";

function MenuBurger(props) {
  return (
    <nav className="MenuBurger" onClick={props.toggle}>
      <div className="MenuBurger-wrap" onClick={(e) => e.stopPropagation()}>
        <NavLink to="/learn" className="Menu-btn" 
          onClick={props.toggle}><p>Learn</p></NavLink>
        <NavLink to="/test"  className="Menu-btn " 
          onClick={props.toggle}><p>Test</p></NavLink>     
        <NavLink to="/list" className="Menu-btn " 
          onClick={props.toggle}><p>Lists</p></NavLink> 
      </div>
             
    </nav>
  )    
}

export default MenuBurger;