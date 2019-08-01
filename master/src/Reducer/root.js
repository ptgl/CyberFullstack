import { combineReducers } from 'redux';
import isAddNewTaskReducer from "./isAddNewTask";
import productList from "./ProductList";
import editingProduct from "./editingProduct"
const rootReducer = combineReducers({
    isAddNewTask : isAddNewTaskReducer,
    productList,
    editingProduct
})

export default rootReducer;