import React, { useState } from "react";
import "./../styles/Content.css";
import "./../styles/LearnPage.scss";

const LearnPage = props => {
 
  const words = [].concat(...props.lists.map(item => item.words))

  const [index, setIndex] = useState(0);

  const rememberWord = () => {
    if (index < words.length){
      setIndex(index + 1)
    } else if(index === words.length){
      setIndex(0)
    }
  }

  return (
    <div className="LearnPage">
      <div className="Learn-wrapper">

      {(index < words.length)
      ?
      <div>{words[index].engWord} - {words[index].rusWord}</div>
      : <div>LEARNED</div>}

        <div className="Learn-button" onClick={rememberWord} >
          {index < words.length ? "Remember" : "Repeat"}
        </div>

          
      </div> 
    </div> 
      
  )   
}

export default LearnPage;