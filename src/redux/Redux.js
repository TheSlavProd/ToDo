const defaultState = {
  count: 0,
  tasks: [],
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
