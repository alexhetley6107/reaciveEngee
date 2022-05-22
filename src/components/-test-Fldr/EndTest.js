import React from "react";
import MyBtn from "../MyBtn/MyBtn";
import "./TestPage.scss";
import { NavLink } from "react-router-dom";

function EndTest({endTest}) {
  return (
    <div className="EndTest">
      <h3 className="EndTest-title">All words are checked</h3>
      <p className="EndTest-sub">You are awesome!</p>
      <p className="EndTest-sub">Add new words to the lists!</p>

      <div className="EndTest-btns">
        <MyBtn big={true} border={'palegreen'} back={'darkorange'}
          method={endTest}>great</MyBtn>
        <div className="EndTest-sep"></div>
        <NavLink to="/reaciveEngee/list" >
          <MyBtn big={true} border={'palegreen'} back={'darkblue'}>lists</MyBtn> 
        </NavLink>
      
      </div>
    </div>
  )    
}

export default EndTest;