import React, {useState} from "react";
import "./../../styles/Content.css";
import "./../../styles/TestPage.scss";
import StartTest from "./StartTest";
import Testing from "./Testing";
import EndTest from "./EndTest";

const TestPage = props => {
  
  const [isEndTest, setEndTest] = useState(false);  

  return (
    <div className="TestPage">
      
      { props.isTesting 
        ?       
      <Testing words={props.words} end={props.end}
      isEndTest={isEndTest} 
      setEndTest={()=>{setEndTest(true)}}/>
      : <>
      { isEndTest 
        ?          
      <EndTest endTest={()=>{ setEndTest(false); }}/>
      :
      <StartTest lists = {props.lists} choose={props.choose}
      start={() => { 
        if(props.lists.length !== 0 
          && !props.lists.every(list => list.forTest === false)
          && !props.lists.filter(list => list.forTest === true)
          .every(list => list.words.length === 0)) {
            props.start();
            props.setWordsForTest(); 
        } }}  /> 
      }
      </>      
    }
      
    </div>
  )    
}

export default TestPage;