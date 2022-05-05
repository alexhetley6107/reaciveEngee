import React, { useRef, useState } from "react";
import MyBtn from "../../MyBtn/MyBtn";
import "./RenameList.scss";

function RenameList(props) {

  const renameInput = useRef();
  const[isExist, setExist]  = useState(false);

  return (
    <div className="RenameList " onClick={props.close}>     
      <div className="RenameList-wrap"onClick={(e) => e.stopPropagation()}>
        <div className="RenameList-close"onClick={props.close}>×</div>
        <div className="RenameList-title">
          { isExist ? "Such list is already exists" : props.listName}
        </div>

        <input type="text" className="RenameList-input" 
        ref={renameInput} placeholder="new name"></input>

        <MyBtn big={false} border={'white'} back={'darkorange'} method={()=>{
          if(renameInput.current.value !== ''){

            let find = props.lists.find(list => list.name === renameInput.current.value.trim());

            if(find && renameInput.current.value.trim() !== props.oldName ) {
              setExist(true);
              } else {
                props.rename(props.oldName, renameInput.current.value.trim());
                props.close(); setExist(false);
              }            
          }}} > rename
        </MyBtn>
      </div>      
    </div>
  )    
}

export default RenameList;