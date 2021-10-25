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
  Form
} from "react-bootstrap";


class Todo extends Component {
  state = {
    tasks: [],
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
    let newObjValue = {
      _id: idGen(),
      inputValue,
    };
    if (!inputValue) {
      return;
    }
    let tasks = [...this.state.tasks, newObjValue];
    this.setState({
      tasks,
      inputValue: "",
    });
  };

  deleteTask = (id) =>{
   const newTask = this.state.tasks.filter((task)=>id !== task._id)

    this.setState({
      tasks: newTask
    })

  }

  render() {
    const { inputValue, tasks } = this.state;

    let li = tasks.map((task, index) => {
      return (
        <Col key={task._id} 
        xl={2}
        lg={3}
        md={4}
        sm={6}
        xs={12}
        >
          <Card border="primary" className="mb-2">
            <Card.Header>{task.inputValue}</Card.Header>
            <Card.Body>
            
              <Card.Title>About task</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Form.Check type="checkbox" label="Check for remove" />
              <Button onClick={()=>{this.deleteTask(task._id)}} variant="danger">
                Delete
              </Button>
            </Card.Body>
          </Card>
        </Col>
      );
    });

    return (
      <Container>
        <Row className="justify-content-center">
        <Card.Title>Todo APP</Card.Title>
          <Col xs={10}>
            <InputGroup className="mb-3">
              <FormControl
                placeholder="write task..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={this.handleChange}
                value={inputValue}
              />
              <Button
                variant="outline-primary"
          
                onClick={this.addTask}
                id="button-addon2"
              >
                Add
              </Button>
            </InputGroup>
          </Col>
        </Row>
        <Row>{li}</Row>
      </Container>
    );
  }
}

export default Todo;
