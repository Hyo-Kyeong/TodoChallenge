import React from "react";
import TodoPreviewList from "./TodoPreviewList";
import "./TodoWeekly.css";
import {Row, Col, Container} from 'reactstrap'

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
            <Container className="container">
            <Row>
            <Col xs="6">
            <TodoPreviewList
                currentdayofpreview={Sunday}
                todos={todos}
                onDayToggle={onDayToggle}
                onChangeSelectedDay={onChangeSelectedDay}
                 />
                </Col>
                <Col xs="6">
            <TodoPreviewList
                currentdayofpreview={Monday}
                todos={todos}
                onDayToggle={onDayToggle}
                onChangeSelectedDay={onChangeSelectedDay}
                 />
                </Col>
                <Col xs="6">
            <TodoPreviewList
                currentdayofpreview={Tuesday}
                todos={todos} 
                onDayToggle={onDayToggle}
                onChangeSelectedDay={onChangeSelectedDay}
                />
                </Col>
    <Col xs="6">
            <TodoPreviewList
                currentdayofpreview={Wednesday}
                todos={todos} 
                onDayToggle={onDayToggle}
                onChangeSelectedDay={onChangeSelectedDay}
                />
                </Col>
                <Col xs="6">
            <TodoPreviewList
                currentdayofpreview={Thursday}
                todos={todos} 
                onDayToggle={onDayToggle}
                onChangeSelectedDay={onChangeSelectedDay}
                />
                </Col>
                <Col xs="6">
            <TodoPreviewList
                currentdayofpreview={Friday}
                todos={todos} 
                onDayToggle={onDayToggle}
                onChangeSelectedDay={onChangeSelectedDay}
                />
                </Col>
                <Col xs="6">
            <TodoPreviewList
                currentdayofpreview={Saturday}
                todos={todos}
                onDayToggle={onDayToggle}
                onChangeSelectedDay={onChangeSelectedDay}
                 />
            </Col>
            </Row>
            </Container>
        </div>

    );
};

export default TodoWeekly;