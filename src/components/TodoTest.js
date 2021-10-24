import react, { Component } from "react";
import style from "./todo.module.css";
import { Container, Row, Col, Button, FormControl } from "react-bootstrap";

class TodoTest extends Component {
  state = {
    tasks: [{title: "Learn english",
            desc: " desc"
},
{title: "Go market"}],
    inputValue: "",
    taskObj: {title: ""}
  };

  handleChange = (event) => {
    //let inputValue = event.target.value;
    let taskObj = event.target.value;

    this.setState({
      //inputValue,
      taskObj: {title: taskObj}
    });

  };
  addTask = () => {
      

    let taskObj = this.state.taskObj;
    taskObj.title = taskObj.title.trim()
    //taskObj = taskObj.title.trim()
    let tasks = [...this.state.tasks, taskObj];
    
    if (!taskObj.title) {
      return;
    }
    // tasks.push(inputValue.trim());
    //console.log(tasks);
    this.setState({
      tasks,
      taskObj: {title: ""}
      
    });
  };

  render() {
    let li = this.state.tasks.map((task, index) => {
      return (
        <Col key={index}>
          <div>{task.title} {task.desc}</div>
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
            value={this.state.taskObj.title}
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

export default TodoTest;
