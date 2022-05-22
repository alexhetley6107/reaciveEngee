import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.scss";

function Nav(props) {
  return (
    <nav className="Nav">
      <NavLink to="/reaciveEngee/learn" className="Nav-btn Nav-learn">
        <p >Learn</p></NavLink>
      <NavLink to="/reaciveEngee/test" className="Nav-btn Nav-test" >
        <p >Test</p></NavLink>     
      <NavLink to="/reaciveEngee/list" className="Nav-btn Nav-list"><p>Lists</p></NavLink>        
    </nav>
  )    
}

export default Nav;