import React from "react";
import TodoPreviewList from "./TodoPreviewList";
import "./TodoWeekly.css";

const TodoWeekly = ({
    currentDay,
    todos
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
                todos={todos} />
            <TodoPreviewList
                currentdayofpreview={Monday}
                todos={todos} />
            <TodoPreviewList
                currentdayofpreview={Tuesday}
                todos={todos} />

            <TodoPreviewList
                currentdayofpreview={Wednesday}
                todos={todos} />
            <TodoPreviewList
                currentdayofpreview={Thursday}
                todos={todos} />
            <TodoPreviewList
                currentdayofpreview={Friday}
                todos={todos} />
            <TodoPreviewList
                currentdayofpreview={Thursday}
                todos={todos} />

        </div>

    );
};

export default TodoWeekly;