import React, { Component } from "react";
import {connect} from 'react-redux';
import { addProductToBasket, diminishProductToBasket } from '../../actions/basket/basketAction';

const Counter = ({panier, product, addProductToBasket, diminishProductToBasket}) => {
    console.log("dans counter : props.product.quantity", product.quantity)
    console.log("dans counter: props.product :", product)

    const formatCount = () => {
      console.log("product vaut : ", product)
      return product.quantity === 0 ? "Zero" :  product.quantity;
    };

    return (
      <div>
        <div className="">
          <div className="">
            <span className="">
              {product.title}
            </span>
          </div>
          <div>
            <img src={product.image} alt={product.title}/>
          </div>
          <div className="">
            <span className="">
              {formatCount()}
            </span>
          </div>
          <div className="">
            <button
              className=""
              onClick={() => addProductToBasket(product, panier.basket)}
            >
                +
              {/* <i className="fa fa-plus-circle" aria-hidden="true" /> */}
            </button>
            <button
              className="btn btn-info m-2"
              onClick={() => diminishProductToBasket(product, panier.basket)}
              disabled={product.quantity === 0 ? "disabled" : ""}
            >
                -
         
            </button>
            {/* <button
              className="btn btn-danger"
              onClick={() => onDelete(counter.id)}
            >
                X
        
            </button> */}
          </div>
        </div>
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
  addProductToBasket,
  diminishProductToBasket
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);