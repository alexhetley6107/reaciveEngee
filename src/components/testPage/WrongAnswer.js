import React from "react";
import "./../../styles/TestPage.scss";

function WrongAnswer({tryAgain}) {
  return (
    <div className="wrong-wrapper">
      <h2>Wrong</h2>
      <div className="wrong-btn" onClick={tryAgain}>Try again</div>
    </div>
  )    
}

export default WrongAnswer;