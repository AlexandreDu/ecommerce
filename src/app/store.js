import { configureStore } from '@reduxjs/toolkit'
import productsReducer from '../features/products/productsSlice'
import basketReducer from '../features/basket/basketSlice'

export default configureStore({
    reducer: {
        productsData: productsReducer,
        basketData: basketReducer
    }
})