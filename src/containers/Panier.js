import React, { useState } from "react";
import Counter from "../components/basket/Counter";
import {connect} from 'react-redux';

import Order from "./Order";

const Panier = ({panier}) => {

  const [isPopUpDisplayed, setIsPopupDisplayed] = useState(false)

  // when the user click on order
  const handleClickOrder = () => {
    setIsPopupDisplayed(true)

  }

  // when the user click on the cross of the order form
  const handleClickClosePopUp = () => {
    setIsPopupDisplayed(false)
  }
    
  return (
    <>
      <div className={`${isPopUpDisplayed ? 'blur-effect' : ''}`}>
        <div className="basket-wrapper">
          {panier.basket.length > 0 
          ? panier.basket.map((product, index) => {

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
        {panier.totalPrice > 0 && 
        <>
          <div className="total-price-basket-wrapper">
            <span className="total-price-basket">Prix total : {panier.totalPrice.toFixed(2)}€</span>
          </div> 
            <div className="basket-cta" onClick={() => handleClickOrder()}>Passer la commande</div>
        </>}
      </div>
      
      {isPopUpDisplayed && <>
        <Order handleClickClosePopUp={handleClickClosePopUp}/>
      
      </>}
    </>
  )
}

const mapStateToProps = (store) => {
  return {
      panier: store.basket
  }
}
const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Panier);
