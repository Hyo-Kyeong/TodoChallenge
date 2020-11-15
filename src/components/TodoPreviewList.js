import React from "react";
import TodoPreviewItem from "./TodoPreviewItem";
import "./TodoPreviewList.css";

const day=["SUN","MON","TUE","WED","THU","FRI","SAT"];

const TodoPreviewList = ({
 currentdayofpreview,
  todos,
  onDayToggle,
  onChangeSelectedDay
}) => {
  return (
  
    <div className="container-fluid" onClick={()=>{
     onChangeSelectedDay(currentdayofpreview);
      onDayToggle();
    }}>
      <span className="dayText">{day[currentdayofpreview.getDay()]}</span>
      <span className="dateText">{currentdayofpreview.getDate()}일</span>
      
      {todos.map(todo => (
        <TodoPreviewItem
          todo={todo}
          key={todo.id}
          flg={todo.startdate===todo.enddate? 0 : 1}
          currentdayofpreview={currentdayofpreview}
        />
      ))}
     
    </div>
    
  );
};

export default TodoPreviewList;