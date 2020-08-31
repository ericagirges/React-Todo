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
      thingsTodo: []
    }
  };

  // addItem to TodoList 
  addItem = (itemName) => {
    const newItem = {
      name: itemName,
      id: new Date(),
      completed: false
    };
    this.setState({
      thingsTodo: [...this.state.thingsTodo, newItem]
    })
  };

  // set item to completed true/flase
  toggleCompleted = (selectedItem) => {
    this.setState({
      thingsTodo: this.state.thingsTodo.map((item) => {
        if (item.id === selectedItem) {
          return {
            ...item,
            completed: !item.completed
          };
        }else {
          return item;
        }
      })
    })
  }

  render() {
    return (
      <div>
        <header>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm addItem={this.addItem} />
        </header>
        <TodoList thingsTodo={this.state.thingsTodo} toggleCompleted={this.toggleCompleted}/>
      </div>
    );
  }
}

export default App;
