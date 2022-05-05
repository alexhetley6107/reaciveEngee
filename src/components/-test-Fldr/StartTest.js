import React from "react";
import "./TestPage.scss";
import ChooseList from "../ChooseList/ChooseList";
import LangMode from "./LangMode/LangMode";
import MyBtn from "./../MyBtn/MyBtn";
import LinkToList from "../LinkToList/LinkToList";

function StartTest(props) {

  return (
    <div className="StartTest">
      { props.lists.length !== 0
        ? <>
        <LangMode engMode={props.engMode} changeMode={props.changeMode}/>         
        <ChooseList lists={props.lists} choose={props.choose} scroll={props.scroll}
          forLearn={false} chooseAll={props.chooseAll} trans={props.trans}/>
        <MyBtn big={true} method={props.start}
          back={'darkorange '} border={'palegreen'}>start</MyBtn>
        </>
        : 
        <LinkToList border={'palegreen'}/>}
      
    </div>
  )    
}

export default StartTest;