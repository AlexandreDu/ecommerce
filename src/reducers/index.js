import { combineReducers } from "redux";
import ProductReducer from './productReducer';


const rootReducer = combineReducers({
    productsAll: ProductReducer

});

export default rootReducer;