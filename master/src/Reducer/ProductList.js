import type from "../const"
import listOfProducts from "../Model/getData";

const initialState = listOfProducts.list;

const ProductList = (state = initialState, action) => {
  switch (action.type) {
    case type.ADD_PRODUCT:
      return [...state, action.product];
    case type.EDIT:
      return false;
    default:
      return state;
  }
};

export default ProductList;
