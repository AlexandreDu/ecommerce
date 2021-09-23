import React, {useState, useEffect} from 'react'
import Product from '../components/Product'

import {connect} from 'react-redux';
import { loadProducts } from '../actions/products/productsAction';

const ProductsList = (props) => {

  

    
  
 
    const getAllProductsFromCat = () => {

        // console.log("props.produits", props.produits.productsAll.data)
        const productsCopyFiltered = [...props.produits.productsAll.data].filter(product => {
            // console.log(product.category === props.category)
            return product.category === props.category
        })
        // console.log("productsCopy", productsCopyFiltered)
        return productsCopyFiltered.map(product => {
            return (
                <Product key={product.id} title={product.title} imageSrc={product.image} description={product.description} rating={product.rating} price={product.price} product={product}/>
            )
        })
    }

    return (
        <div className="products-list">
            {props.produits.productsAll.data !== undefined && <>
            {getAllProductsFromCat()}
            </>}
        </div>
    )
}

const mapStateToProps = (store) => {
    return {
        produits: store.productsAll,

    }
  }
  const mapDispatchToProps = {
      loadProducts
  }

export default connect(mapStateToProps, mapDispatchToProps)(ProductsList);