import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import Challenge from "./components/Challenge";

const App = () => {
  const [inProgress, setProgress] = useState(false);  //추가! inProgress값 이 
  const onProgress = () => {
    setProgress(prev => !prev);
    console.log(inProgress);
  };

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Challenge} />
          <Route exact path="/Challenge" 
          render={()=> (<Challenge onProgress={onProgress} inProgress={inProgress}/>) }/>
          <Route exact path="/home" render={()=>(<Home/>)}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default App;