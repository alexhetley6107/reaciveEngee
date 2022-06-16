import React, { useRef, useState } from "react";
import MyBtn from "../../MyBtn/MyBtn";
import "./RenameList.scss";
import { useDispatch, useSelector } from "react-redux";

const NewList = props => {

  const listInput = useRef();

  const[isExist, setExist]  = useState(false);
  
  const dispatch = useDispatch();
  const createNewList = (name) => {
    dispatch({type:"NEW_LIST", payload:{name:name}})
  }

  return (   
    <div className="RenameList" onClick={props.close} >     
      <div className="RenameList-wrap" onClick={(e) => e.stopPropagation()}>
        <div className="RenameList-close"onClick={props.close}>×</div>
        <div className="RenameList-title">
          {isExist ? "Such list is already exists" : "Create new list..."}
        </div>
        <input type="text" className="RenameList-input" ref={listInput} placeholder="list name"></input>
        <MyBtn big={true} border={'white'} back={'darkorange'}
        method={()=>{
          if(listInput.current.value.trim() !== ''){

            let find = props.lists.find(list => list.name === listInput.current.value.trim());

            if(find) {
              setExist(true);
            } else {
              createNewList(listInput.current.value.trim()); 
              props.close();  props.lastList(); setExist(false);
            }
            

          }}}>create</MyBtn>
      </div>      
    </div>
    
  )    
}

export default NewList;