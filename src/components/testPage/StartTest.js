import React from "react";
import "./../../styles/TestPage.scss";
import ChooseList from "./ChooseList";

function StartTest({start}) {
  return (
    <div className="StartTest">
      <ChooseList/>
      <div className="start-btn" onClick={start}>start</div>
    </div>
  )    
}

export default StartTest;