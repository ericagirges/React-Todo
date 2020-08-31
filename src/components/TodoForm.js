import React from "react";

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
  handleSubmit = event => {
      event.preventDefault();
      this.props.addTask(this.state.task)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="task"
          value={this.state.task}
          onChange={this.handleChanges}
        />
        <button>Add</button>
      </form>
    );
  }
}

export default TodoForm;
