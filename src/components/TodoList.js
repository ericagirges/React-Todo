// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";
import styled from "styled-components";

const TasksContainer = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ClearButton = styled.button `
    font-family: "Raleway";
    background: none;
    border: none;
    font-weight: 700;
    font-size: 1.4em;
    margin-top: 30px;

    :hover {
        color: #68487F; 
    }

`

const TodoList = (props) => {

  return (
    <TasksContainer>
      {props.thingsTodo.map((task) => (
        <Todo
          key={task.id}
          task={task}
          toggleCompleted={props.toggleCompleted}
        />
      ))}
      <ClearButton>Clear Completed Tasks</ClearButton>
    </TasksContainer>
  );
};

export default TodoList;
