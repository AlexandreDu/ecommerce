import React from 'react'
import {connect} from 'react-redux';
import { addProductToBasket } from '../actions/basket/basketAction';

const Product = ({title, imageSrc, description, rating, price, panier, product, addProductToBasket}) => {

    // console.log("props.panier ", props.panier)
    const handleClickAdd = (product, basket) => {
        console.log("dans product, product et basket : ", product, basket)
        addProductToBasket(product, basket.basket)
    }   

    return (
        <figure className="product">
            {console.log("panier", panier)}
            <h3>{title}</h3>
            <div className="product-img-wrapper">
                <img className="product-img" src={imageSrc} alt="produit"/>
            </div>
            <figcaption>{description}</figcaption>
            <p>{rating.rate} /5</p>
            <p>{price} €</p>
            <span onClick={() => {handleClickAdd(product, panier)}}>Ajouter au panier</span>
        </figure>
    )
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

export default connect(mapStateToProps, mapDispatchToProps)(Product);
