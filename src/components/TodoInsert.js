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
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [flag,setFlag] = useState(0);

  const onChange = e => {
    setValue(e.target.value);
  };


  
  const onChangeDate = (startDate, endDate) => {
    startDate.setHours(0,0,0,0);
    endDate.setHours(0,0,0,0);
    setStartDate(startDate);
    setEndDate(endDate);
    // console.log("start", startDate);
    // console.log("end", endDate);
  };

  const handleSelectChange = e => {
    setFlag((Number)(e.target.value));
  }

  const onSubmit = e => {
    e.preventDefault();
    onInsertTodo(value,startDate,endDate,flag);
    setValue("");
    onInsertToggle();
  };

  useEffect(() => {
    if (selectedTodo) {
      console.log("이거 아닌가?",selectedTodo.startdate.getDate());
      console.log(selectedTodo.text);
      setValue(selectedTodo.text);
    }
  }, [selectedTodo]);

  return (
    <div>
      <div className="insertbackground" onClick={onInsertToggle}></div>
      <form
        onSubmit={
          selectedTodo
            ? () => {
              console.log("스타트데이트 잘 나와",startDate.getDate());
                onUpdate(selectedTodo.id, value,selectedTodo.checked,startDate,endDate,selectedTodo.flag,selectedTodo.flg);
              }
            : onSubmit
        }
      >
        <input
          placeholder="Things that have to do"
          value={value}
          onChange={onChange}
        ></input>
        <div>기간</div><Calendar getCalendarDate={onChangeDate} isWeek={false} 
           start={selectedTodo ? selectedTodo.startdate : new Date()} end={selectedTodo ? selectedTodo.enddate : new Date()}/>

        <div value={flag} onChange={handleSelectChange} >
            <label><input type="radio" name="flag" value= {Number(1)}/>매달</label>
            <label><input type="radio" name="flag" value= {Number(2)}/>매주</label>
            <label><input type="radio" name="flag" value= {Number(3)}/>매일</label>
        </div>
        <div>
        </div>
        {selectedTodo ? (
        
          <div className="rewrite">
            <MdAddCircle
              onClick={() => {
                onUpdate(selectedTodo.id, value,selectedTodo.checked,startDate,endDate,selectedTodo.flag,selectedTodo.flg);
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