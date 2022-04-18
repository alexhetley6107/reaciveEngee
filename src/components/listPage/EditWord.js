import React, { useRef } from "react";
import "./../../styles/RenameList.scss";

const EditWord = props => {

  const engInput = useRef();
  const rusInput = useRef();

  return (   
    <div className="RenameList">     
      <div className="RenameList-wrap">
        <div className="RenameList-close"onClick={props.close}>×</div>
        <div className="RenameList-title">Edit pair of words...</div>
        <input type="text" className="RenameList-input" defaultValue={props.eng}
          ref={engInput} placeholder="english word"></input>
        <input type="text" className="RenameList-input" defaultValue={props.rus}
          ref={rusInput} placeholder="russian word"></input>
        <div className="RenameList-btn" 
        onClick={()=>{
          if(engInput.current.value !== '' && rusInput.current.value !== '')
          props.editWord(props.listName, props.eng, engInput.current.value, rusInput.current.value );
          props.close();
        }}>Edit</div>
      </div>      
    </div>
    
  )    
}

export default EditWord;