import React, {useState} from "react";
import "./../../styles/WordPair.scss";
import Endorse from "../Endorse";
import EditWord from "./EditWord";

const WordPair = props => {

  const [isEdit, setEdit] = useState(false);
  const [isDeleteWord, setDeleteWord] = useState(false);

  return (
    <div className="WordPair">
      <div className="WordPair-words">
        {props.item.engWord} — {props.item.rusWord}
      </div>      
      <div className="WordPair-btns">
        <div className="WordPair-edit" onClick={()=>setEdit(true)} >Edit</div>
        <div className="WordPair-sep"></div>
        <div className="WordPair-del"  onClick={()=>setDeleteWord(true)}>Delete</div>
      </div>     


      {isDeleteWord && <Endorse title={`Delete "${props.item.engWord}" from the list ?`}
       no={()=>setDeleteWord(false)} close={()=>setDeleteWord(false)}
       yes={()=>{
         props.deleteWord(props.listName, props.item.engWord);
         setDeleteWord(false);
      }}/> }

      {isEdit && <EditWord close={()=>setEdit(false)} listName={props.listName}
      eng={props.item.engWord} rus={props.item.rusWord} editWord={props.editWord}/> }
    </div>
  )    
}

export default WordPair;