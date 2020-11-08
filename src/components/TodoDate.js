import React, {useState} from "react";
import Calendar from "./Calender";

const TodoDate = ({onCurrentDay}) => {
    return (
    <Calendar onCurrentDay={onCurrentDay}/>
    );
}

export default TodoDate;