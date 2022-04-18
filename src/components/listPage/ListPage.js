import React, {useState} from "react";
import "./../../styles/Content.css";
import WordPairItem from "./WordPair";
import "./../../styles/ListPage.scss";
import ListItem from "./ListItem";
import NewList from "./NewList";



function ListPage(props) {

  const lists = props.lists;
  const[numOfList, setNumOfList] = useState(0);
  const[isNewList, setNewList] = useState(false); 

  const slideToRight = () =>{
    if(numOfList === lists.length-1 ){
      setNumOfList(0);
    }
    else setNumOfList(numOfList+1);
  }
  const slideToLeft = () =>{
    if(numOfList === 0 ){
      setNumOfList(lists.length-1);
    }
    else setNumOfList(numOfList-1);
  }

  
  return (
    <div className="ListPage">     
        <div className="New-List-btn btn" onClick={()=>setNewList(true)}>New <br/>List</div>
        { !lists.length == 0 &&        
          <>
          <div className="List-slide-wrap">
            <div className="sld-to-left" onClick={slideToLeft}>‹</div>
            
            <div className="sld-to-right" onClick={slideToRight}>›</div>
          </div>            
            <ListItem lists={lists} numOfList={numOfList} rename={props.rename} 
            addWord={props.addWord} editWord={props.editWord} deleteWord={props.deleteWord}
            delList={(name)=>{props.delList(name); 
              if(numOfList === lists.length-1 ) setNumOfList(numOfList-1);}}/>                    
          </> }

        {isNewList &&
        <NewList close={()=>setNewList(false)} newList={props.newList} lastList={()=>{setNumOfList(lists.length)}}/>
        }
     
    </div> 
    
  )    
}

export default ListPage;