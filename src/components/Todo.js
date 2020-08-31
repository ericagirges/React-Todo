import React from "react";
import styled from "styled-components";

const StyledTask = styled.div `
    font-family: "Raleway";
    font-size: 1.3em;
    margin-top: 20px;
    cursor: pointer;

    :hover {
        color: #68487F;
    }

    &.taskcompleted {
        color: #68487F;
        font-style: italic;
        text-decoration: line-through;
    }
`

const Todo = (props) => {
  return (
    <StyledTask
      onClick={() => props.toggleCompleted(props.task.id)}
      className={`task${props.task.completed ? "completed" : ""}`}
    >
      <p>{props.task.name}</p>
    </StyledTask>
  );
};

export default Todo;
