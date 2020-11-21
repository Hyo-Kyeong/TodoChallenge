import React, { useState, useEffect } from "react";
import { MdAddCircle } from "react-icons/md";

const ChallengeCreateToggle = ({
  onInsertChallenge,
  onCreateChallengeToggle,
  onProgress
}) => {
  // const mychallenge=["", "", "","","","","","","","","","","","","","","","","","","","","","","","","","","",""];

const [mychallenge, setMyChallenge]=useState([]);


    const handleChange=(e)=> {
    mychallenge[e.target.id]=e.target.value;
      // setMyChallenge(mychallenge[e.target.id]=e.target.value);
      // setMyChallenge(mychallenge[index++]=e.target.value);
    };

    const onSet = (e) => {
      e.preventDefault();
      alert(mychallenge);
      let i=1;
      onInsertChallenge(mychallenge);
      onCreateChallengeToggle();
      onProgress();
    };

  return (
        <form onSubmit={onSet}>
        <input
          placeholder="1일차"
          onChange={handleChange} 
          value={mychallenge[0]}
          id="0"
        ></input>
        <input
          placeholder="2일차"
          onChange={handleChange}
          value={mychallenge[1]}
          id="1"
        ></input>
        <input
          placeholder="3일차"
          onChange={handleChange}
          value={mychallenge[2]}
          id="2"
        ></input>
        <input
          placeholder="4일차"
          onChange={handleChange}
          value={mychallenge[3]}
          id="3"
        ></input>
        <input
          placeholder="5일차"
          onChange={handleChange}
          value={mychallenge[4]}
          id="4"
        ></input>
        <input
          placeholder="6일차"
          onChange={handleChange}
          value={mychallenge[5]}
          id="5"
        ></input>
        <input
          placeholder="7일차"
          onChange={handleChange}
          value={mychallenge[6]}
          id="6"
        ></input>
        <input
          placeholder="8일차"
          onChange={handleChange}
          value={mychallenge[7]}
          id="7"
        ></input>
        <input
          placeholder="9일차"
          onChange={handleChange}
          value={mychallenge[8]}
          id="8"
        ></input>
        <input
          placeholder="10일차"
          onChange={handleChange}
          value={mychallenge[9]}
          id="9"
        ></input>
        <input
          placeholder="11일차"
          onChange={handleChange}
          value={mychallenge[10]}
          id="10"
        ></input>
        <input
          placeholder="12일차"
          onChange={handleChange}
          value={mychallenge[11]}
          id="11"
        ></input>
        <input
          placeholder="13일차"
          onChange={handleChange}
          value={mychallenge[12]}
          id="12"
        ></input>
        <input
          placeholder="14일차"
          onChange={handleChange}
          value={mychallenge[13]}
          id="13"
        ></input>
        <input
          placeholder="15일차"
          onChange={handleChange}
          value={mychallenge[14]}
          id="14"
        ></input>
        <input
          placeholder="16일차"
          onChange={handleChange}
          value={mychallenge[15]}
          id="15"
        ></input>
        <input
          placeholder="17일차"
          onChange={handleChange}
          value={mychallenge[16]}
          id="16"
        ></input>
        <input
          placeholder="18일차"
          onChange={handleChange}
          value={mychallenge[17]}
          id="17"
        ></input>
                <input
          placeholder="19일차"
          onChange={handleChange}
          value={mychallenge[18]}
          id="18"
        ></input>
        <input
          placeholder="20일차"
          onChange={handleChange}
          value={mychallenge[19]}
          id="19"
        ></input>
        <input
          placeholder="21일차"
          onChange={handleChange}
          value={mychallenge[20]}
          id="20"
        ></input>
        <input
          placeholder="22일차"
          onChange={handleChange}
          value={mychallenge[21]}
          id="21"
        ></input>
        <input
          placeholder="23일차"
          onChange={handleChange}
          value={mychallenge[22]}
          id="22"
        ></input>
        <input
          placeholder="24일차"
          onChange={handleChange}
          value={mychallenge[23]}
          id="23"
        ></input>
        <input
          placeholder="25일차"
          onChange={handleChange}
          value={mychallenge[24]}
          id="24"
        ></input>
        <input
          placeholder="26일차"
          onChange={handleChange}
          value={mychallenge[25]}
          id="25"
        ></input>
        <input
          placeholder="27일차"
          onChange={handleChange}
          value={mychallenge[26]}
          id="26"
        ></input>
        <input
          placeholder="28일차"
          onChange={handleChange}
          value={mychallenge[27]}
          id="27"
        ></input>
        <input
          placeholder="29일차"
          onChange={handleChange}
          value={mychallenge[28]}
          id="28"
        ></input>
        <input
          placeholder="30일차"
          onChange={handleChange}
          value={mychallenge[29]}
          id="29"
        ></input>
        <button type="submit">
            <MdAddCircle />
        </button>
        
      </form>
  );
};

export default ChallengeCreateToggle;