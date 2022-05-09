import React,  {useRef, useState} from "react";
import "./TestPage.scss";
import WrongAnswer from "./WrongAnswer";
import Endorse from "./../Endorse/Endorse";
import EndTest from "./EndTest";
import RightAnswer from "./RightAnswer";
import MyBtn from "./../MyBtn/MyBtn";

function Testing(props) {

  const words = props.words;
  const engMode = props.engMode;

  const testInput = useRef();  
  
  const [quest, setQuest] = useState(words[Math.floor(Math.random() * words.length)]); 
  const [isRightAnswer, setRight] = useState(false);  
  const [isWrongAnswer, setWrong] = useState(false);   
  const [isStopTest, setStopTest] = useState(false);    

  
  const checkWord = (input, e) => {
    let answer = engMode ? quest.rusWord : quest.engWord;
    if(input === answer) {
      quest.isChecked = true;
      setRight(true);
    } else if(input !== "") {
      setWrong(true);
    } else {
      e.preventDefault();
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
      <p className="Testing-x" onClick={()=>setStopTest(true)}>×</p>
      <div className="Test-quest">{engMode ? quest.engWord : quest.rusWord} - ...</div>
      <form className="Test-form">
        <input className="Test-input" type="text"  ref={testInput} placeholder="translate" 
        onSubmit={(e)=>{e.preventDefault();  checkWord(testInput.current.value);}}/>
        <MyBtn big={true} border={'palegreen'} back={'darkorange '}      
          method={(e)=>{
            e.preventDefault();
            checkWord(testInput.current.value.toLowerCase())}}>check
        </MyBtn>
      </form>    
      <MyBtn big={true} border={'palegreen'} back={'blue'} 
      method={()=>{showNextWord(); testInput.current.value = "";}}>next</MyBtn>
    </div>
    
    }

    { isRightAnswer && 
    <RightAnswer showNext={()=> {setRight(false); showNextWord()}}/> }

    { isWrongAnswer && 
    <WrongAnswer tryAgain={()=> setWrong(false)}/>} 
    
    
    {isStopTest && <Endorse title={"Do you want to stop testing ?"} 
    yes={()=>{setStopTest(false);  props.end(); }} 
    no={()=>setStopTest(false)}/> }

  </>
  )
}
export default Testing;