import React, { Component } from "react";
import Counter from "./Counter";
import {connect} from 'react-redux';



const Panier = ({panier}) => {

  console.log("voici la panier dans counters :", panier.basket)
    
    return (
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
    );
}

const mapStateToProps = (store) => {
  return {
      panier: store.basket
  }
}
const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Panier);
