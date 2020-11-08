import React, { useState, useEffect } from "react";
import { MdAddCircle } from "react-icons/md";
import { TiTrash, TiPencil } from "react-icons/ti";
import Calendar from "./Calendar";
import "./TodoInsert.css";

const TodoInsert = ({
  onInsertToggle,
  onInsertTodo,
  selectedTodo,
  onRemove,
  onUpdate
}) => {
  const [value, setValue] = useState("");
  const [value_s_date, setValue_s_date] = useState("");
  const [value_e_date, setValue_e_date] = useState("");

  const onChange = e => {
    setValue(e.target.value);
  };
  const onChangeDate = (startDate, endDate) => {
    setValue_s_date(startDate);
    setValue_e_date(endDate);
  };

  const onSubmit = e => {
    e.preventDefault();
    onInsertTodo(value);
    setValue("");
    onInsertToggle();
  };

  useEffect(() => {
    if (selectedTodo) {
      setValue(selectedTodo.text);
    }
  }, [selectedTodo]);

  return (
    <div>
      <div className="background" onClick={onInsertToggle}></div>
      <form
        onSubmit={
          selectedTodo
            ? () => {
                onUpdate(selectedTodo.id, value);
              }
            : onSubmit
        }
      >
        <input
          placeholder="Things that have to do"
          value={value}
          onChange={onChange}
        ></input>
        <div>기간</div><Calendar getCalendarDate={onChangeDate} isWeek={false}/>
        <div>
        </div>
        {selectedTodo ? (
          <div className="rewrite">d
            <TiPencil
              onClick={() => {
                onUpdate(selectedTodo.id, value);
              }}
            />
            <TiTrash
              onClick={() => {
                onRemove(selectedTodo.id);
              }}
            />
          </div>
        ) : (
          <button type="submit">
            <MdAddCircle />
          </button>
        )}
      </form>
    </div>
  );
};

export default TodoInsert;