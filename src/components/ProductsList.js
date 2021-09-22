import React, {useState, useEffect} from 'react'
import Product from '../components/Product'

import {connect} from 'react-redux';
import { loadProducts } from '../actions/products/productsAction';

const ProductsList = (props) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch("https://fakestoreapi.com/products/category/" + category)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            setProducts(response)
        })
        .catch(err => err)
    }, [])

    const test = () => {
        props.loadProducts()

    }
    const getAllProductsFromCat = () => {
        return products.map(product => {
            return (
                <Product key={product.id} title={product.title} imageSrc={product.image} description={product.description} rate={product.rate} price={product.price}/>
            )
        })
    }

    return (
        <div className="products-list">
            
            {getAllProductsFromCat()}
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