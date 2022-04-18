import React, { useRef } from "react";
import "./../../styles/RenameList.scss";

function RenameList(props) {

  const renameInput = useRef();

  return (
    <div className="RenameList">     
      <div className="RenameList-wrap">
        <div className="RenameList-close"onClick={props.close}>×</div>
        <div className="RenameList-title">{props.title}</div>

        <input type="text" className="RenameList-input" 
        ref={renameInput} placeholder="new name"></input>

        <div className="RenameList-btn" onClick={()=>{
          if(renameInput.current.value !== ''){
            props.rename(props.oldName, renameInput.current.value);
            props.close();
          }}}>rename
        </div>
      </div>      
    </div>
  )    
}

export default RenameList;