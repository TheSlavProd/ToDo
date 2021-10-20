import react, { Component } from "react";

class Todo extends Component {
  state = {
    tasks: ["sdfsdf", "sdfsdj"],
    inputValue: "",
  };

  handleChange = (event) => {
    let inputValue = event.target.value;
    this.setState({
      inputValue,
    });
  };
  addTask = () => {
    let inputValue  = this.state.inputValue.trim();
    let tasks = [...this.state.tasks, inputValue]

    if (!inputValue) {
      return;
    }
   // tasks.push(inputValue.trim());
    //console.log(tasks);
    this.setState({
      tasks,
      inputValue: "",
    });
  };

  render() {
    let li = this.state.tasks.map((task, index) => {
      return <li key={index}>{task}</li>;
    });

    return (
      <div>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.inputValue}
        ></input>
        <button onClick={this.addTask}>Add task</button>
        <ol>{li}</ol>
      </div>
    );
  }
}

export default Todo;
