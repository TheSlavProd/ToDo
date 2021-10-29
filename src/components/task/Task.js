import React, {Component} from "react";
import {Card, Form, Button} from "react-bootstrap"
import style from "./task.module.css"
export default class Task extends Component{
    state = {
        border: true
    }
    handleCheck = () => {
        const {selectTask} = this.props
            selectTask(this.props.data._id); 
            
        this.setState({
            border: !this.state.border
        })
    }

    render(){
        const task = this.props.data
        const {disabled,deleteTask, } = this.props
        return(
            <Card border={`${this.state.border ? `primary`:"danger"} `} className="mb-2">
            <Card.Header>{task.inputValue}</Card.Header>
            <Card.Body>
              <Card.Title>About task</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Form.Check
                type="checkbox"
                label="Check for remove"
                onChange={this.handleCheck}
              />
              <Button
                disabled={disabled}
                onClick={() => {
                  deleteTask(task._id);
                }}
                variant="danger"
              >
                Delete
              </Button>
            </Card.Body>
          </Card>
            
        )

    }
}