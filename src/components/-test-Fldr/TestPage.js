import React, {useState} from "react";
import "./TestPage.scss";
import StartTest from "./StartTest";
import Testing from "./Testing";
import EndTest from "./EndTest";

const TestPage = props => {
  
  const [isEndTest, setEndTest] = useState(false);  
  const [engMode, setEngMode] = useState(true);  

  return (
    <section className="TestPage">
      
      { props.isTesting 
        ?       
      <Testing words={props.words} end={props.end} isEndTest={isEndTest} 
      setEndTest={()=>{setEndTest(true)}} engMode={engMode}/>
      : <>
      { isEndTest 
        ?          
      <EndTest endTest={()=>{ setEndTest(false)}} engMode={engMode}/>
      :
      <StartTest lists = {props.lists} choose={props.choose} chooseAll={props.chooseAll}
      engMode={engMode} changeMode={()=>{setEngMode(!engMode)}} scroll={props.scroll}
      trans={props.trans}
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
      
    </section>
  )    
}

export default TestPage;