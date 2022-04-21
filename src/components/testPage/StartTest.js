import React from "react";
import "./../../styles/TestPage.scss";
import ChooseList from "./ChooseList";
import LangMode from "./LangMode";

function StartTest(props) {

  return (
    <div className="StartTest">
     {/*  <LangMode/> */}
      <ChooseList lists={props.lists} choose={props.choose} forLearn={"no"}/>
      <div className="start-btn" onClick={props.start}>start</div>
    </div>
  )    
}

export default StartTest;