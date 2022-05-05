import React, { useEffect, useRef, useState } from "react";
import MyBtn from "../MyBtn/MyBtn";
import "./ChooseList.scss";
import IconList from "./IconList";

function ChooseList(props) {

  const ref = useRef();
  const [state, setState] = useState({
    isScrolling: false,
    clientX: 0,
    scrollX:0
  })
  
  useEffect(() => {
    const el = ref.current;
      if(el){
        const onWheel =(e)=>{
          e.preventDefault();
          el.scrollTo({
            left: el.scrollLeft + e.deltaY *3,
            behavior : "smooth"
          })
        }
        el.addEventListener("wheel", onWheel);

        return ()=> el.removeEventListener("wheel", onWheel)
      }
  }, [])

  const onMouseMove = e => {
      if(ref && ref.current && ref.current.contains(e.target)) {return;}
      e.preventDefault();
      
      const {clientX, scrollX, isScrolling} = state;

      if(isScrolling){
        ref.current.scrollLeft = scrollX + e.clientX - clientX;
        setState({ ...state, 
          scrollX: scrollX + e.clientX - clientX,
          clientX: e.clientX
        })
      }

    }
  const onMouseDown = e => {
    if(ref && ref.current && ref.current.contains(e.target)) {return;}
    e.preventDefault();
    setState({
      ...state, isScrolling: true, clientX: e.clientX
    })
  }
  const onMouseUp = e => {
    if(ref && ref.current && ref.current.contains(e.target)) {return;}
    e.preventDefault();
    setState({
      ...state, isScrolling: false
    })

  }  
  useEffect(()=>{
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mousemove", onMouseMove);

    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mousemove", onMouseMove);
    }
  })
  
  //make button transparrent
  const [transLearn, setTransLearn] = useState(false);
  const [transTest, setTransTest] = useState(false);
  useEffect(()=>{
    if(props.forLearn){
      if(props.lists.every(list => list.forLearn === true)){
        setTransLearn(true);
      } else {
        setTransLearn(false);      
      }
    } else {
      if(props.lists.every(list => list.forTest === true)){
        setTransTest(true);
      } else {
        setTransTest(false);      
      }
    }
  }, [props.lists])

  return (
    <div className="ChooseList">
      
      <div className="ChooseList-head">
        <p className="ChooseList-title" >Select  desired lists</p>
        <MyBtn border={props.forLearn ? 'plum' : 'palegreen'} back={"blue"}  big={false} 
          transparent={props.forLearn ? transLearn : transTest}
          method={()=>{ props.forLearn ? setTransLearn(true) : setTransTest(true);
            props.chooseAll(); }}>all</MyBtn>
      </div>      
      <div className={props.scroll ? "ChooseList-items " : "ChooseList-items hidden" }         
        ref={ref} 
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}>
          {props.lists.map(list => <IconList key ={list.name} lists={props.lists}
          name={list.name} amount={list.words.length} 
          choosen={props.forLearn ? list.forLearn : list.forTest} 
          choose={props.choose} makeTrans={props.makeTrans} />)}
      </div>   
    </div>
  )    
}

export default ChooseList;