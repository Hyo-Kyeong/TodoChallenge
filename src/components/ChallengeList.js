import React, { useEffect } from "react";
import ChallengeItem from "./ChallengeItem";
import Navigation from "./Navigation";
const ChallengeList = ({
    challenges,
    onChallengeList,
    onCompleteToggle
  }) => {

    useEffect(() => {
        onChallengeList();
    }, []);

    return (
      <div className="ChallnegeList">
        {challenges.map(challenge => (
          <ChallengeItem
            challenge={challenge}
            key={challenge.id}
            onCompleteToggle={onCompleteToggle}
            onClick={() => {
                onCompleteToggle(challenge.id);
            }}/>
        ))}
        <Navigation />
      </div>
      
    );
  };
  
  export default ChallengeList;