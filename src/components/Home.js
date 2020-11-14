import React, { useEffect, useState } from "react";
import "./Home.css";
import Template from "./Template";
import TodoToday from "./TodoToday";
import { MdAddCircle } from "react-icons/md";
import TodoInsert from "./TodoInsert";
//import TodoPreviewList from "./components/TodoPreviewList";
import TodoDate from "./TodoDate";
import TodoWeekly from "./TodoWeekly";
let nextId = 8;

const App = () => {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [selectedDay,setSelectedDay]=useState(new Date());
  const [insertToggle, setInsertToggle] = useState(false);
  const [dayToggle,setDayToggle] = useState(false);
  const [currentDay, setCurrentDay] = useState(new Date());
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "2020-11-1 ~ 2020-11-8",
      checked: true,
      startdate : new Date('2020-11-1'),
      enddate : new Date('2020-11-8'),
      flag:0,
      flg : 0
    },
    {
      id: 2,
      text: "2020-11-8",
      checked: false,
      startdate : new Date('2020-11-8'),
      enddate : new Date('2020-11-8'),
      flag:0,
      flg : 0
      
    },
    {
      id: 3,
      text: "2020-11-12 ~ 먼 미래",
      checked: true,
      startdate : new Date('2020-11-12'),
      enddate : new Date('2121-12-12'),
      flag:0,
      flg : 0
      
    },
    {
      id: 4,
      text: "2021-11-9 ~ 2020-11-12",
      checked: true,
      startdate : new Date('2021-11-9'),
      enddate : new Date('2020-11-12'),
      flag:0,
      flg : 0
      
    },
    {
      id: 5,
      text: "오늘 끝나는 기간제",
      checked: true,
      startdate : new Date('2020-11-1'),
      enddate : new Date('2020-11-8'),
      flag:0,
      flg : 0
      
    },
    {
      id: 6,
      text: "2020-11-1",
      checked: true,
      startdate : new Date('2020-11-1'),
      enddate : new Date('2020-11-1'),
      flag:0,
      flg : 0
      
    },
    {
      id: 7,
      text: "과거 ~ 2020-11-5",
      checked: true,
      startdate : new Date('2020-10-10'),
      enddate : new Date('2020-11-5'),
      flag:0,
      flg : 0
     
    }
  ]);

  const onInsertToggle = () => {
    if (selectedTodo) {
      setSelectedTodo(null);
    }
    setInsertToggle(prev => !prev);
  };

  const onDayToggle = () => {
    setDayToggle(prev => !prev);
  };

  const onInsertTodo = (text,startdate,enddate,flag) => {
    if (text === "") {
      return alert("할 일을 입력해주세요.");
    } else {
      // console.log("flag=",flag);
      // console.log("start", startDate);
      // console.log("end", endDate);

      const todo = {
        id : nextId,
        text,
        checked: false,
        startdate,
        enddate,
        flag,
        flg : 0
      };

      console.log(todo);

      setTodos(todos => todos.concat(todo));
      nextId++;

      for(let i=0;i<nextId;i++){
        console.log(todos[i]);
      }
    }
  };
  const onCheckToggle = id => {
    setTodos(todos =>
      todos.map(todo =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  const onChangeSelectedTodo = todo => {
    setSelectedTodo(todo);
  };

  const onChangeSelectedDay = day => {
    setSelectedDay(day);
    console.log("change ", day.getDate());
  };

  const onRemove = id => {
    onInsertToggle();
    setTodos(todos => todos.filter(todo => todo.id !== id));
  };

  const onUpdate = (id, text,checked,start,end,flag,flg) => {
    const correcttodo = {
      id ,
      text,
      checked,
      start,
      end,
      flag,
      flg
    };
    onInsertToggle();
    setTodos(todos =>
      todos.map(todo => (todo.id === id ? correcttodo : todo))
    );
  };

  const onCurrentDay = (currentDay) => {
    currentDay.setHours(0,0,0,0);
    setCurrentDay(currentDay);
  }

  useEffect(() => {
    console.log("inserttoggle", insertToggle);
    if(selectedTodo) console.log("select", selectedTodo.text);
  })
  return (
    <Template todoLength={todos.length}>
      <TodoDate
        onCurrentDay={onCurrentDay}
        />
      {/* <TodoPreviewList
      currentdayofpreview={currentDay}
      todos={todos}
      
      /> */}
      
        <TodoWeekly
      currentDay={currentDay}
      todos={todos}
      onDayToggle={onDayToggle}
      onChangeSelectedDay={onChangeSelectedDay}
      />
      
      {dayToggle && ( <TodoToday
        todos={todos}
        selectedDay={selectedDay}
        onCheckToggle={onCheckToggle}
        onInsertToggle={onInsertToggle}
        onChangeSelectedTodo={onChangeSelectedTodo}
        onDayToggle={onDayToggle}
      /> )}
      <div className="add-todo-button" onClick={onInsertToggle}>
        <MdAddCircle />
      </div>
      {insertToggle && (
        <TodoInsert
          selectedTodo={selectedTodo}
          onInsertToggle={onInsertToggle}
          onInsertTodo={onInsertTodo}
          onRemove={onRemove}
          onUpdate={onUpdate}
        />
      )}
      {console.log("오늘", currentDay)}
    </Template>
  );
};

export default App;