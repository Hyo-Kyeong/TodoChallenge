import React, { useState, useEffect } from "react";
import { MdAddCircle } from "react-icons/md";

const ChallengeCreateToggle = ({

}) => {

    const[myChallenge, setMyChallenge] = useState([]);
    
    useEffect(() => {

    })

    const onSubmit = e => {
        
    }

  return (
    <div>
        <form onSubmit={onSubmit}>
        <input
          placeholder="1일차"
          name="myChallenge"
          value={myChallenge[0]}
        ></input>
        <input
          placeholder="2일차"
          name="myChallenge"
          value={myChallenge[1]}
        ></input>
        <button type="submit">
            <MdAddCircle />
        </button>
        
      </form>
      </div>
  );
};

export default ChallengeCreateToggle;