import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import { loadProducts } from '../actions/products/productsAction';
const Home = (props) => {

  

    return (
        <div>

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

export default connect(mapStateToProps, mapDispatchToProps)(Home);