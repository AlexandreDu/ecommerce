import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct, decreaseProduct } from './basketSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'
import { CSSTransition } from 'react-transition-group';

const Counter = ({product}) => {

  const dispatch = useDispatch()

  const formatCount = product.quantity
  

  const priceWithLimitedDecimals = product.price * product.quantity.toFixed(2)    
    
  

  const handleClick = (product, action) => {
    if(action === 'add') {
      dispatch(addProduct(product))
    } else if (action === 'decrease') {
      dispatch(decreaseProduct(product))
      if(product.quantity === 0) {
        setShowProduct(false)
      }

    }
  }

  const [showProduct, setShowProduct] = useState(true)

  return (
    <>
      <CSSTransition
        in={showProduct}
        timeout={100}
        classNames="opacite"
        unmountOnExit
        onExited={() => console.log('exit')}
      >   
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
                Quantité : {formatCount}
              </span>
              <span
                className="product-basket-button"
                onClick={() => handleClick(product, 'add')}
              >
                  <FontAwesomeIcon icon={faPlusCircle} />
              </span>
              
              <span
                className="product-basket-button"
                onClick={() =>  handleClick(product, 'decrease')}
                
              >
                  <FontAwesomeIcon icon={faMinusCircle} />
          
              </span>
            </div>
          </div>
          <div className="product-price-wrapper">
              <p>{priceWithLimitedDecimals}€</p>
          </div>
        </div>
      </CSSTransition>
    </>
  )
  
}

export default Counter;