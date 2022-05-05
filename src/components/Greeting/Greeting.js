import React from "react";
import "./Greeting.scss";
import MyBtn from "../MyBtn/MyBtn";
import { NavLink } from "react-router-dom";

function Greeting(props) {

  const words = props.words;

  return (
    <section className="GreetPage"> 
      <h1>ENGEE greets you!</h1>
      <h3>Learning foreign words for free</h3>
     {/*  <h3>Several lists with words are available to you. </h3>
      <h4>Create your lists, learn, memorize and take tests.</h4> 
      <h2> Good luck in learning foreign languages!</h2> */}

      <NavLink to="/learn" className="Menu-btn Menu-learn">
        <MyBtn big={true} border={"peachpuff"} back={"blue"}
        method={props.showScroll}>get started</MyBtn>
      </NavLink>
      
    </section> 
  )    
}

export default Greeting;