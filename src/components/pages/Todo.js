import react, { Component } from "react";
import style from "../todo.module.css";
import idGen from "../../helper/idGen";
import { connect } from "react-redux";
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
import Task from "../task/Task";
import NewTask from "../newTask/newTask";
import Confirm from "../Confirm";
import EditTask from "../EditTask";
import { onGetTasks, deleteTask } from "../../redux/actions";
class Todo extends Component {
  state = {
    // tasks: [],
    selectedTask: new Set(),
    showConfirm: false,
    showNewTask: false,
    editTask: null,
  };
  componentDidMount() {
    this.props.onGetTasks();
  }

  componentDidUpdate(prevState) {
    console.log(prevState);
    if (!prevState.newTaskModal && this.props.newTaskModal) {
      this.setState({
        showNewTask: false,
      });
    }
  }

  //--------------------ADD TASK-------------------------------

  //------------DELETE TASK -------------------------------

  //-----------------SELECT TASK-----------------------
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

  //-------------REMOVE SELECTED--------------
  removeSelectedTask = () => {
    const { selectedTask, tasks } = this.state;
    const body = { tasks: [...selectedTask] };
    fetch(`http://localhost:3001/task`, {
      method: "PATCH",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (response) => {
        const res = await response.json();
        if (response.status >= 400 && response.status < 600) {
          if (response.error) {
            throw response.error;
          } else {
            throw new Error("something error");
          }
        }
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
      })
      .catch((error) => {
        console.log("catch error", error);
      });
  };

  //--------------------------------------------
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
  onHideNewTask = () => {
    this.setState({
      showNewTask: !this.state.showNewTask,
    });
  };
  editTask = (task) => {
    this.setState({
      editTask: task,
    });
  };
  editModalNull = () => {
    this.setState({
      editTask: null,
    });
  };

  //-----------------EDIT TASK---------------------------
  editTaskSave = (newEditObj) => {
    fetch(`http://localhost:3001/task/${newEditObj._id}`, {
      method: "put",
      body: JSON.stringify(newEditObj),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (response) => {
        const res = await response.json();
        if (response.status >= 400 && response.status < 600) {
          if (response.error) {
            throw response.error;
          } else {
            throw new Error("something error");
          }
        }

        const tasks = [...this.state.tasks];
        const foundTask = tasks.findIndex(
          (task) => task._id === newEditObj._id
        );
        tasks[foundTask] = newEditObj;
        this.setState({
          tasks,
          editTask: null,
        });
      })
      .catch((error) => {
        console.log("catch error", error);
      });
  };
  render() {
    const { showConfirm, selectedTask, showNewTask, editTask } = this.state;
    const { tasks } = this.props;
    let li = tasks.map((task, index) => {
      return (
        <Col key={task._id} xl={2} lg={3} md={4} sm={6} xs={12}>
          <Task
            selectTask={this.selectTask}
            deleteTask={this.props.deleteTask}
            data={task}
            disabled={this.state.selectedTask.size}
            checked={selectedTask.has(task._id)}
            editTask={this.editTask}
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
            //addTask={this.props.addTask}
          />
        )}
        {showConfirm && (
          <Confirm
            onHide={this.onHideToggle}
            removeSelected={this.removeSelectedTask}
            taskSize={this.state.selectedTask.size}
          />
        )}
        {editTask && (
          <EditTask
            onHide={this.editModalNull}
            editSave={this.editTaskSave}
            editTask={editTask}
          />
        )}
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    newTaskModal: state.newTaskModal,
  };
};

//const mapDispachToProps = (dispach) => {
//return {
// onGetTasks: () => {
// request("http://localhost:3001/task").then((tasks) => {
//   dispach({ type: "GET_TASKS", tasks });
//  });
//  },
// };
//};

const mapDispachToProps = {
  onGetTasks,
  deleteTask,
};
export default connect(mapStateToProps, mapDispachToProps)(Todo);
