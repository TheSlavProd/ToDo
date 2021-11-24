import React, {Component} from "react";
import {Card, Form, Button} from "react-bootstrap"
import style from "./task.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash , faEdit} from '@fortawesome/free-solid-svg-icons'

export default class Task extends Component{

    handleCheck = () => {
        const {selectTask} = this.props
            selectTask(this.props.data._id); 
    }

    render(){
        const task = this.props.data
        const {disabled,deleteTask, checked, editTask} = this.props
        return(
            <Card border={`${checked ? `danger`:"primary"} `} className="mb-2">
            <Card.Header>{task.title}</Card.Header>
            <Card.Body>
              <Card.Title>About task</Card.Title>
              <Card.Text>
               { task.description}
              </Card.Text>
              <Form.Check
                type="checkbox"
                label="Check for remove"
                onChange={this.handleCheck}
                checked={checked}
              />
              <Button
              className={"m-1"}
                disabled={disabled}
                onClick={() => {
                  deleteTask(task._id);
                }}
                variant="danger"
              >
              <FontAwesomeIcon icon={faTrash} />
              </Button>
              <Button
              className={"m-1"}
                disabled={disabled}
                onClick={() => {
                 editTask(task)
                }}
                variant="warning"
              >
              <FontAwesomeIcon icon={faEdit} />
              </Button>
            </Card.Body>
          </Card>
            
        )

    }
}