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
  <div>
    <div className="TodoPreviewList" onClick={()=>{
     onChangeSelectedDay(currentdayofpreview);
      onDayToggle();
    }}>
      {currentdayofpreview.getDate()}
      {todos.map(todo => (
        <TodoPreviewItem
          todo={todo}
          key={todo.id}
          flg={todo.startdate===todo.enddate? 0 : 1}
          currentdayofpreview={currentdayofpreview}
        />
      ))}
     
    </div>
    </div>
  );
};

export default TodoPreviewList;