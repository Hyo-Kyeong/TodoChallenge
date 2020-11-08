import React, { useState } from "react";
import "./App.css";
import Template from "./components/Template";
import TodoList from "./components/TodoList";
import { MdAddCircle } from "react-icons/md";
import TodoInsert from "./components/TodoInsert";
import TodoPreviewList from "./components/TodoPreviewList";
import TodoDate from "./components/TodoDate";
let nextId = 4;

const App = () => {
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [insertToggle, setInsertToggle] = useState(false);
  const [currentDay, setCurrentDay] = useState(new Date());
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "오늘포함 기간제",
      checked: true,
      startdate : new Date('2020-11-1'),
      enddate : new Date('2121-2-2')
      
    },
    {
      id: 2,
      text: "당일",
      checked: false,
      startdate : new Date('2020-11-8'),
      enddate : new Date('2020-11-8'),
      
    },
    {
      id: 3,
      text: "오늘부터 시작 기간제",
      checked: true,
      startdate : new Date('2020-11-8'),
      enddate : new Date('2121-12-12')
      
    },
    {
      id: 4,
      text: "오늘 불포함 기간제",
      checked: true,
      startdate : new Date('2021-11-1'),
      enddate : new Date('2121-12-12')
      
    },
    {
      id: 5,
      text: "오늘 끝나는 기간제",
      checked: true,
      startdate : new Date('2020-11-1'),
      enddate : new Date('2020-11-8')
      
    },
    {
      id: 6,
      text: "다른 당일",
      checked: true,
      startdate : new Date('2020-11-1'),
      enddate : new Date('2020-11-1')
      
    },
    {
      id: 7,
      text: "오늘 이전의 기간제(오늘 불포함)",
      checked: true,
      flg:0,
      startdate : new Date('2020-10-10'),
      enddate : new Date('2020-11-5')
     
    }
  ]);

  const onInsertToggle = () => {
    if (selectedTodo) {
      setSelectedTodo(null);
    }
    setInsertToggle(prev => !prev);
  };

  const onInsertTodo = text => {
    if (text === "") {
      return alert("할 일을 입력해주세요.");
    } else {
      const todo = {
        id: nextId,
        text,
        checked: false
      };
      setTodos(todos => todos.concat(todo));
      nextId++;
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

  return (
    <Template todoLength={todos.length}>
      <TodoDate
        onCurrentDay={onCurrentDay}/>
      <TodoPreviewList
      currentdayofpreview={currentDay}
      todos={todos}
      
      />

      {/* <TodoList
        todos={todos}
        onCheckToggle={onCheckToggle}
        onInsertToggle={onInsertToggle}
        onChangeSelectedTodo={onChangeSelectedTodo}
      /> */}
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
     {currentDay.getFullYear()}
    </Template>
  );
};

export default App;