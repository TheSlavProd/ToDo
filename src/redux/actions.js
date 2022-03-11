import request from "../helper/request";

export function onGetTasks() {
  return (dispach) => {
    request("http://localhost:3001/task").then((tasks) => {
      dispach({ type: "GET_TASKS", tasks });
    });
  };
}

export function addTask(newObjValue) {
  return (dispach) => {
    dispach({ type: "ADDING_TASK" });
    request("http://localhost:3001/task", "POST", newObjValue).then((task) => {
      dispach({ type: "ADD_TASK", task });
    });
  };
}

export function deleteTask(id) {
  return (dispach) => {
    dispach({ type: "ADDING_TASK" });
    request(`http://localhost:3001/task/${id}`, "DELETE").then(() => {
      dispach({ type: "DELETE_TASK", id });
    });
  };
}
