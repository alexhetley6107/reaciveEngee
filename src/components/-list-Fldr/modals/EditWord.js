import React, { useRef, useState } from "react";
import MyBtn from "../../MyBtn/MyBtn";
import "./RenameList.scss";

const EditWord = props => {

  const engInput = useRef();
  const rusInput = useRef();
  const[isExist, setExist]  = useState(false);

  return (   
    <div className="RenameList" onClick={props.close}>     
      <div className="RenameList-wrap" onClick={(e) => e.stopPropagation()}>
        <div className="RenameList-close"onClick={props.close}>×</div>
        <div className="RenameList-title">{ isExist 
          ? `"${engInput.current.value.trim()}" is already in the list` 
          : "Edit pair of words..." }</div>
        <input type="text" className="RenameList-input" defaultValue={props.eng}
          ref={engInput} placeholder="english word"></input>
        <input type="text" className="RenameList-input" defaultValue={props.rus}
          ref={rusInput} placeholder="russian word"></input>
        <MyBtn big={true} border={'white'} back={'darkorange'}
        method={()=>{
          if(engInput.current.value !== '' && rusInput.current.value !== ''){

            let find = props.list.words.find(word => 
              word.engWord === engInput.current.value.trim().toLowerCase());

            if(find && engInput.current.value.trim() !== props.eng) {
              setExist(true);
            } else {
              props.editWord(props.listName, props.eng, 
                engInput.current.value.trim().toLowerCase(), 
                rusInput.current.value.trim().toLowerCase() );
              props.close(); setExist(false);
            }

            
          }
        }}>Edit</MyBtn>
      </div>      
    </div>
    
  )    
}

export default EditWord;