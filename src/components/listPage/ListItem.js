import React, { useContext, useState } from "react";
import "./../../styles/ListPage.scss";
import RenameList from "./RenameList";
import Endorse from "../Endorse";
import WordPair from "./WordPair";
import AddWord from "./AddWord";




const ListItem = props => {

  const [isRename, setRename] = useState(false);
  const [isDeleteList, setDeleteList] = useState(false);
  const [isAddWord, setAddWord] = useState(false);
  

  return (
    <div className="ListItem">
      <div className="ListItem-head">
        <div className="ListItem-addWordBtn" onClick={()=>setAddWord(true)}>Add Word</div>
        <div className="ListItem-title">
          {props.lists[props.numOfList].title} List: {props.lists[props.numOfList].words.length} words
        </div>
        

        <div className="ListItem-edit-btns">
          <div className="ListItem-rename" onClick={()=>setRename(true)}>Rename</div>
          <div className="ListItem-sep"></div>
          <div className="ListItem-del" 
          onClick={()=>{setDeleteList(true); 
          }}>Delete</div>
        </div>
        
      </div>      
        
      <div className="ListItem-body">
        <div className="ListItem-cont">
          {props.lists[props.numOfList].words.map(item => <WordPair listName={props.lists[props.numOfList].title}
           item={item} key={item.id}
          editWord={props.editWord} deleteWord={props.deleteWord}/>)}
        </div>        
      </div> 
         
      {isRename && <RenameList title={`Rename ${props.lists[props.numOfList].title} list to...`} 
      rename={props.rename} close={()=>setRename(false)} oldName={props.lists[props.numOfList].title}/> }

      {isDeleteList && <Endorse title={`Delete ${props.lists[props.numOfList].title} list ?`} 
      yes={()=>{setDeleteList(false); props.delList(props.lists[props.numOfList].title);}} 
      no={()=>setDeleteList(false)} close={()=>setDeleteList(false)}/> }

      {isAddWord && <AddWord close={()=>setAddWord(false)} addWord={props.addWord}
      listName = {props.lists[props.numOfList].title}/> }
      
    </div>
  )    
}

export default ListItem;