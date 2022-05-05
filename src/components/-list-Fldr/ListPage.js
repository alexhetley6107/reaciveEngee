import React, {useState} from "react";
import "./ListPage.scss";
import ListItem from "./ListItem";
import SlideList from "./SlideList";
import NewList from "./modals/NewList";
import MyBtn from "../MyBtn/MyBtn";

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
    <section className="ListPage">             
        { !lists.length == 0 ?        
        <>    
          <SlideList newList={()=>setNewList(true)} left={slideToLeft} 
            right={slideToRight}/>       
          <ListItem  lists={lists} currentList={lists[numOfList]} 
            rename={props.rename} deleteWord={props.deleteWord}
            addWord={props.addWord} editWord={props.editWord} 
            delList={(name)=>{props.delList(name); 
              if(numOfList === lists.length-1 ) setNumOfList(numOfList-1);}}/>                    
        </> 
          : <MyBtn big={true} border={'deepskyblue'} back={'seagreen'} 
              method={()=>setNewList(true)}>New List</MyBtn>
          }

        {isNewList &&
        <NewList lists={lists} close={()=>setNewList(false)} 
        newList={props.newList} lastList={()=>{setNumOfList(lists.length)}}/>
        }
     
    </section> 
    
  )    
}

export default ListPage;