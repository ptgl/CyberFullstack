import {type} from "../const"

const initialState = [];

const filterSize = (state = initialState, action) => {
  switch (action.type) {
    case type.FILTER_SIZE:
      return action.sizes;
    default:
      return state;
  }
};

export default filterSize;
