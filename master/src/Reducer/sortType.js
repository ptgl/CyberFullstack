import {type} from "../const"

const initialState = "asc";

const sortType = (state = initialState, action) => {
  switch (action.type) {
    case type.SORT:
      return action.sortType;
    default:
      return state;
  }
};

export default sortType;
