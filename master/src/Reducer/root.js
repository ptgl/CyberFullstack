import { combineReducers } from 'redux';
import productList from "./productList";
import editingProduct from "./editingProduct";
import cart from "./cart"; 
import filterSize from "./filterSize";
import sortType from "./sortType";

const rootReducer = combineReducers({
    productList,
    editingProduct,
    cart,
    filterSize,
    sortType
})

export default rootReducer;