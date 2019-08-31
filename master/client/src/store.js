import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";

const initialState = {};
const middle = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middle),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
