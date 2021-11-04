import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux';
import Product from './Product'
import ClipLoader from "react-spinners/ClipLoader";
import { selectProductsByCat } from './productsSlice'


const ProductsList = ({category}) => {

    const productsByCat = useSelector(state => selectProductsByCat(state, category))
    console.log(productsByCat)

    const renderProductsByCat = productsByCat.map(product => {
        return <Product key={product.id} title={product.title} imageSrc={product.image} description={product.description} rating={product.rating} price={product.price} product={product}/>
    })

    return (
        <>
            {productsByCat.length > 0
            
            ? <div className="products-list">
                {renderProductsByCat}
            </div>
        
            : <div className="spinner-wrapper">
                <ClipLoader color={"#ff1744"} loading={productsByCat} size={50} />
            </div>}
        </>    
    )
}



export default ProductsList;