export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_TODO_COMPLETE = "TOGGLE_TODO_COMPLETE";

export const createAddTodoAction = (payload) => {
  return {
    type: ADD_TODO,
    payload,
  };
};

export const createRemoveTodoAction = (payload) => {
  return {
    type: REMOVE_TODO,
    payload,
  };
};

export const createCompleteTodoAction = (payload) => {
  return {
    type: TOGGLE_TODO_COMPLETE,
    payload,
  };
};
