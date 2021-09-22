import {LOAD_PRODUCTS} from '../actions/products/actions-types';

const initialState = {
    productsAll: []
}

export default function ProductReducer(state = initialState, action) {
    console.log(action.type)
    switch(action.type) {
        case LOAD_PRODUCTS:
            return {productsAll: action.payload}
        break;
        
        default:
            return state;
        break;
    }
    
    
    return state;
}