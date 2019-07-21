import type from "../const"

const initialState = true;

const isAddNewTask = (state = initialState, action) => {
  switch (action.type) {
    case type.ADD:
      return true;
    case type.EDIT:
      return false;
    default:
      return state;
  }
};

export default isAddNewTask;
