import React, { useState, useEffect, useLayoutEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Card, Form, Button, Container, Row, Col } from "react-bootstrap";
import { formatDate } from "../../helper/utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import EditTask from "../EditTask";
function SingleTask() {
  const { id } = useParams();
  const [task, setTask] = useState(null);
  const [editTask, setEditTask] = useState(false);
  const navigate = useNavigate();

  /*
  useEffect(() => {
    console.log("gago");
    return () => {
      console.log("unmount");
    };
  }, []); */

  useLayoutEffect(() => {
    console.log("gago");
    return () => {
      console.log("unmount");
    };
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3001/task/${id}`, {
      method: "GET",
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
        setTask(res);
      })
      .catch((error) => {
        console.log("catch error", error);
      });
  }, [id]);

  const deleteTask = () => {
    fetch(`http://localhost:3001/task/${id}`, {
      method: "DELETE",
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
        navigate("/");
      })
      .catch((error) => {
        console.log("catch error", error);
      });
  };

  const taskModalSave = (newEditObj) => {
    fetch(`http://localhost:3001/task/${newEditObj._id}`, {
      method: "put",
      body: JSON.stringify(newEditObj),
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
        setTask(res);
        setEditTask(!editTask);
      })
      .catch((error) => {
        console.log("catch error", error);
      });
  };
  const editModalNull = () => {
    setEditTask(!editTask);
  };
  const getTaskEdit = () => {
    setEditTask(true);
  };
  return (
    <div className="mt-4">
      {task ? (
        <Container>
          <Row>
            <Col>
              <Card className="mb-2">
                <Card.Header>{task.title}</Card.Header>

                <Card.Body>
                  <Card.Title>About task</Card.Title>
                  <Card.Text>{task.description}</Card.Text>
                  <Card.Title>Date:</Card.Title>
                  <Card.Text>{formatDate(task.date)}</Card.Text>
                  <Button
                    className={"m-1"}
                    onClick={() => {
                      deleteTask();
                    }}
                    variant="danger"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </Button>
                  <Button
                    className={"m-1"}
                    onClick={() => {
                      getTaskEdit();
                    }}
                    variant="warning"
                  >
                    <FontAwesomeIcon icon={faEdit} />
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      ) : (
        "not found"
      )}
      {editTask && (
        <EditTask
          onHide={editModalNull}
          editSave={taskModalSave}
          editTask={task}
        />
      )}
    </div>
  );
}
export default SingleTask;
