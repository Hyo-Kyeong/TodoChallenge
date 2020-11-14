import React, {Component, useState, useEffect} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

/*npm install react-datepickear --save*/

const Calendar = ({getCalendarDate, isWeek,start,end}) => {
    const [startDate, setStartDate] = useState(start);
    const [endDate, setEndDate] = useState(end);

    
    useEffect(() => {
        console.log("start:", startDate, "end:", endDate)
        if(isWeek) {
            console.log(startDate)
            getCalendarDate(startDate);
        }
        else {
            if(endDate < startDate) {
                setEndDate(startDate);
            }
            getCalendarDate(startDate, endDate);
        }
      });
      
    if(isWeek) {
        return (
        <DatePicker
        selected={startDate}
        onChange={date => setStartDate(date)}
        dateFormat="yyyy/MM/dd"
        />
        );
    }
    else {
        return (
            <>
            <DatePicker
                selected={startDate}
                onChange={date => setStartDate(date)}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                dateFormat="yyyy/MM/dd"
            />
            <DatePicker
                selected={endDate}
                onChange={date => setEndDate(date)}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                dateFormat="yyyy/MM/dd"
            />
            </>
        );
    }
};

export default Calendar;