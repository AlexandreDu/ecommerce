import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    products: [],
    status: 'idle',
    error: null

}

export const fetchProducts = createAsyncThunk('products/fetchproducts', async() => {
    
    const response = await fetch('https://fakestoreapi.com/products')
    const dataProducts = await response.json() 
    return dataProducts
})

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.products = state.products.concat(action.payload)
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'error'
                state.error = action.error.message
            })
    }

})

export default productsSlice.reducer



export const selectProductsByCat = (state, category) => {
    return state.productsData.products.filter(product => {
        return product.category === category
    })
}