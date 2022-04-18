import React, { useRef } from "react";
import "./../../styles/RenameList.scss";

const AddWord = props => {

  const engInput = useRef();  
  const rusInput = useRef();

  return (   
    <div className="RenameList">     
      <div className="RenameList-wrap">
        <div className="RenameList-close"onClick={props.close}>×</div>
        <div className="RenameList-title">Add new pair of words...</div>
        <input type="text" className="RenameList-input" ref={engInput} placeholder="english word"></input>
        <input type="text" className="RenameList-input" ref={rusInput} placeholder="russian word"></input>
        <div className="RenameList-btn" 
        onClick={()=>{
          if(engInput.current.value !== '' && rusInput.current.value !== '' ) {
            props.addWord(props.listName, engInput.current.value, rusInput.current.value);
            props.close();
          }
          
          }}>Add</div>
      </div>      
    </div>
    
  )    
}

export default AddWord;