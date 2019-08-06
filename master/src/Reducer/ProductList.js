import {type} from "../const";
import listOfProducts from "../Model/getData";

const initialState = listOfProducts.list;
 
const ProductList = (state = initialState, action) => {
  let list = [...state];
  let idx;
  switch (action.type) {
    case type.ADD_PRODUCT:
      list = [...state, action.product];
      break;
    case type.EDIT_PRODUCT:
      idx = list.findIndex(o => o.id === action.product.id);
      list[idx] = action.product;
      break;
    case type.DELETE_PRODUCT:
      idx = list.findIndex(o => o.id === action.productId);
      list.splice(idx, 1);
      break;
    default:
      list = state;
  }
  localStorage.setItem("products", JSON.stringify(list));
  return [...list];
};

export default ProductList;
