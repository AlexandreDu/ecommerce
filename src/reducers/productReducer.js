import {LOAD_PRODUCTS} from '../actions/products/actions-types';

const initialState = {
    productsAll: [  
    ]
}

export default function ProductReducer(state = initialState, action) {

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