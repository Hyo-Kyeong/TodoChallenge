import React, {Component, useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

/*npm install react-datepickear --save*/

const Calendar = ({onCurrentDay}) => {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker
      selected={startDate} 
      onChange={date => setStartDate(date)}
      onChage={onCurrentDay(startDate)}
      dateFormat="yyyy/MM/dd"
      />
    );
};

export default Calendar;