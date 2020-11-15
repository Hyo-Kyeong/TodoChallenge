import React, { Component, useState, useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navigation from "./Navigation"
import ChallengeSelect from "./ChallengeSelect"
import ChallengeList from "./ChallengeList"
import Template from "./Template";

function Challenge() { 

  //const [challenges, setChallenges] = useState();
  const [today, setToday] = useState(new Date());
  const [inProgress, setProgress] = useState(false);
  const [startChallengeDate, setStartChallengeDate] = useState(new Date('2020-11-05'));
  const [challenges, setChallenges] = useState([
    {
      id: 1,
      text: "",
      complete: true,
      visible: false
    },
    {
      id: 2,
      text: "",
      complete: false,
      visible: false
    },
    {
      id: 3,
      text: "",
      complete: false,
      visible: false
    },
    {
      id: 4,
      text: "",
      complete: true,
      visible: false
    },
    {
      id: 5,
      text: "",
      complete: true,
      visible: false
    },
    {
      id: 6,
      text: "",
      complete: false,
      visible: false
    },
    {
      id: 7,
      text: "",
      complete: false,
      visible: false
    },
    {
      id: 8,
      text: "",
      complete: false,
      visible: false
    },
    {
      id: 9,
      text: "",
      complete: false,
      visible: false
    },
    {
      id: 10,
      text: "",
      complete: false,
      visible: false
    },
    {
      id: 11,
      text: "",
      complete: false,
      visible: false
    },
    {
      id: 12,
      text: "",
      complete: false,
      visible: false
    },
    {
      id: 13,
      text: "",
      complete: false,
      visible: false
    },
    {
      id: 14,
      text: "",
      complete: false,
      visible: false
    },
    {
      id: 15,
      text: "",
      complete: false,
      visible: false
    },
    {
      id: 16,
      text: "",
      complete: false,
      visible: false
    },
    {
      id: 17,
      text: "",
      complete: false,
      visible: false
    },
    {
      id: 18,
      text: "",
      complete: false,
      visible: false
    },
    {
      id: 19,
      text: "",
      complete: false,
      visible: false
    },
    {
      id: 20,
      text: "",
      complete: false,
      visible: false
    },
    {
      id: 21,
      text: "",
      complete: false,
      visible: false
    },
    {
      id: 22,
      text: "",
      complete: false,
      visible: false
    },
    {
      id: 23,
      text: "",
      complete: false,
      visible: false
    },
    {
      id: 24,
      text: "",
      complete: false,
      visible: false
    },
    {
      id: 25,
      text: "",
      complete: false,
      visible: false
    },
    {
      id: 26,
      text: "",
      complete: false,
      visible: false
    },
    {
      id: 27,
      text: "",
      complete: false,
      visible: false
    },
    {
      id: 28,
      text: "",
      complete: false,
      visible: false
    },
    {
      id: 29,
      text: "",
      complete: false,
      visible: false
    },
    {
      id: 30,
      text: "",
      complete: false,
      visible: false
    }
  ]);
 
  const onChallengeList = () => {
    setChallenges(challenges =>
          challenges.map(challenge => 
            (today.getTime()-startChallengeDate.getTime())/1000/60/60/24 > challenge.id-1 ? 
              {...challenge, visible : true} : challenge
          )
    );
  }

  const onCompleteToggle = id => {
    console.log((today.getTime()-startChallengeDate.getTime())/1000/60/60/24/1);
    setChallenges(challenges =>
      challenges.map(challenge =>
        challenge.id === id && (Math.floor((today.getTime()-startChallengeDate.getTime())/1000/60/60/24) == challenge.id-1)? { ...challenge, complete: !challenge.complete } : challenge
      )
    );
  };

  const onProgress = () => {
    setProgress(prev => !prev);
    console.log(inProgress);
  }

  const onSelectChallenge = (id, challengeText) => {
    setChallenges(challenges =>
      challenges.map(challenge =>
        challenge.id === id ? {...challenge, text : challengeText} : challenge
      )
    );
  }

return (
  <Template>
    {inProgress && (<ChallengeList 
        challenges={challenges} 
        onChallengeList={onChallengeList}
        onCompleteToggle={onCompleteToggle}
       />)}
    {!inProgress && (<ChallengeSelect 
        onSelectChallenge={onSelectChallenge}
        onProgress={onProgress}  //카테고리 선택하면,
    />)}
  </Template>
  
  );
}

export default Challenge;