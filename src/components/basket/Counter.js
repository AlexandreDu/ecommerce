import React, { Component } from "react";
import {connect} from 'react-redux';
import { addProductToBasket, diminishProductToBasket } from '../../actions/basket/basketAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle,faMinusCircle } from '@fortawesome/free-solid-svg-icons'
const Counter = ({panier, product, addProductToBasket, diminishProductToBasket}) => {
    console.log("dans counter : props.product.quantity", product.quantity)
    console.log("dans counter: props.product :", product)

    const formatCount = () => {
      console.log("product vaut : ", product)
      return product.quantity === 0 ? "Zero" :  product.quantity;
    };

    return (
      <>
        <div className="product-basket-wrapper">
          <div className="product-basket-image-wrapper">
              <img className="product-basket-image" src={product.image} alt={product.title}/>
          </div>
          <div className="product-basket-infos-warpper">
            <div className="product-basket-tile">
              <span className="">
                {product.title}
              </span>
            </div>           
            <div className="product-basket-quantity">
              <span className="">
                Quantité : {formatCount()}
              </span>
              <span
                className="product-basket-button"
                onClick={() => addProductToBasket(product, panier.basket)}
              >
                 <FontAwesomeIcon icon={faPlusCircle} />
              </span>
              <span
                className="product-basket-button"
                onClick={() => diminishProductToBasket(product, panier.basket)}
                disabled={product.quantity === 0 ? "disabled" : ""}
              >
                  <FontAwesomeIcon icon={faMinusCircle} />
          
              </span>
            </div>

          </div>
        </div>
      </>
    );
  

 
}



const mapStateToProps = (store) => {
  return {
      produits: store.productsAll,
      panier: store.basket
  }
}
const mapDispatchToProps = {
  addProductToBasket,
  diminishProductToBasket
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);