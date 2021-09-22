import { combineReducers } from "redux";
import ProductReducer from './productReducer';
import BasketReducer from "./basketReducer";


const rootReducer = combineReducers({
    productsAll: ProductReducer,
    basket: BasketReducer

});

export default rootReducer;