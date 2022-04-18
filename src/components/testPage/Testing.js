import React,  {useRef} from "react";
import "./../../styles/TestPage.scss";


function Testing(props) {

  const testInput = useRef();
  
  return (
    <div className="Testing">
    <p className="Test-x" onClick={props.stop}>×</p>
    <div className="Test-quest">{props.quest.engWord} - ...</div>
    <div className="Test-form">
      <input className="Test-input" type="text"  ref={testInput} placeholder="translate" />
      <div className="Test-check-btn" 
      onClick={()=>{props.check(testInput.current.value)}}>check</div>
    </div>
  
    <div className="Test-next-btn" 
    onClick={()=>{props.next(); testInput.current.value = "";}}>next</div>
  </div>
  )
}
export default Testing;