// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";
import styled from "styled-components";

const TasksContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StyledList = styled.ul`
    list-style-image: url("/green-check3.svg");
`

const ClearButton = styled.button`
  font-family: "Raleway", sans-serif;
  background: none;
  border: none;
  font-weight: 700;
  font-size: 1.4em;
  margin-top: 30px;
  margin-bottom: 50px;

  :hover {
    color: #569f5a;
  }
`;

const TodoList = (props) => {
  return (
    <TasksContainer>
      <StyledList>
        {props.thingsTodo.map((task) => (
          <Todo
            key={task.id}
            task={task}
            toggleCompleted={props.toggleCompleted}
          />
        ))}
      </StyledList>
      <ClearButton onClick={props.clearCompletedTasks}>
        Clear Completed Tasks
      </ClearButton>
    </TasksContainer>
  );
};

export default TodoList;
