import React, { useEffect, useRef } from "react";
import "./../../styles/ChooseList.scss";
import IconList from "./IconList";

function ChooseList(props) {

  const maps = useRef();

  useEffect(() => {
    const el = maps.current;
      if(el){
        const onWheel =(e)=>{
          e.preventDefault();
          el.scrollTo({
            left: el.scrollLeft + e.deltaY *4,
            behavior : "smooth"
          })
        }
        el.addEventListener("wheel", onWheel);

        return ()=> el.removeEventListener("wheel", onWheel)
      }

  }, [])

  return (
    <div className="ChooseList">
      <p className="ChooseList-title">Scroll right and select your desired lists</p>
      <div className="ChooseList-items" ref={maps}>
        {props.lists.map(list => <IconList key ={list.title} lists={props.lists}
        name={list.title} amount={list.words.length} 
        choosen={props.forLearn === "yes" ? list.forLearn : list.forTest} 
        choose={props.choose}/>)}
      </div>
    </div>
  )    
}

export default ChooseList;