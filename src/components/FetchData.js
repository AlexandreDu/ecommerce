import React, {useState, useEffect} from 'react'
import {connect} from 'react-redux';
import { loadProducts } from '../actions/products/productsAction';


const FetchData = (props) => {
    useEffect(() => {
        props.loadProducts()
    }, [])

    return (
        null
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
  
export default connect(mapStateToProps, mapDispatchToProps)(FetchData);


