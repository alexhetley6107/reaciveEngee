import React, { useRef, useState } from "react";
import "./RenameList.scss";
import MyBtn from "../../MyBtn/MyBtn";
import { useDispatch } from "react-redux";
const AddWord = props => {

  const engInput = useRef();  
  const rusInput = useRef();
  const[isExist, setExist]  = useState(false);

  const dispatch = useDispatch();
  const addWord = (listName, engInput, rusInput) =>{
    dispatch({type:"ADD_WORD", payload: { list:listName,
      engWord: engInput, 
      rusWord: rusInput}})
  }

  return (   
    <div className="RenameList"onClick={props.close}>     
      <div className="RenameList-wrap"onClick={(e) => e.stopPropagation()}>
        <div className="RenameList-close"onClick={props.close}>×</div>
        <div className="RenameList-title">
          { isExist 
          ? `"${engInput.current.value.trim()}" is already in the list` 
          : "Add new pair of words" }
        </div>
        <input type="text" className="RenameList-input" 
          ref={engInput} placeholder="english word"></input>
        <input type="text" className="RenameList-input" 
          ref={rusInput} placeholder="russian word"></input>
        <MyBtn big={true} border={'white'} back={'darkorange'}
        method={()=>{
          if(engInput.current.value !== '' && rusInput.current.value !== '' ) {

            let find = props.list.words.find(word =>
               word.engWord === engInput.current.value.trim().toLowerCase());

            if(find) {
              setExist(true);
            } else {
              addWord(props.listName, engInput.current.value.trim().toLowerCase(), 
                rusInput.current.value.trim().toLowerCase());
              props.close(); setExist(false);
            }
           
          }
          
          }}>Add</MyBtn>
      </div>      
    </div>
    
  )    
}

export default AddWord;