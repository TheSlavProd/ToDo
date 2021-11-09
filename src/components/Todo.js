import react, { Component } from "react";
import style from "./todo.module.css";
import idGen from "../helper/idGen";
import {
  Container,
  Row,
  Col,
  Button,
  FormControl,
  InputGroup,
  Card,
  Form,
} from "react-bootstrap";
import Task from "./task/Task";
import NewTask from "./newTask/newTask";
import Confirm from "./Confirm";

class Todo extends Component {
  state = {
    tasks: [],
    selectedTask: new Set(),
    showConfirm: false,
    showNewTask: false,
  };

  addTask = (newObjValue) => {
    let tasks = [...this.state.tasks, newObjValue];
    this.setState({
      tasks,
      showNewTask: false
    });
  };

  deleteTask = (id) => {
    const newTask = this.state.tasks.filter((task) => id !== task._id);

    this.setState({
      tasks: newTask,
    });
  };

  selectTask = (id) => {
    let selectedTask = new Set(this.state.selectedTask);
    if (selectedTask.has(id)) {
      selectedTask.delete(id);
    } else {
      selectedTask.add(id);
    }

    this.setState({
      selectedTask,
    });
  };

  removeSelectedTask = () => {
    const { selectedTask, tasks } = this.state;
    const newTask = tasks.filter((task) => {
      if (selectedTask.has(task._id)) {
        return false;
      } else {
        return true;
      }
    });
    this.setState({
      tasks: newTask,
      selectedTask: new Set(),
      showConfirm: false,
    });
  };
  onHideToggle = () => {
    this.setState({
      showConfirm: !this.state.showConfirm,
    });
  };

  onSelectTasks = () => {
    const task = this.state.tasks.map((task) => task._id);
    this.setState({
      selectedTask: new Set(task),
    });
  };
  unSelectTasks = () => {
    this.setState({
      selectedTask: new Set(),
    });
  };
  onHideNewTask = () =>{
    this.setState({
      showNewTask: !this.state.showNewTask
    })
  }
  render() {
    const { tasks, showConfirm, selectedTask, showNewTask } = this.state;

    let li = tasks.map((task, index) => {
      return (
        <Col key={task._id} xl={2} lg={3} md={4} sm={6} xs={12}>
          <Task
            selectTask={this.selectTask}
            deleteTask={this.deleteTask}
            data={task}
            disabled={this.state.selectedTask.size}
            checked={selectedTask.has(task._id)}
          />
        </Col>
      );
    });

    return (
      <Container>
        <Row className="justify-content-center mb-3">
          <Card.Title>Todo APP</Card.Title>
          <Col xs={5}>
            <Button
              //
              variant="primary"
              id="button-addon2"
              onClick={this.onHideNewTask}
            >
              Add NEW TASK
            </Button>
            </Col>
            <Col>
            <Button
              //
              variant="warning"
              id="button-addon2"
              onClick={this.onSelectTasks}
            >
              Select All
            </Button>
            </Col>
            <Col>
            <Button
              //
              variant="warning"
              id="button-addon2"
              onClick={this.unSelectTasks}
            >
              UnSelect All
            </Button>
            </Col>
            <Col>
            <Button
              disabled={!this.state.selectedTask.size}
              variant="danger"
              id="button-addon2"
              onClick={this.onHideToggle}
            >
              Remove selected
            </Button>
          </Col>
        </Row>
        <Row>{li}</Row>
        {showNewTask && (
          <NewTask
            onHide={this.onHideNewTask}
            disabled={this.state.selectedTask.size}
            addTask={this.addTask}
          />
        )}
        {showConfirm && (
          <Confirm
            onHide={this.onHideToggle}
            removeSelected={this.removeSelectedTask}
            taskSize={this.state.selectedTask.size}
          />
        )}
      </Container>
    );
  }
}

export default Todo;
