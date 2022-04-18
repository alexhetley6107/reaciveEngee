import React from "react";
import "./../../styles/TestPage.scss";

function RightAnswer({showNext}) {
  return (
    <div className="right-wrapper">
      <h2>Right</h2>
      <div className="right-btn" onClick={showNext}>Next</div>
    </div>
  )    
}

export default RightAnswer;