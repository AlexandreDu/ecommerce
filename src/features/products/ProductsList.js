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
    // const getAllProductsFromCat = () => {

    //     // console.log("props.produits", props.produits.productsAll.data)
    //     const productsCopyFiltered = [...props.produits.productsAll.data].filter(product => {
    //         // console.log(product.category === props.category)
    //         return product.category === props.category
    //     })
    //     // console.log("productsCopy", productsCopyFiltered)
    //     return productsCopyFiltered.map(product => {
    //         return (
    //             <Product key={product.id} title={product.title} imageSrc={product.image} description={product.description} rating={product.rating} price={product.price} product={product}/>
    //         )
    //     })
    // }

    return (
        <div className="products-list">
            {renderProductsByCat}
        </div>
    )
}



export default ProductsList;