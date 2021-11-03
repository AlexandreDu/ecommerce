import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    productsBasket: []
}

const basketSlice = createSlice({
    name: 'basket',
    initialState,
    reducers: {
        addProduct: (state, action) => {
            const productIndex = state.productsBasket.findIndex(element => {
                return element.id === action.payload.id
            })
            if(productIndex !== -1) {
                state.productsBasket[productIndex].quantity++
            } else {
                console.log(action.payload)
                const newProduct = {...action.payload, quantity: 1}
                console.log(newProduct)
                state.productsBasket.push(newProduct)
            }
        },
        decreaseProduct: (state, action) => {
            const indexProduct = state.productsBasket.findIndex(product => {
                return product.id === action.payload.id
            })
            // si le produit est dans le panier
            if(indexProduct !== -1) {
                state.productsBasket[indexProduct].quantity --
                // si la quantité du produit atteint 0, alors on le supprime du panier
                if(state.productsBasket[indexProduct].quantity === 0) {
                    state.productsBasket.splice(indexProduct, 1)
                }
            }
        }
    }

})

export default basketSlice.reducer

export const { addProduct, decreaseProduct } = basketSlice.actions

export const selectProductQuantity = (state, productId) => {
    const product = state.basketData.productsBasket.find(productBasket => {
        return productBasket.id === productId
    })
    // si le produit est dans le panier
    if(product !== undefined) {
        return product.quantity
    }
}

export const selectQuantityInBasket = (state => {
    let quantityInBasket = 0
    if(state.basketData.productsBasket.length > 0) {
        state.basketData.productsBasket.forEach(product => {
            quantityInBasket += product.quantity
            
        })
        return quantityInBasket    
    }  
})

export const selectAllProductsBasket = (state => {
    return state.basketData.productsBasket
})

export const selectTotalPriceBasket = (state => {
    let totalPrice = 0;
    if(state.basketData.productsBasket.length > 0) {
        state.basketData.productsBasket.forEach(product => {
            totalPrice += product.quantity * product.price
        })
        return totalPrice
    }    
})
