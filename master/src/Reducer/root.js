import { combineReducers } from 'redux';
import isAddNewTaskReducer from "./isAddNewTask";
import productList from "./ProductList"
const rootReducer = combineReducers({
    isAddNewTask : isAddNewTaskReducer,
    productList
})

export default rootReducer;