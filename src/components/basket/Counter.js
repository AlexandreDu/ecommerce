import React, { Component } from "react";
import {connect} from 'react-redux';
import { addProductToBasket } from '../../actions/basket/basketAction';

const Counter = ({panier, product, addProductToBasket}) => {
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
            <span style={{ fontSize: 24 }} className="">
              {product.title}
            </span>
          </div>
          <div className="">
            <span style={{ fontSize: 24 }} className="">
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
            {/* <button
              className="btn btn-info m-2"
              onClick={() => onDecrement(counter)}
              disabled={counter.value === 0 ? "disabled" : ""}
            >
                -
         
            </button> */}
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
  addProductToBasket
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);