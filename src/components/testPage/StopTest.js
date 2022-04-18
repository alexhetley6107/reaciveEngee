import React from "react";
import "./../../styles/TestPage.scss";

function StopTest(props) {
  return (
    <div className="Stop-Test">
      <p className="Stop-Test-sub">Do you want to stop testing?</p>
      <div className="Stop-btns">
        <div className="Stop-yes" onClick={props.yes}>YES</div>
        <div className="Stop-no" onClick={props.no}>NO</div>
      </div>
     
    </div>
  )    
}

export default StopTest;