import {MODIFY_BASKET} from './actions-types';




export const addProductToBasket = (newProduct, basket)=>{

    return function(dispatch) {
        
        // console.log("basket dans action", basket.basket)
        console.log("dans basketAction, basket : ", basket)
        let isProductAlreadyInBasket = basket.findIndex(product => product.id === newProduct.id)
        // if the product is not in the basket yet, we add the quantity property and add the product to the basket
        if(isProductAlreadyInBasket === -1) {
            newProduct.quantity = 1
            basket.push(newProduct) 
        } else {
            // if the product is already in the basket, we add the quantity
            // console.log(basket.basket[isProductAlreadyInBasket])
            basket[isProductAlreadyInBasket].quantity += 1
        }
          
        dispatch({
            type: MODIFY_BASKET,
            payload: basket
        })
           
    }
}


export const diminishProductToBasket = (newProduct, basket)=>{

    return function(dispatch) {
        

        let isProductAlreadyInBasket = basket.findIndex(product => product.id === newProduct.id)
        // if the product is not in the basket yet, we go out from the function
        if(isProductAlreadyInBasket === -1) {
            return 
        } else {
            // if the product is already in the basket, we diminish the quantity
            // console.log(basket.basket[isProductAlreadyInBasket])
            basket[isProductAlreadyInBasket].quantity -= 1
            // if the quantity of the product is 0, we remove the product from the basket
            if(basket[isProductAlreadyInBasket].quantity === 0) {
                basket.splice(isProductAlreadyInBasket, 1)
            }
        }
          
        dispatch({
            type: MODIFY_BASKET,
            payload: basket
        })
           
    }
}