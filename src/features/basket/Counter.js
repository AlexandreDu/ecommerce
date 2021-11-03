import React from "react";
import { useDispatch } from "react-redux";
import { addProduct, decreaseProduct } from './basketSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faMinusCircle } from '@fortawesome/free-solid-svg-icons'
const Counter = ({product}) => {


  const dispatch = useDispatch()

  const formatCount = () => {
    return product.quantity
  }

  const getPriceWithLimitedDecimals = (product) => {
    return  product.price * product.quantity.toFixed(2)    
    
  }

  const handleClick = (product, action) => {
    if(action === 'add') {
      dispatch(addProduct(product))
    } else if (action === 'decrease') {
      dispatch(decreaseProduct(product))
    }
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
            <p>{getPriceWithLimitedDecimals(product)}€</p>
        </div>
      </div>
    </>
  )
  
}

export default Counter;