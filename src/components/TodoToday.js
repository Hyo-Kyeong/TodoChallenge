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
      
    <div className="TodoToday">
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
      <div className="add-todo-button2" onClick={()=>onInsertToggle()}>
        <MdAddCircle />
      </div>
    </div>
    </div>
  );
};

export default TodoToday;