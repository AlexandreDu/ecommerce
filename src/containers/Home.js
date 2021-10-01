import React, { useEffect, useRef } from 'react'
import {connect} from 'react-redux';
import { loadProducts } from '../actions/products/productsAction';
import Carousel from '../components/Carousel';

import Theme from '../components/Theme';

const Home = () => {

  

    return (
        <div className="home">
            <section className="carousel">
                <Carousel />
            </section>
            <h2>Do you need some <span className="size-font-high">inspiration</span> ?</h2>
            <section className="theme-gallery">
                <Theme themeTxt="Women's clothes" lien="/women/clothing" themeNumber="carre1" classeButton="button-down" />
                <Theme themeTxt="Men's clothes" lien="/men/clothing" themeNumber="carre2" classeButton="button-down" />
                <Theme themeTxt="Jewelery" lien="/jewelery" themeNumber="carre3" classeButton="button-down" />
                <Theme themeTxt="Electronics" lien="/women/clothing" themeNumber="carre4" classeButton="button-down" />
            </section>
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