import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  border-bottom: 2px solid black;
`;

const LogoImage = styled.img`
  width: 100px;
  height: auto;
`;

const Title = styled.h2`
  font-family: "Unica One";
  font-size: 3em;
  margin-bottom: 40px;
`;

const FlexFooter = styled.footer `
  display: flex;
  justify-content: space-between;
`

const BackgroundLeft = styled.img `
  height: 300px;
  width: auto;
  position: fixed;
  bottom: 0;
  display: block;

  @media(max-width: 600px){
    height: 100px;
    width: auto;
  }
  @media(max-width: 400px){
    display: none;
  }
`

const BackgroundRight = styled.img `
  height: 300px;
  width: auto;
  position: fixed;
  bottom: 0;
  right: 0;
  display: block;

  @media(max-width: 600px){
    height: 100px;
    width: auto;
  }
  @media(max-width: 400px){
    display: none;
  }


`

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      thingsTodo: [],
      toggleCompleted: () => {},
    };
  }

  // addTask to TodoList
  addTask = (taskName) => {
    const newTask = {
      name: taskName,
      id: new Date(),
      completed: false,
    };
    this.setState({
      thingsTodo: [...this.state.thingsTodo, newTask],
    });
  };

  // set task to completed true/flase
  toggleCompleted = (selectedTask) => {
    this.setState({
      thingsTodo: this.state.thingsTodo.map((task) => {
        if (task.id === selectedTask) {
          return {
            ...task,
            completed: !task.completed,
          };
        } else {
          return task;
        }
      }),
    });
  };

  clearCompletedTasks = () => {
    this.setState({
      thingsTodo: this.state.thingsTodo.filter((task) => !task.completed),
    });
  };

  render() {
    return (
      <div>
        <StyledHeader>
          <LogoImage src="/froglogo.png" alt="mint green frog logo" />
          <Title>Hop Todo It</Title>
          <TodoForm addTask={this.addTask} />
        </StyledHeader>
        <TodoList
          thingsTodo={this.state.thingsTodo}
          toggleCompleted={this.toggleCompleted}
          clearCompletedTasks={this.clearCompletedTasks}
        />
        <FlexFooter>
          <BackgroundLeft src="/lilypad-left.png" alt="lily pad with pink lotus flower"/>
          <BackgroundRight src="/lilypad-right.png" alt="lily pad with pink lotus flower"/>
        </FlexFooter>
      </div>
    );
  }
}

export default App;
