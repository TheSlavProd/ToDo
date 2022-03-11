const defaultState = {
  count: 0,
  tasks: [],
  newTaskModal: false,
};

export function reducer(state = defaultState, action) {
  console.log(state);
  switch (action.type) {
    case "INCREMENT": {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    case "DECREMENT": {
      return {
        ...state,
        count: state.count - 1,
      };
    }
    case "GET_TASKS": {
      return {
        ...state,
        tasks: action.tasks,
      };
    }
    case "ADD_TASK": {
      return {
        ...state,
        tasks: [...state.tasks, action.task],
        newTaskModal: true,
      };
    }
    case "ADDING_TASK": {
      return {
        ...state,
        newTaskModal: false,
      };
    }
    case "DELETE_TASK": {
      const newTask = state.tasks.filter((task) => action.id !== task._id);
      return {
        ...state,
        tasks: newTask,
      };
    }
    default:
      return state;
  }
  /*
    if (action.type === "CHANGE_COUNT") {
      return {
        ...state,
        count: state.count + 1,
      };
    }
    if (action.type === "SEND_MESSAGE") {
      return {
        ...state,
        message: action.message,
      };
    } */
}
