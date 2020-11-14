import React, { useEffect } from "react";
import TodoPreviewList from "./TodoPreviewList";
import "./TodoWeekly.css";

const TodoWeekly = ({
    currentDay,
    todos,
    onDayToggle,
    onChangeSelectedDay
}) => {
    var Monday = new Date(currentDay);
    var Tuesday = new Date(currentDay);
    var Wednesday = new Date(currentDay);
    var Thursday = new Date(currentDay);
    var Friday = new Date(currentDay);
    var Saturday = new Date(currentDay);
    var Sunday = new Date(currentDay);

    Sunday.setDate(currentDay.getDate() - currentDay.getDay());

    Monday.setDate(Sunday.getDate() + 1);
    Tuesday.setDate(Sunday.getDate() + 2);
    Wednesday.setDate(Sunday.getDate() + 3);
    Thursday.setDate(Sunday.getDate() + 4);
    Friday.setDate(Sunday.getDate() + 5);
    Saturday.setDate(Sunday.getDate() + 6);

    return (
        <div className="TodoWeekly">
            <TodoPreviewList
                currentdayofpreview={Sunday}
                todos={todos}
                onDayToggle={onDayToggle}
                onChangeSelectedDay={onChangeSelectedDay}
                //onClick={()=>{onChangeSelectedDay(Sunday);}}
                />
            <TodoPreviewList
                currentdayofpreview={Monday}
                todos={todos} 
                onDayToggle={onDayToggle}
                onChangeSelectedDay={onChangeSelectedDay}
                //onClick={()=>{onChangeSelectedDay(Monday);}}
                />
            <TodoPreviewList
                currentdayofpreview={Tuesday}
                todos={todos} 
                onDayToggle={onDayToggle}
                onChangeSelectedDay={onChangeSelectedDay}
                //onClick={()=>{onChangeSelectedDay(Tuesday);}}
                />

            <TodoPreviewList
                currentdayofpreview={Wednesday}
                todos={todos} 
                onDayToggle={onDayToggle}
                onChangeSelectedDay={onChangeSelectedDay}
                //onClick={()=>{onChangeSelectedDay(Wednesday);}}
                />
            <TodoPreviewList
                currentdayofpreview={Thursday}
                todos={todos} 
                onDayToggle={onDayToggle}
                onChangeSelectedDay={onChangeSelectedDay}
                //onClick={()=>{onChangeSelectedDay(Thursday);}}
                />
            <TodoPreviewList
                currentdayofpreview={Friday}
                todos={todos} 
                onDayToggle={onDayToggle}
                onChangeSelectedDay={onChangeSelectedDay}
                //onClick={()=>{onChangeSelectedDay(Friday);}}
                />
            <TodoPreviewList
                currentdayofpreview={Saturday}
                todos={todos} 
                onDayToggle={onDayToggle}
                onChangeSelectedDay={onChangeSelectedDay}
                //onClick={()=>{onChangeSelectedDay(Saturday);}}
                />

        </div>

    );
};

export default TodoWeekly;