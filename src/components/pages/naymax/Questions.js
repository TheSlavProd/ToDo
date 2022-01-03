import { Row, Col, Accordion } from "react-bootstrap";
function Questions() {
  return (
    <Row className="mt-4 ">
      <Col>
        <h2>Frequently Asked Questions</h2>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              I’m completely new to Programming: can I take the courses and
              become a competitive software engineer.
            </Accordion.Header>
            <Accordion.Body>
              Sure you can! Please, consider applying to our introductory
              courses.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              How can I participate in the courses?
            </Accordion.Header>
            <Accordion.Body>
              To participate you need to: - Register on the web page (after
              registration you’ll get an email where you can find information
              about the exam test) - Take the exam - Pass an informal interview
              with the tutor Afterwards you will be enrolled in the course
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              I took the exam. When and how can I know the results?
            </Accordion.Header>
            <Accordion.Body>
              You will be informed about the results in two weeks after the
              exam. Sometimes it can take us three weeks. If you don’t receive a
              response, please make sure you check the “Spam” folder of your
              email account.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              What if I could not pass the beginner's course test?
            </Accordion.Header>
            <Accordion.Body>
              If you have not been able to solve the math questions, you can
              apply for the "Math Fundamentals" course after which you can apply
              for any beginner course.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              How much do I have to pay for a course?
            </Accordion.Header>
            <Accordion.Body>
              Depending on what course you choose, the course prices are
              different. You can learn more about the prices on our website, in
              separate pages for each given course.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Col>
    </Row>
  );
}

export default Questions;
