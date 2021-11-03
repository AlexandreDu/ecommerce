import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { fetchProducts } from './productsSlice';


const FetchData = () => {

    const dispatch = useDispatch()
    
    useEffect(() => {
        
        dispatch(fetchProducts())

    }, [dispatch])

    return (
        null
    )
}



export default FetchData;


