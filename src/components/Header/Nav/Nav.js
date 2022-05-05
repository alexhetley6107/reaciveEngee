import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";

function Nav(props) {
  return (
    <nav className="Nav">
      <NavLink to="/learn" className="Nav-btn Nav-learn">
        <p >Learn</p></NavLink>
      <NavLink to="/test" className="Nav-btn Nav-test" >
        <p >Test</p></NavLink>     
      <NavLink to="/list" className="Nav-btn Nav-list"><p>Lists</p></NavLink>        
    </nav>
  )    
}

export default Nav;