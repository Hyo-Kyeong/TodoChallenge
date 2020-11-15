import React, { useState } from "react";
import "./App.css";
//import Template from "./components/Template";
//import TodoList from "./components/TodoList";
//import { MdAddCircle } from "react-icons/md";
//import TodoInsert from "./components/TodoInsert";
//import TodoPreviewList from "./components/TodoPreviewList";
//import TodoDate from "./components/TodoDate";
//import TodoWeekly from "./components/TodoWeekly";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Challenge from "./components/Challenge";
import Navigation from "./components/Navigation";

let nextId = 8;
//선영아잘하고있어?잘돌아가?지금윤영주씨만나러갔는데만나서뭐해?밖에서깔깔깔거리는소리가다들려
const App = () => {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false);
  const [currentDay, setCurrentDay] = useState(new Date());
  const [inProgress, setProgress] = useState(false);  //추가! inProgress값 이 false
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

  const onRemove = id => {
    onInsertToggle();
    setTodos(todos => todos.filter(todo => todo.id !== id));
  };

  const onUpdate = (id, text) => {
    onInsertToggle();
    setTodos(todos =>
      todos.map(todo => (todo.id === id ? { ...todo, text } : todo))
    );
  };

  const onCurrentDay = (currentDay) => {
    currentDay.setHours(0,0,0,0);
    setCurrentDay(currentDay);
  }
  const onProgress = () => {
    setProgress(prev => !prev);
    console.log(inProgress);
  };

  
  return (
    <div>
      <BrowserRouter >
      
        <Switch >
          <Route exact path="/" component={Home} />
          <Route exact path="/Challenge" 
          render={()=> (<Challenge onProgress={onProgress} inProgress={inProgress}/>) }/>
          <Route exact path="/home" component={Home} />
        </Switch>
      </BrowserRouter>

    </div>
  );
};

export default App;