import React,  {useState} from "react";
import "./../../styles/LearnPage.scss";
import Endorse from "./../Endorse";
import EndLearn from "./EndLearn";

function Learning(props) {


  const words = props.words;
  
  const [learnPair, setLearnPair] = useState(words[Math.floor(Math.random() * words.length)]); 
  const [isStopLearn, setStopLearn] = useState(false);     
   
  const showNextPair = () => {
    if(words.every(item => item.isLearned === true) !== true) {

      let item = words[Math.floor(Math.random() * words.length)];

      if(item.isLearned === true){
        showNextPair();
      } else {
        setLearnPair(item);
        item.isLearned = true;
      }
    } else {
      props.setEndLearn();
      resetLearn();
      props.end();
    }    
  }

  const resetLearn = () => {
    words.forEach(item => item.isLearned = false);      
  }


  return (
  <>  
    { !props.isEndLearn &&
      <div className="Learning">
      <p className="Test-x" onClick={()=>setStopLearn(true)}>×</p>
      <div className="Learning-words">
        {learnPair.engWord} — {learnPair.rusWord}
      </div>

      <div className="Learning-words">
      📢 — 📢
      </div>
    
      <div className="Learning-button" onClick={showNextPair}> Remember </div>
       
    </div>}
     
    
    {isStopLearn && <Endorse title={"Do you want to stop Learning ?"} 
    yes={()=>{setStopLearn(false); props.end(); }} 
    no={()=>setStopLearn(false)}/> }
    

  </>
  )
}
export default Learning;