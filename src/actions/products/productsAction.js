import {LOAD_PRODUCTS} from './actions-types';
import { LOAD_PRODUCTS_JEWELERY } from './actions-types';
import axios from 'axios';


// action de chargement des bières
export const loadProducts = ()=>{

    return function(dispatch) {

        axios.get("https://fakestoreapi.com/products")
            .then((response)=>{
                console.log(response)
                dispatch({
                    type: LOAD_PRODUCTS,
                    payload: response
                })
            })
    }
}

export const loadProductsJewelery = ()=>{

    return function(dispatch) {
        console.log("loadProductsJewelery dispatch")
        axios.get("https://fakestoreapi.com/products/category/jewelery")
            .then((response)=>{
                console.log(response)
                dispatch({
                    type: LOAD_PRODUCTS_JEWELERY,
                    payload: response
                })
            })
    }
}