import react, { Component } from "react";
import { InputGroup, FormControl, Button, Modal, Form } from "react-bootstrap";
//import idGen from "../../helper/idGen";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { formatDate } from "../../helper/utils";

class NewTask extends Component {
  state = {
    title: "",
    description: "",
    date: new Date()
  };
  handleChange = (event) => {
    let {name, value} = event.target;
    
    this.setState({
      [name]:value

    });
  };

  handleEnter = (event) => {
    if (event.key === "Enter") {
      this.addTask();
    }
  };

  addTask = () => {
    let inputTitle = this.state.title.trim();
    let description = this.state.description.trim();
    if (!inputTitle) {
      return;
    }

    const {date} = this.state
    let newObjValue = {
      //_id: idGen(),
      title: inputTitle,
      description: description,
      date: formatDate(date.toISOString())
    };
    this.props.addTask(newObjValue);
    this.setState({
      title: "",
      description: ""
    });
  };

  handleChangeDate = (dateValue) => {
    this.setState({
      date:dateValue || new Date()
    })
  }
  render() {
    const { disabled, removeSelectedTask, onHide } = this.props;

    return (
        <Modal
          show={true}
          onHide={onHide}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Add new task!
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <FormControl className="mb-3"
                disabled={disabled}
                placeholder="write task title..."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                onChange={this.handleChange}
                value={this.state.title}
                name="title"
                onKeyPress={this.handleEnter}
              />
              <Form.Control 
              name="description" 
              placeholder="write task description..." 
              as="textarea" rows={3}
              onChange={this.handleChange} />
              <DatePicker
              minDate={new Date()}
                selected={this.state.date}
                onChange={this.handleChangeDate}
          
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="success"
              disabled={disabled}
              onClick={this.addTask}
              id="button-addon2"
            >
              Add
            </Button>
            <Button onClick={onHide}>Cancel</Button>
          </Modal.Footer>
        </Modal>
      
    );
  }
}

export default NewTask;
