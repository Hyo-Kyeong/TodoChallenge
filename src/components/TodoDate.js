import React, {useEffect} from "react";
import Calendar from "./Calendar";

const TodoDate = ({onCurrentDay}) => {

    const onChangeDate = (currentDay) => {
        onCurrentDay(currentDay);
    }

    return (
    <Calendar getCalendarDate={onChangeDate} isWeek={true}/>
    );
}

export default TodoDate;