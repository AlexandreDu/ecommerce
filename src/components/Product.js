import React, {useRef, useState} from 'react'
import {connect} from 'react-redux';
import { addProductToBasket } from '../actions/basket/basketAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import { CSSTransition } from 'react-transition-group';


const Product = ({title, imageSrc, description, rating, price, panier, product, addProductToBasket}) => {
    // effect for the plus circle when adding a product
    const [effectIsVisible, setEffectIsVisible] = useState(false)


    const productAddedEffectRef = useRef(null)
    // console.log("props.panier ", props.panier)
    const handleClickAdd = (product, basket) => {


        setEffectIsVisible(true)

        addProductToBasket(product, basket.basket)
    }   
    
    const getQuantityOfProduct = () => {

        let index = panier.basket.findIndex(prod => {
            return prod.id === product.id
        })
        // if the product is in the basket, we return the quantity
        if(index !== -1) {
           
            return panier.basket[index].quantity
        } 
    }

    const getNumberOfStars = (rate) => {
        
        return [...Array(rate)].map(star => {
            
            return (
                <span className="product-rate-icon">
                <FontAwesomeIcon icon={faStar} />
                </span>
                
            )
        })
      

    }

    return (
        <div className="product">
            <div className="product-title">
                <h3>{title}</h3>
            </div>
            <div className="product-img-wrapper">
                <img className="product-img" src={imageSrc} alt="produit"/>
            </div>
            <div className="product-description-wrapper">
                <p className="product-description">
                    {description.length > 180 ? description.substring(0, 180) + "..." : description}
                </p>
            </div>
            <p>{getNumberOfStars(Math.round(rating.rate))}</p>
            {/* <p>{Math.round(rating.rate)}/5</p> */}
            <p className="product-price">{price.toFixed(2)}€</p>
            <div className="product-cta-wrapper">
                <span className="product-cta" onClick={() => {handleClickAdd(product, panier)}}>Ajouter au panier</span>
                {/* display the quantity only if > 0 */}
                {getQuantityOfProduct() > 0 && <div className="product-quantity-circle">
                    {getQuantityOfProduct()}
                </div>}
                
                
                <CSSTransition
                    in={effectIsVisible}
                    timeout={300}
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
