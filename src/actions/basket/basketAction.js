import {MODIFY_BASKET} from './actions-types';
import axios from 'axios';


// action de chargement des bières
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

// export const loadProductsJewelery = ()=>{

//     return function(dispatch) {
//         console.log("loadProductsJewelery dispatch")
//         axios.get("https://fakestoreapi.com/products/category/jewelery")
//             .then((response)=>{
//                 console.log(response)
//                 dispatch({
//                     type: LOAD_PRODUCTS_JEWELERY,
//                     payload: response
//                 })
//             })
//     }
// }