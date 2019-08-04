import {type} from "../const"
import { switchStatement } from "@babel/types";

const initialState = [];

const cart = (state = initialState, action) => {
  console.log(state, action)
  switch (action.type) {
    case type.ADD_TO_CART:
      return [...state, action.productId];
    
    default:
      return state;
  }
};

export default cart;
