import React, { useEffect, useRef } from 'react'
import {connect} from 'react-redux';
import { loadProducts } from '../actions/products/productsAction';
const Home = (props) => {

  
    const refTest = useRef(null)

    const handleClick = () => {
        const laRef = refTest.current
        laRef.classList.add('test')
    }
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