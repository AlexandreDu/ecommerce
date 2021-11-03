import React, { useState } from "react";
import Counter from "./Counter";
import { useSelector } from 'react-redux';
import { selectAllProductsBasket, selectTotalPriceBasket } from "./basketSlice";
// import Order from "./Order";

const Panier = () => {

  const productsInBasket = useSelector(selectAllProductsBasket)
  const totalPriceBasket = useSelector(selectTotalPriceBasket)

  return (
    <>
      
        <div className="basket-wrapper">
          {productsInBasket.length > 0 
          ? productsInBasket.map((product, index) => {

            return (
              <Counter
                key={index}
                product={product}
              />
            ) 
          })       
          : <div>
              <p className="basket-alert">Votre panier est vide.</p>
            </div>
          }
        </div>
        {/* if there is at least one product in the cart */}
        {totalPriceBasket > 0 && 
        <>
          <div className="total-price-basket-wrapper">
            <span className="total-price-basket">Prix total : {totalPriceBasket.toFixed(2)}€</span>
          </div> 
        </>}
    </>
  )
}



export default Panier
