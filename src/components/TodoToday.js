import React from "react";
import TodoItem from "./TodoItem";
import "./TodoToday.css";
import { MdAddCircle } from "react-icons/md";
const TodoToday = ({
  todos,
  selectedDay,
  onCheckToggle,
  onInsertToggle,
  onChangeSelectedTodo,
  onDayToggle
}) => {
  return (
    <div>
      <div className="background" onClick = {() => onDayToggle()}></div>
    <div className="today-toggle">
    <div className="TodoToday">
    <div className="month-text">{selectedDay.getMonth()+1}월 {selectedDay.getDate()}일<MdAddCircle className="addButton" onClick={()=>onInsertToggle()}/></div>
    
      
      {todos.map(todo => (
        <TodoItem
          todo={todo}
          key={todo.id}
          onCheckToggle={onCheckToggle}
          onInsertToggle={onInsertToggle}
          onChangeSelectedTodo={onChangeSelectedTodo}
          currentDay={selectedDay}
        />
      ))}
    </div>
    </div>
    </div>
  );
};

export default TodoToday;