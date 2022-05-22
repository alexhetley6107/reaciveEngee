import React from "react";
import "./Greeting.scss";
import MyBtn from "../MyBtn/MyBtn";
import { NavLink } from "react-router-dom";

function Greeting(props) {

  const lists = props.lists.length;
  const words = [].concat(props.lists.map(list => list.words.length))
      .reduce((sum, current) => sum + current, 0);
    

  return (
    <section className="GreetPage"> 
      <h3>Welcome, student!</h3>
      <h1>ENGEE greets you!</h1>
      <h3>Learn, Test and create your own lists with foreign words</h3>
      <h3>now, you have {lists} lists ({words} words)</h3>

      <NavLink to="/reaciveEngee/learn" className="Menu-btn Menu-learn">
        <MyBtn big={true} border={"deepskyblue"} back={"blue"}
        method={props.showScroll}>get started</MyBtn>
      </NavLink>
      
    </section> 
  )    
}

export default Greeting;