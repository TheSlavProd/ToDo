import react, { Component } from "react";
import { InputGroup, FormControl, Button, Modal, Form } from "react-bootstrap";
import idGen from "../helper/idGen";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { formatDate } from "../helper/utils";


class EditTask extends Component {
 constructor(props){
   super(props)
   const {date} = props.editTask
  this.state = {
   ...props.editTask,
   date: date ? new Date(date) : new Date()
  }};
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
      _id: this.state._id,
      title: inputTitle,
      description: description,
      date: formatDate(date.toISOString())
    };
    this.props.editSave(newObjValue);
  };



  handleChangeDate = (dateValue) => {
    this.setState({
      date:dateValue || new Date()
    })
  }
  render() {
    const { disabled, removeSelectedTask, onHide } = this.props;
    const {title, description} = this.state
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
              Edit task!
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
                value={title}
                name="title"
                onKeyPress={this.handleEnter}
              />
              <Form.Control 
              name="description" 
              placeholder="write task description..." 
              value={description}
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
              Save
            </Button>
            <Button onClick={onHide}>Cancel</Button>
          </Modal.Footer>
        </Modal>
      
    );
  }
}

export default EditTask;
