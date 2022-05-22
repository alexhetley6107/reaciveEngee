import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./MenuBurger.scss";
import Endorse from "../../Endorse/Endorse";

function MenuBurger(props) {

  const [isOut, setOut] = useState(false);

  return (

    <nav className="MenuBurger" onClick={props.toggle}>
      <div className="MenuBurger-wrap" onClick={(e) => e.stopPropagation()}>        
        <NavLink to="/learn" className="Menu-btn" 
          onClick={props.toggle}><p>Learn</p></NavLink>
        <NavLink to="/test"  className="Menu-btn " 
          onClick={props.toggle}><p>Test</p></NavLink>     
        <NavLink to="/list" className="Menu-btn " 
          onClick={props.toggle}><p>Lists</p></NavLink> 
        <div className="Menu-btn" 
          onClick={()=>{props.toggle(); props.logOut();}}><p>Log Out</p>
        </div>
      </div>   
    </nav>
  )    
}

export default MenuBurger;