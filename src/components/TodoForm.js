import React from "react";
import { render } from "@testing-library/react";

class TodoForm extends React.Component {
  //constructor to set state
  constructor() {
    super();
    this.state = {
      item: "",
    };
  }

  // handle input changes
  handleChanges = (event) => {
    this.State({
      task: event.target.value,
    });
  };

  render() {
    return (
      <form>
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
