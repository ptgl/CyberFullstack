import { combineReducers } from 'redux';
import isAddNewTaskReducer from "./isAddNewTask";
import productList from "./productList";
import editingProduct from "./editingProduct";
import cart from "./cart";
import filterSize from "./filterSize";

const rootReducer = combineReducers({
    isAddNewTask : isAddNewTaskReducer,
    productList,
    editingProduct,
    cart,
    filterSize
})

export default rootReducer;