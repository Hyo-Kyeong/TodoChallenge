import React, { Component, useState, useEffect } from "react";
import Navigation from "./Navigation"
import ChallengeSelect from "./ChallengeSelect"
import ChallengeList from "./ChallengeList"
import Template from "./Template";
import ChallengeCreateToggle from "./ChallengeCreateToggle";
import "./Challenge.css";

const databaseURL = "https://todo-app-67946.firebaseio.com"

const Challenge = ({
  user
}) => {

  const [inProgress, setProgress] = useState(false);  //추가! inProgress값 이 false
  const [createChallengeToggle, setcreateChallengeToggle] = useState(false);
  const [today, setToday] = useState(new Date());
  const [startChallengeDate, setStartChallengeDate] = useState();
  const [challengeStore, setChallenegeStore] = useState();
  const [firstFetchChallenge, setFirstFetchChallenge]=useState(false);
  const [challenges, setChallenges] = useState([  //변수
    {
      id: 1,
      text: "",
      complete: false,
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
      complete: false,
      visible: false
    },
    {
      id: 5,
      text: "",
      complete: false,
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
 
  const onProgress = () => {
    setProgress(prev => !prev);
  };

  const onInsertChallenge = (challengeList) => {
    let i=1;
    challengeList.map((menu) => 
      onSelectChallenge(i++, menu)
    )
    const day = new Date();
    day.setHours(0, 0, 0, 0);
    setStartChallengeDate(day);
    setChallenegeStore()
    onProgress();
  }

  const _post = (url, challenge) => {
    return fetch(url, {
      method: 'PUT',
      body: JSON.stringify(challenge)
    }).then(res => {
      if(res.status != 200) throw new Error(res.statusText);  
      return res.json();
    })
  }

  useEffect(() => {
    if(firstFetchChallenge == false) {
      fetch(`${databaseURL}/${user}/challenge.json`).then(res => {
      //fetch(`${databaseURL}/todo.json`).then(res => {
        if(res.status !== 200){
            throw new Error(res.statusText);
        }
        return res.json();
      })
      .then(challengeStore => setChallenegeStore(challengeStore))
      
      if(challengeStore!=null && inProgress==false) {
        const startDate = new Date(challengeStore.startDate);
        const challengeProgress = challengeStore.challengeProgress;
        const challengeList = challengeStore.challengeList;
    
        setStartChallengeDate(startDate);
        setProgress(challengeProgress);
        setChallenges(challengeList);

        setFirstFetchChallenge(true);
      }
      
    }
  }, [challengeStore]);

  useEffect(() => {
    if(inProgress == true) {
      const url =`${databaseURL}/${user}/challenge.json`;
        const challenge = {
          challengeProgress : inProgress,
          challengeList : challenges,
          startDate: startChallengeDate
        }
        _post(url, challenge);
      } 
  });

  const onChallengeList = () => {
    setChallenges(challenges =>
          challenges.map(challenge => 
            (today.getTime()-startChallengeDate.getTime())/1000/60/60/24 > challenge.id-1 ? 
              {...challenge, visible : true} : challenge
          )
    );
  };

  const onCompleteToggle = id => {
    setChallenges(challenges =>
      challenges.map(challenge =>
        challenge.id === id && (Math.floor((today.getTime()-startChallengeDate.getTime())/1000/60/60/24) == challenge.id-1)? { ...challenge, complete: !challenge.complete } : challenge
      )
    );
  };


  const onSelectChallenge = (id, challengeText) => {
    setChallenges(challenges =>
      challenges.map(challenge =>
        challenge.id === id ? {...challenge, text : challengeText} : challenge
      )
    );
  };

  const onCreateChallengeToggle = () => {
    setcreateChallengeToggle(prev => !prev);
  };

  const onChallengeRestart = () => {
      fetch(`${databaseURL}/${user}/challenge.json`, {
        method: 'DELETE',
      }).then(res => {
          if(res.status != 200) throw new Error(res.statusText);
  
          return res.json();
      })
      
    onProgress();
    resetChallenges();
  }

  const resetChallenges = () => {
    setChallenges(challenges => 
      challenges.map(challenge => (
        {
          ...challenge, text: "", visible: false, complete: false
        })
    ))
  }
return (
  <Template>
    {createChallengeToggle && <ChallengeCreateToggle
      onInsertChallenge={onInsertChallenge}
      onCreateChallengeToggle={onCreateChallengeToggle}
      onProgress={onProgress}
    />}
    {inProgress && (<ChallengeList  //inProgress가 true 면  30개 쭉 나열
        challenges={challenges} 
        onChallengeList={onChallengeList}
        onCompleteToggle={onCompleteToggle}
        onChallengeRestart={onChallengeRestart}
        // onProgress={onProgress}
        // inProgress
       />)}
    <div className="challenge-select-panel">
    {!inProgress && (<ChallengeSelect   //inProgress가 false 면 카테고리 화면
        onInsertChallenge={onInsertChallenge}
        onProgress={onProgress}  
        onCreateChallengeToggle={onCreateChallengeToggle}
    />)}
    </div>
  </Template>
  
  );
};

export default Challenge;