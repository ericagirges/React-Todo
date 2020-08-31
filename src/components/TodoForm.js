import React from "react";
import styled from "styled-components";

const InputContainer = styled.form`
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  margin-bottom: 10px;
  height: 30px;
  width: 300px;
  font-family: "Raleway";
  text-align: center;
  font-size: 1.0em;
`;

const AddButton = styled.button`
  position: relative;
  display: inline-block;
  padding: 5px 15px;
  background-color: #80ce84;
  background-image: linear-gradient(#569f5a, #80ce84);
  text-decoration: none;
  color: #fff;
  font-size: 1.5em;
  font-family: "Raleway";
  border-radius: 5px;
  transition: background 0.8s;
  :after {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: calc(100% - 4px);
    height: 50%;
    background: linear-gradient(
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.2)
    );
  }
  :hover {
    background: #569f5a radial-gradient(circle, transparent 1%, #569f5a 1%) center/15000%;
  }
  :active {
    background-color: #80ce84;
    background-size: 100%;
    transition: background 0s;    
  }    
  }
`;

class TodoForm extends React.Component {
  //constructor to set state
  constructor() {
    super();
    this.state = {
      task: "",
    };
  }

  // handle input changes
  handleChanges = (event) => {
    this.setState({
      task: event.target.value,
    });
  };

  // class property for submit
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTask(this.state.task);
  };

  render() {
    return (
      <InputContainer onSubmit={this.handleSubmit}>
        <StyledInput
          type="text"
          name="task"
          value={this.state.task}
          onChange={this.handleChanges}
          placeholder="Let's be productive."
        />
        <AddButton>Add</AddButton>
      </InputContainer>
    );
  }
}

export default TodoForm;
