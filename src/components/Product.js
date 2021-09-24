import React, {useRef, useState} from 'react'
import {connect} from 'react-redux';
import { addProductToBasket } from '../actions/basket/basketAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

import { CSSTransition } from 'react-transition-group';


const Product = ({title, imageSrc, description, rating, price, panier, product, addProductToBasket}) => {

    const [effectIsVisible, setEffectIsVisible] = useState(false)
    const productAddedEffectRef = useRef(null)
    // console.log("props.panier ", props.panier)
    const handleClickAdd = (product, basket) => {


        setEffectIsVisible(true)
        addProductToBasket(product, basket.basket)
    }   
    
    return (
        <div className="product">
            {console.log("panier", panier)}
            <h3>{title}</h3>
            <div className="product-img-wrapper">
                <img className="product-img" src={imageSrc} alt="produit"/>
            </div>
            <div className="product-description">{description.length > 180 ? description.substring(0, 180) + "..." : description}</div>
            <p>{rating.rate} /5</p>
            <p className="product-price">{price} €</p>
            <div>
                <span className="product-cta" onClick={() => {handleClickAdd(product, panier)}}>Ajouter au panier</span>
                <CSSTransition
                    in={effectIsVisible}
                    timeout={700}
                    classNames="product-cta-on"
                    // unmountOnExit={true}
                    onEnter={() => setEffectIsVisible(false)}

                >
                    <span className="product-add" ref={productAddedEffectRef} ><FontAwesomeIcon icon={faPlusCircle} /></span>
                </CSSTransition>
                
            </div>
            
            
        </div>
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
