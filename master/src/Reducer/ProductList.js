import type from "../const";
import listOfProducts from "../Model/getData";

const initialState = listOfProducts.list;

const ProductList = (state = initialState, action) => {
  let list = [...state];
  let idx;
  switch (action.type) {
    case type.ADD_PRODUCT:
      return [...state, action.product];
    case type.EDIT_PRODUCT:
      idx = list.findIndex(o => o.id === action.product.id);
      list[idx] = action.product;
      return [...list];
    case type.DELETE_PRODUCT:
      idx = list.findIndex(o => o.id === action.product.id);
      list.splice(idx, 1);
      return [...list];
    default:
      return state;
  }
};

export default ProductList;
