import React from "react";
import "./../../styles/TestPage.scss";

function EndLearn(props) {
  return (
    <div className="End-Test">
      <h3>All selected words are learned</h3>
      <p className="End-Test-sub">You can Test yourself!</p>
      <div className="start-learn-btn" onClick={props.endLearn}>Repeat</div>
    </div>
  )    
}

export default EndLearn;