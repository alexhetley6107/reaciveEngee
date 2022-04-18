import React, { useRef } from "react";
import "./../../styles/RenameList.scss";

const NewList = props => {

  const listInput = useRef();

  return (   
    <div className="RenameList">     
      <div className="RenameList-wrap">
        <div className="RenameList-close"onClick={props.close}>×</div>
        <div className="RenameList-title">Create new list...</div>
        <input type="text" className="RenameList-input" ref={listInput} placeholder="list name"></input>
        <div className="RenameList-btn" 
        onClick={()=>{
          if(listInput.current.value !== ''){
            props.newList(listInput.current.value); 
            props.close();  props.lastList();
          }}}>create</div>
      </div>      
    </div>
    
  )    
}

export default NewList;

 {/* <div className="NewList">  
      <p className="NewList-x" onClick={props.close}>×</p>
      <div className="NewList-title">Create a new list of words to learn</div>
      <input className="NewList-input" type="text" ref={listInput} placeholder="list name"/>
      <div className="NewList-btn" 
      onClick={()=>{props.newList(listInput.current.value); 
      props.close();  props.lastList();   } }>create</div>
    </div>
 */}