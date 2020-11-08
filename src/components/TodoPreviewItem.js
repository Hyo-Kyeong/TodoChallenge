import React from "react";
import { BsDot } from "react-icons/bs";
import "./TodoPreviewItem.css";

const isTodayworkicon =(flg)=> {//기간제 또는 당일 작업에 따른 앞에 붙는 아이콘 설정
    return flg===0 ?(<div><BsDot/></div>) : (<div className="notToday_icon"><BsDot/></div>)
}


const TodoPreviewItem = ({
  todo
}) => {
  const { id, text, checked,flg } = todo;
  return (
    <div className="TodoPreviewItem">
      <div className={`content ${checked ? "checked" : ""}`} >
        {checked ? (
            isTodayworkicon(todo.flg)
        ) : (
            isTodayworkicon(todo.flg)
        )}
        <div className={`text ${flg===0 ? "" : "period"}`}>
          {text}
        </div>
      </div>
    </div>
  );
};

export default TodoPreviewItem;