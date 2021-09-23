import { MODIFY_BASKET } from "../actions/basket/actions-types";

const initialState = {
    basket: [], 
    totalPrice: 0
}

function calculateTotalAmount(basket) {
    let totalAmount = 0;

    basket.forEach(product => {
        // console.log(product.price * product.quantity)
        totalAmount += product.price * product.quantity
    })
    return totalAmount
}

function calculateTotalQuantity(basket) {
    let totalQuantity = 0;
    basket.forEach(product => {
        totalQuantity += product.quantity
    })
    return totalQuantity
}
export default function BasketReducer(state = initialState, action) {

    switch(action.type) {
        case MODIFY_BASKET:
            let totalPrice = calculateTotalAmount(action.payload)
            let totalQuantity = calculateTotalQuantity(action.payload)
            // console.log("totalPrice ", totalPrice)
            return {basket: action.payload, totalPrice: totalPrice, totalQuantity: totalQuantity}
        break;
        
        default:
            return state;
        break;
    }
    
    
    return state;
}