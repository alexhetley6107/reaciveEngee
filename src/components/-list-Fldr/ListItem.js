import React, { useContext, useState } from "react";
import "./ListPage.scss";
import RenameList from "./modals/RenameList";
import Endorse from "../Endorse/Endorse";
import AddWord from "./modals/AddWord";
import ListView from "./WordPair/ListView";
import MyBtn from "../MyBtn/MyBtn";
import WordPair from "./WordPair/WordPair";


const ListItem = props => {

  const [isRename, setRename] = useState(false);
  const [isDeleteList, setDeleteList] = useState(false);
  const [isAddWord, setAddWord] = useState(false);

  let listView = props.currentList.words.map(item => <WordPair 
    listName={props.currentList.name} key={item.id}
    eng={item.engWord} rus={item.rusWord} list={props.currentList}
    editWord={props.editWord} deleteWord={props.deleteWord}  />)

  return (
    <div className="ListItem">
       <div className="ListItem-title">
          {props.currentList.name} List: {props.currentList.words.length} words
        </div>  
      <div className="ListItem-head">       
        <MyBtn big={false} border={'white'} back={'crimson'} 
          method={()=>setAddWord(true)}><b>+</b> word</MyBtn>          
        <div className="ListItem-edit-btns">
          <MyBtn big={false} border={'white'} back={'green'} 
            method={()=>setRename(true)}>rename</MyBtn>
          <div className="ListItem-sep"></div>          
          <MyBtn big={false} border={'white'} back={'crimson'} 
            method={()=>setDeleteList(true)}>del</MyBtn>
        </div>        
      </div>      
      <ul className="ListView">
        {listView}
      </ul>  
         
      {isRename && <RenameList lists={props.lists} 
      listName={`Rename ${props.currentList.name} list to...`} 
      rename={props.rename} close={()=>setRename(false)} 
      oldName={props.currentList.name}
        /> }

      {isDeleteList && <Endorse title={`Delete ${props.currentList.name} list ?`} 
      yes={()=>{setDeleteList(false); props.delList(props.currentList.name);}} 
      no={()=>setDeleteList(false)} close={()=>setDeleteList(false)}/> }

      {isAddWord && <AddWord close={()=>setAddWord(false)} addWord={props.addWord}
      listName = {props.currentList.name} 
      list = {props.currentList}/> }
      
    </div>
  )    
}

export default ListItem;