import React from "react";
import "./../../styles/TestPage.scss";

function EndTest({endTest}) {
  return (
    <div className="End-Test">
      <h3>All words are checked</h3>
      <p className="End-Test-sub">You are awesome!</p>
      <div className="start-btn" onClick={endTest}>Great</div>
    </div>
  )    
}

export default EndTest;