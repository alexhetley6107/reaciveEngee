import React,  {useRef, useState} from "react";
import "./../../styles/TestPage.scss";
import WrongAnswer from "./WrongAnswer";
import Endorse from "./../Endorse";
import EndTest from "./EndTest";
import RightAnswer from "./RightAnswer";

function Testing(props) {

  const words = props.words;

  const testInput = useRef();  
  
  const [quest, setQuest] = useState(words[Math.floor(Math.random() * words.length)]); 
  const [isRightAnswer, setRight] = useState(false);  
  const [isWrongAnswer, setWrong] = useState(false);  
  
  const [isStopTest, setStopTest] = useState(false);    

  
  const checkWord = (input) => {
    if(input === quest.rusWord) {
      quest.isChecked = true;
      setRight(true);
    } else if(input !== "") {
      setWrong(true);
    }

  }

  const showNextWord = () => {
    if(words.every(item => item.isChecked === true) !== true) {

      let item = words[Math.floor(Math.random() * words.length)];

      if(item.isChecked === true){
        showNextWord();
      } else {
        setQuest(item);
        setWrong(false)
      }
    } else {
      props.setEndTest();
      resetCheck();
      props.end();

    }
    
  }

  const resetCheck = () => {
    words.forEach(item => item.isChecked = false);  
    
  }


  return (
  <>
    { !(isRightAnswer || isWrongAnswer) &&

    <div className="Testing">
      <p className="Test-x" onClick={()=>setStopTest(true)}>×</p>
      <div className="Test-quest">{quest.engWord} - ...</div>
      <div className="Test-form">
        <input className="Test-input" type="text"  ref={testInput} placeholder="translate" />
        <div className="Test-check-btn" 
        onClick={()=>{checkWord(testInput.current.value)}}>check</div>
      </div>    
      <div className="Test-next-btn" 
      onClick={()=>{showNextWord(); testInput.current.value = "";}}>next</div>
    </div>
    
    }

    { isRightAnswer && 
    <RightAnswer showNext={()=> {setRight(false); showNextWord()}}/> }

    { isWrongAnswer && 
    <WrongAnswer tryAgain={()=> setWrong(false)}/>} 

   {/*  { isEndTest && 
    <EndTest endTest={()=>{ setEnd(false); props.end();}}/>} */}         
    
    {isStopTest && <Endorse title={"Do you want to stop testing ?"} 
    yes={()=>{setStopTest(false); /* resetCheck(); */ props.end(); }} 
    no={()=>setStopTest(false)}/> }

  </>
  )
}
export default Testing;