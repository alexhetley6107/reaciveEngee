import React from "react";
import "./ListPage.scss";

const SlideList = (props) => {
  return (
    <div className="SlideList">
      <div className="Slide-left" onClick={props.left}>ᐊ</div>
      <div className="New-List-btn btn" onClick={props.newList}>New List</div>
      <div className="Slide-right" onClick={props.right}>ᐅ</div>
    </div>
  )    
}

export default SlideList;