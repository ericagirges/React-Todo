import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";


class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      thingsTodo: [],
      toggleCompleted: () => {},
    }
  };

  // addTask to TodoList 
  addTask = (taskName) => {
    const newTask = {
      name: taskName,
      id: new Date(),
      completed: false
    };
    this.setState({
      thingsTodo: [...this.state.thingsTodo, newTask]
    })
  };

  // set task to completed true/flase
  toggleCompleted = (selectedTask) => {
    this.setState({
      thingsTodo: this.state.thingsTodo.map((task) => {
        if (task.id === selectedTask) {
          return {
            ...task,
            completed: !task.completed
          };
        }else {
          return task;
        }
      })
    })
  }

  render() {
    return (
      <div>
        <header>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addTask={this.addTask} />
        </header>
        <TodoList thingsTodo={this.state.thingsTodo} toggleCompleted={this.toggleCompleted}/>
      </div>
    );
  }
}

export default App;
