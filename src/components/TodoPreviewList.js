import React from "react";
import TodoPreviewItem from "./TodoPreviewItem";
//import "./TodoList.css";

const TodoPreviewList = ({
  todos
}) => {
  return (
    <div className="TodoPreviewList">
      {todos.map(todo => (
        <TodoPreviewItem
          todo={todo}
          key={todo.id}
          flg={todo.flg}
        />
      ))}
    </div>
  );
};

export default TodoPreviewList;