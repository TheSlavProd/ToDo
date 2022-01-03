import React, { useState } from "react";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import styles from "./contactStyle.module.css";

const faild = "Faild is requred";

export function Contact(props) {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState({
    name: null,
    email: null,
    message: null,
  });

  const handleChange = ({ target: { value, name } }) => {
    //console.log(name, " ", value)
    if (!value) {
      setError({
        ...error,
        [name]: faild,
      });
    } else {
      setError({
        ...error,
        [name]: null,
      });
    }

    if (name === "email" && value) {
      const emailTest = /.+@[^@]+\.[^@]{2,}$/;
      if (!emailTest.test(value)) {
        setError({
          ...error,
          email: "Invalid email",
        });
      }
    }

    setValues({
      ...values,
      [name]: value,
    });
  };

  const formSend = () => {
    const errorsArr = Object.values(error);
    const hasError = !errorsArr.every((el) => el === null);

    const value = Object.values(values);
    const valueOk = !value.every((el) => el === "");
    //console.log("haserror", hasError);
    if (!hasError && valueOk) {
      fetch(`http://localhost:3001/form`, {
        method: "POST",
        body: JSON.stringify(values),
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

          setValues({
            name: "",
            email: "",
            message: "",
          });
          console.log("sucsessfuly")
        })
        .catch((error) => {
          console.log("catch error", error);
        });

      return;
    }
    if (!hasError && !valueOk) {
      setError({
        name: faild,
        email: faild,
        message: faild,
      });
    }
  };
  return (
    <Container>
      <Row>
        <Col>
          <Form>
            <div>
              <h1>Contact us</h1>
            </div>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={values.name}
                className={error.name ? styles.invalid : ""}
                name="name"
                onChange={handleChange}
                placeholder="Enter name"
              />
              <Form.Text className={styles.textColor}>{error.name}</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={values.email}
                className={error.email ? styles.invalid : ""}
                name="email"
                onChange={handleChange}
                placeholder="Enter email"
              />
              <Form.Text className={styles.textColor}>{error.email}</Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Message</Form.Label>
              <Form.Control
                name="message"
                value={values.message}
                className={error.message ? styles.invalid : ""}
                onChange={handleChange}
                as="textarea"
                placeholder="message..."
                rows={5}
              />
              <Form.Text className={styles.textColor}>{error.message}</Form.Text>
            </Form.Group>
            <Button variant="primary" onClick={formSend}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
