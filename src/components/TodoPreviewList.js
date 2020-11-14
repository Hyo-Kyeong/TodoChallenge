import React from "react";
import TodoPreviewItem from "./TodoPreviewItem";
//import "./TodoList.css";

const TodoPreviewList = ({
 currentdayofpreview,
  todos,
  onDayToggle,
  onChangeSelectedDay
}) => {
  return (
    <div className="TodoPreviewList" onClick={()=>{
     onChangeSelectedDay(currentdayofpreview);
      onDayToggle();
    }}>
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