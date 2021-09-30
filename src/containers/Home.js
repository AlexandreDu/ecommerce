import React, { useEffect, useRef } from 'react'
import {connect} from 'react-redux';
import { loadProducts } from '../actions/products/productsAction';
import ThemeHome from '../components/ThemeHome';

const Home = () => {

  

    return (
        <div className="home">
            <div className="gallery">
                <ThemeHome themeTxt="Women's clothes" lien="/women/clothing" themeNumber="carre1" classeButton="button-down" />
                <ThemeHome themeTxt="Men's clothes" lien="/men/clothing" themeNumber="carre2" classeButton="button-down" />
                <ThemeHome themeTxt="Jewelery" lien="/jewelery" themeNumber="carre3" classeButton="button-down" />
                <ThemeHome themeTxt="Electronics" lien="/women/clothing" themeNumber="carre4" classeButton="button-down" />
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