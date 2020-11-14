import React, { useEffect } from "react";
import ChallengeItem from "./ChallengeItem";

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
      </div>
    );
  };
  
  export default ChallengeList;