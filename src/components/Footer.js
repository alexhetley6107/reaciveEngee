import React from "react";
import { NavLink } from "react-router-dom";
import "./../styles/Footer.scss";

function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer-wrap">
        <NavLink to="/" className="Footer-title">ENGEE</NavLink>
        <div className="Footer-links">
          <NavLink to="/learn" className="Footer-btn">Learn</NavLink>
          <NavLink to="/test"  className="Footer-btn" >Test</NavLink>     
          <NavLink to="/list" className="Footer-btn">Lists</NavLink>   
      
        </div>
      </div>
      <div className="Footer-author">
        Made by <a href="https://www.linkedin.com/in/aleksandr-bredun-785b8b1b9/" target="blank">Aleks Bredun</a>
      </div>
    </footer>
  )    
}

export default Footer;