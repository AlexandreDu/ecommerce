import {LOAD_PRODUCTS} from './actions-types';
import axios from 'axios';


// action de chargement des bières
export const loadProducts = ()=>{

    return function(dispatch) {
        console.log('taaat', dispatch)
        console.log('tuut')
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