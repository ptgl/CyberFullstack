import {type} from "../const"

const initialState = {};

const editingProduct = (state = initialState, action) => {
  switch (action.type) {
    case type.GET_EDITING_PRODUCT:
      return action.product;
    
    default:
      return state;
  }
};

export default editingProduct;
