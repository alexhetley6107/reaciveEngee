import React from "react";
import ChooseList from "../testPage/ChooseList";
import "./../../styles/LearnPage.scss";
import "./../../styles/TestPage.scss";

function StartLearn(props) {

  return (
    <div className="StartLearn">
      <ChooseList lists={props.lists} choose={props.choose} forLearn={"yes"}/>
      <div className="start-learn-btn" onClick={props.start}>start</div>
    </div>
  )    
}

export default StartLearn;