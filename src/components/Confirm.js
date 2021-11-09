import React from "react";
import {Modal, Button} from "react-bootstrap"

function Confirm(props){
  const {removeSelected, onHide, taskSize} = props
    return(
          
        <Modal
        show={true}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Attention!
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>You definitely want to delete {taskSize}  task{taskSize > 1 ?'s' : ""}

          </h4>
          <p>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
            consectetur ac, vestibulum at eros.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant={"danger"} onClick={removeSelected}>Delete</Button>
          <Button onClick={onHide}>Cancel</Button>
        </Modal.Footer>
      </Modal>

    )
}

export default Confirm;