import React from "react";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import "./TodoItem.css";

const TodoItem = ({
  todo,
  onCheckToggle,
  onInsertToggle,
  onChangeSelectedTodo,
  currentDay

}) => {
  const { id, text, checked,startdate,enddate,flag,flg} = todo;
  if(startdate==currentDay||(startdate<=currentDay&&enddate>=currentDay))
  {return (
    <div className="TodoItem">
      <div className={`content ${checked ? "checked" : ""}`}>
        {checked ? (
          <MdCheckBox
            onClick={() => {
              onCheckToggle(id);
            }}
          />
        ) : (
          <MdCheckBoxOutlineBlank
            onClick={() => {
              onCheckToggle(id);
            }}
          />
        )}
        <div
          className="text"
          onClick={() => {
            onChangeSelectedTodo(todo);
            onInsertToggle();
          }}
        >
          {text}
        </div>
      </div>
    </div>
  );
}
else{
  return null;
}
};

export default TodoItem;