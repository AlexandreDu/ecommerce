import React from "react";
import Counter from "../components/basket/Counter";

import {connect} from 'react-redux';



const Panier = ({panier}) => {

    
    return (
      <>
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
        {panier.totalPrice > 0 && 
        <div className="total-price-basket-wrapper">
          <span className="total-price-basket">Prix total : {panier.totalPrice.toFixed(2)}€</span>
        </div>}
        
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
