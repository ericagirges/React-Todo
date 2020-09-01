import React from "react";
import styled from "styled-components";

const StyledTask = styled.div `
    font-family: "Raleway";
    font-size: 1.3em;
    margin-top: 20px;
    cursor: pointer;
    box-shadow: 0.25rem 0.25rem 0.6rem rgba(0,0,0,0.05), 0 0.5rem 1.125rem rgba(75,0,0,0.05);
    background: white;
    border-radius: 5px;
    padding: 10px 30px;
    max-width: 350px;
    text-align: center;

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
