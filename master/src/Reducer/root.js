import { combineReducers } from 'redux';
import isAddNewTaskReducer from "./isAddNewTask";
import test from "./testReducer"
const rootReducer = combineReducers({
    isAddNewTask : isAddNewTaskReducer,
})

export default rootReducer;