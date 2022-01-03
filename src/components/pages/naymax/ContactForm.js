import { Row, Col, Button, Form } from "react-bootstrap";

function ContactForm() {
  return (
    <Row className="mt-5 mb-5 justify-content-center">
      <Col>
        <h2> Get Custom Advice</h2>
        <p>
          Please fill out this short form, and our Admissions team will contact
          you to help you find out which course fits you best.
        </p>
      </Col>
      <Col>
        <Form>
          <Row className="mb-3 ">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label>Name Surname</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label>Email</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
          </Row>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>Phone</Form.Label>
              <Form.Control defaultValue="+(374) "></Form.Control>
            </Form.Group>
          </Row>

          <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="I agree with P.P." />
          </Form.Group>

          <Button variant="info">Enroll</Button>
        </Form>
      </Col>
    </Row>
  );
}

export default ContactForm;
