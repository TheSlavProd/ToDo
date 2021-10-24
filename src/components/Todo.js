import react, { Component } from "react";
import style from "./todo.module.css";
import { Container, Row, Col, Button, FormControl } from "react-bootstrap";

class Todo extends Component {
  state = {
    tasks: ["Learn english", "Go market"],
    inputValue: "",
  };

  handleChange = (event) => {
    let inputValue = event.target.value;
    this.setState({
      inputValue,
    });
  };
  addTask = () => {
    let inputValue = this.state.inputValue.trim();
    let tasks = [...this.state.tasks, inputValue];

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
      return (
        <Col key={index}>
          <div>{task}</div>
        </Col>
      );
    });

    return (
      <Container>
        <Row>
        <Col>
          <FormControl
            type="text"
            onChange={this.handleChange}
            value={this.state.inputValue}
          ></FormControl>
          </Col>
          <Col>
          <Button
            variant="primary"
            className={style.colo}
            onClick={this.addTask}
          >
            Add task
          </Button>
          </Col>
        </Row>
        <Row>{li}</Row>
      </Container>
    );
  }
}

export default Todo;
