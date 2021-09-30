import React, { useEffect, useRef } from 'react'
import {connect} from 'react-redux';
import { loadProducts } from '../actions/products/productsAction';
import Button from '../components/Button'

const Home = (props) => {

  

    return (
        <div className="gallery">
            <div className="carre1">
                <p>Women's clothes</p>
                <Button classe="button-down" />
            </div>
            <div className="carre2">
                <p>Men's clothes</p>
                <Button classe="button-down" />
            </div>
            <div className="carre3">
                <p>Jewelery</p>
                <Button classe="button-down" />
            </div>
            <div className="carre4">
                <p>Electronics</p>
                <Button classe="button-down" />
            </div>
        </div>
    )

}



const mapStateToProps = (store) => {
    return {
        produits: store.productsAll

    }
  }
  const mapDispatchToProps = {
      loadProducts
  }

export default connect(mapStateToProps, mapDispatchToProps)(Home);