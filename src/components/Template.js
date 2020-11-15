import React from "react";
import "./Template.css";
import Navigation from "./Navigation";
const Template = ({ children }) => {
  return (
    <div className="Template">
      <div className="this">{children}</div>
    <div className="footer"><Navigation className="Navigation"/></div>
    </div>
  );
};

export default Template;