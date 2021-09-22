import React, {useEffect} from 'react'
import {connect} from 'react-redux';
import { loadProducts, loadProductsJewelery } from '../actions/products/productsAction';
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
      loadProducts,
      loadProductsJewelery
  }

export default connect(mapStateToProps, mapDispatchToProps)(Home);