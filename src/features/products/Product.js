import React, {useRef, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { CSSTransition } from 'react-transition-group';
import { addProduct, selectProductQuantity } from '../basket/basketSlice'


const Product = ({title, imageSrc, description, rating, price, product}) => {
    console.log(product.id)
    const productBasketQuantity = useSelector(state => {
        return selectProductQuantity(state, product.id)
    })
    console.log(productBasketQuantity)
    const dispatch = useDispatch()
    // effect for the plus circle when adding a product
    const [effectIsVisible, setEffectIsVisible] = useState(false)


    const productAddedEffectRef = useRef(null)
    // console.log("props.panier ", props.panier)
    const handleClickAdd = (product) => {
        setEffectIsVisible(true)
        dispatch(addProduct(product))
    }   
    
    
    const getNumberOfStars = (rate) => {
        
        return [...Array(rate)].map((star, index) => {
            
            return (
                <span key={index} className="product-rate-icon">
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
            <p className="product-rate">{getNumberOfStars(Math.round(rating.rate))}</p>
            <p className="product-price">{price.toFixed(2)}€</p>
            <div className="product-cta-wrapper">
                <span className="product-cta" onClick={() => {handleClickAdd(product)}}>Ajouter au panier</span>
                {productBasketQuantity > 0 && <div className="product-quantity-circle">
                    {productBasketQuantity}
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


export default Product;
