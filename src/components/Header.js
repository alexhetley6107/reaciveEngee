import React from "react";
import { NavLink } from "react-router-dom";
import Menu from "./Menu";
import "./../styles/Header.scss";

function Header() {
  return (
    <header className="Header">
      <div className="Header-wrap">
        <NavLink to="/" className="Header-title">ENGEE</NavLink>
        <Menu/>
        <div className="Header-ava"></div>
      </div>
      
    </header>
  )    
}

export default Header;