import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Nav from "./Nav/Nav";
import "./Header.scss";
import Burger from "./Burger/Burger";
import MenuBurger from "./MenuBurger/MenuBurger";

function Header(props) {

  const [isMenu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!isMenu);
    document.body.classList.toggle("lock");
  }
 

  return (
    <header className="Header">
      <NavLink to="/" className="Header-title" onClick={()=>{setMenu(false)}}>ENGEE</NavLink>
      <Nav  />
      <div className="Header-wrap">        
        <div className="Header-user">
          <div className="Header-name">Hetley</div>
          <div className="Header-ava"></div>
        </div>
        <Burger isOn={isMenu} toggle={toggleMenu}/>          
      </div>

      {isMenu && <MenuBurger toggle={toggleMenu} />}
    </header>
  )    
}

export default Header;