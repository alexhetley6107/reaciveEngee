import React, {useRef, useState} from "react";
import "./../../styles/Content.css";
import "./../../styles/TestPage.scss";
import EndTest from "./EndTest";
import RightAnswer from "./RightAnswer";
import StartTest from "./StartTest";
import Testing from "./Testing";
import WrongAnswer from "./WrongAnswer";
import Endorse from "./../Endorse";

const TestPage = props => {

  const words = [].concat(...props.lists.filter(item=> item.isChoosen === true)
  .map(item => item.words))
  
  const [quest, setQuest] = useState(words[Math.floor(Math.random() * words.length)]);  
  const [isRightAnswer, setRight] = useState(false);  
  const [isWrongAnswer, setWrong] = useState(false);  
  const [isEndTest, setEnd] = useState(false);  
  const [isStopTest, setStop] = useState(false);    
  const [isEngMode, setEngMode] = useState(false);    
 

  const checkWord = (input) => {
    if(input === quest.rusWord) {
      quest.isChecked = true;
      setRight(true);
    } else if(input !== "") {
      setWrong(true);
    }

  }

  const showNextWord = () => {
    if(words.every(item => item.isChecked === true) != true) {

      let item = words[Math.floor(Math.random() * words.length)];

      if(item.isChecked === true){
        showNextWord();
      } else {
        setQuest(item);
        setWrong(false)
      }
    } else {
      resetCheck();
      setEnd(true);
    }
    
  }

  const resetCheck = () => {
    words.forEach(item => item.isChecked = false);  
    
  }


  return (
    <div className="TestPage">

      {props.isTesting ? 
      <>
        { !(isRightAnswer || isWrongAnswer || isEndTest) && 
        <Testing stop={()=>setStop(true)} quest={quest} check={checkWord} next={showNextWord}/>
        }

        { isRightAnswer && 
        <RightAnswer showNext={()=> {setRight(false); showNextWord()}}/> }

        { isWrongAnswer && 
        <WrongAnswer tryAgain={()=> setWrong(false)}/>} 

        { isEndTest && 
        <EndTest endTest={()=>{ setEnd(false); props.end();}}/>}         
        
        {isStopTest && <Endorse title={"Do you want to stop testing ?"} yes={()=>{setStop(false); resetCheck(); props.end(); }}
       no={()=>setStop(false)} close={()=>setStop(false)}/> }

      </>
      : 
      <StartTest start={()=>{ if(props.lists.length !== 0) props.start();}}/> 
    }
      
    </div>
  )    
}

export default TestPage;