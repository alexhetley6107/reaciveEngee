import React from "react";
import WordPair from "./WordPair";

function ListView(props) {

  return (
    <ul className="ListView">
      {props.currentList.words.map(item => <WordPair 
        listName={props.currentList.name} key={item.id}
        eng={item.engWord} rus={item.rusWord} list={props.currentList}
        editWord={props.editWord} deleteWord={props.deleteWord}
      />)}
    </ul>  
  )    
}

export default ListView;