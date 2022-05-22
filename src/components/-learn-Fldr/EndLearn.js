import React from "react";
import "./LearnPage.scss";
import MyBtn from "./../MyBtn/MyBtn";
import { NavLink } from "react-router-dom";

function EndLearn(props) {
  return (
    <div className="EndLearn">
      <div className="EndLearn-title">All selected words are learned</div>
      <p className="EndLearn-sub">You can Test yourself!</p>
      <div className="EndLearn-btns">
        <MyBtn big={true} border={'plum'} back={'crimson'}
        method={props.endLearn}>repeat</MyBtn>
        <div className="EndLearn-sep"></div>
        <NavLink to="/reaciveEngee/test" >
          <MyBtn big={true} border={'plum'} back={'darkorange'}>test</MyBtn> 
        </NavLink>
      
      </div>
      
    </div>
  )    
}

export default EndLearn;