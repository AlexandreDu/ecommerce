import React from 'react'

const Product = ({title, imageSrc, description, rate, price}) => {


    return (
        <figure className="product">
            <h3>{title}</h3>
            <div className="product-img-wrapper">
                <img className="product-img" src={imageSrc} alt="produit"/>
            </div>
            <figcaption>{description}</figcaption>
            <span>{rate}</span>
            <span>{price}</span>
        </figure>
    )
}

export default Product