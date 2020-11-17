import React, { useEffect } from "react";
import ChallengeItem from "./ChallengeItem";
import Navigation from "./Navigation";
import "./ChallengeList.css";

const ChallengeList = ({
    challenges,
    onChallengeList,
    onCompleteToggle
  }) => {

    useEffect(() => {
        onChallengeList();
    }, []);

    return (
      <div className="ChallengeList">
        <div className="challenge-title">진행중인 챌린지</div>
        <div className="challenge-list">
        {challenges.map(challenge => (
          <ChallengeItem
            challenge={challenge}
            key={challenge.id}
            onCompleteToggle={onCompleteToggle}
            onClick={() => {
                onCompleteToggle(challenge.id);
            }}/>
        ))}
        </div>
        <Navigation />
      </div>
      
    );
  };
  
  export default ChallengeList;