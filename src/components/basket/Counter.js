import React, { Component } from "react";
import {connect} from 'react-redux';
import { addProductToBasket, diminishProductToBasket } from '../../actions/basket/basketAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle,faMinusCircle } from '@fortawesome/free-solid-svg-icons'
const Counter = ({panier, product, addProductToBasket, diminishProductToBasket}) => {


    const formatCount = () => {
      return product.quantity
    }

    const getPriceWithLimitedDecimals = (product) => {
      return  product.price * product.quantity.toFixed(2)    
      
    }

    return (
      <>
        <div className="product-basket-wrapper">
          <div className="product-basket-image-wrapper">
              <img className="product-basket-image" src={product.image} alt={product.title}/>
          </div>
          <div className="product-basket-infos-warpper">
            <div className="product-basket-title">
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
                
              >
                  <FontAwesomeIcon icon={faMinusCircle} />
          
              </span>
            </div>
            
          </div>
          <div className="product-price-wrapper">
              <p>{getPriceWithLimitedDecimals(product)}€</p>
          </div>
        </div>
      </>
    )
  
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