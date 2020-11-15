import React from "react";
import "./Template.css";

const Template = ({ children ,currentDay}) => {
  return (
    <div className="Template">
      <div className="title"> {currentDay.getFullYear()}년 {currentDay.getMonth()+1}월 {currentDay.getDate()}일</div>
      <div>{children}</div>
    </div>
  );
};

export default Template;