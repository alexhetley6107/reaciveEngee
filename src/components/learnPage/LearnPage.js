import React, { useState } from "react";
import "./../../styles/Content.css";
import "./../../styles/LearnPage.scss";
import Learning from "./Learning";
import StartLearn from "./StartLearn";
import EndLearn from "./EndLearn";

const LearnPage = props => {

  const [isEndLearn, setEndLearn] = useState(false); 

  return (
    <div className="LearnPage">
      
      { props.isLearning 
        ?       
      <Learning words={props.words} end={props.end} /* isLearning={props.isLearning}  */
      isEndLearn={isEndLearn} 
      setEndLearn={()=>{setEndLearn(true)}}/>
        : <>
      { isEndLearn 
        ? 
      <EndLearn endLearn={()=>{ setEndLearn(false); }}/>
        :
      <StartLearn lists = {props.lists} choose={props.choose} 
        start={() => { 
        if(props.lists.length !== 0 
          && !props.lists.every(list => list.forLearn === false)
          && !props.lists.filter(list => list.forLearn === true)
          .every(list => list.words.length === 0)) {
            props.start();
            props.setWordsForLearn(); 
        } }} />      
      }
      </>
    } 
        
    </div> 
      
  )   
}

export default LearnPage;
