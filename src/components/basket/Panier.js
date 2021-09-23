import React, { Component } from "react";
import Counter from "./Counter";
import {connect} from 'react-redux';
import { addProductToBasket } from '../../actions/basket/basketAction';

const Panier = ({panier}) => {

  console.log("voici la panier dans counters :", panier.basket)
    
    return (
      <div>

        {panier.basket.map((product, index) => {
          // console.log(product)
          return (

            <Counter
              key={index}
              product={product}
            />

          ) 
        }
         
         
          
        )}
      </div>
    );
}

const mapStateToProps = (store) => {
  return {
      produits: store.productsAll,
      panier: store.basket
  }
}
const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Panier);
