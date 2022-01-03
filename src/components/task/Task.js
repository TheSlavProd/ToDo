import React, {Component} from "react";
import {Card, Form, Button} from "react-bootstrap"
import style from "./task.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash , faEdit} from '@fortawesome/free-solid-svg-icons'
import { formatDate } from "../../helper/utils";
import {Link} from "react-router-dom"
import  {shorter} from "../../helper/utils"
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
            <Link to={`/task/${task._id}`}>
            <Card.Header>{shorter(task.title, 25)}</Card.Header>
            </Link>
            <Card.Body>
              <Card.Title>About task</Card.Title>
              <Card.Text>
               {shorter(task.description, 60)}
              </Card.Text>
              <Card.Title>Date:</Card.Title>
              <Card.Text>
               { formatDate(task.date)}
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