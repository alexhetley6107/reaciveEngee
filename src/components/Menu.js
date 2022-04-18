import React from "react";
import { NavLink } from "react-router-dom";
import "./../styles/Menu.scss";

function Menu() {
  return (
    <div className="Menu">
      <NavLink to="/learn" className="Menu-btn Menu-learn"><p>Learn</p></NavLink>
      <NavLink to="/test"  className="Menu-btn Menu-test" ><p>Test</p></NavLink>     
      <NavLink to="/list" className="Menu-btn Menu-list"><p>Lists</p></NavLink>       
      
    </div>
  )    
}

export default Menu;