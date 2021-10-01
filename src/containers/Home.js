import React, { useState, useEffect, useRef } from 'react'
import {connect} from 'react-redux';
import { loadProducts } from '../actions/products/productsAction';
import Carousel from '../components/Carousel';

import Theme from '../components/Theme';

const Home = () => {


    const [backgroundColor, setBackgroundColor] = useState('bg-color-yellow')

    const changeBackgroundColor = (indexPicture) => {
    
        switch(indexPicture) {
            case 0 : 
                setBackgroundColor('bg-color-yellow')
                break;
            case 1 : 
                setBackgroundColor('bg-color-dark')
                break;
            case 2 : 
                setBackgroundColor('bg-color-white')
                break;
            case 3 : 
                setBackgroundColor('bg-color-yellow-2')
                break;
            default:
                console.log('pb')
        }
        
    }
  

    return (
        <div className="home">     
            <div className={`carousel-wrapper ${backgroundColor}`}>
                <Carousel changeBackgroundColor={changeBackgroundColor} homeBackgroundColor={backgroundColor} />
            </div>

            <section className="best-seller">
       
            </section>

            <section className="theme">
                <h2>Do you need some <span className="size-font-high">inspiration</span> ?</h2>
                <div className="theme-gallery">
                    <Theme themeTxt="Women's clothes" lien="/women/clothing" themeNumber="carre1" classeButton="button-down" />
                    <Theme themeTxt="Men's clothes" lien="/men/clothing" themeNumber="carre2" classeButton="button-down" />
                    <Theme themeTxt="Jewelery" lien="/jewelery" themeNumber="carre3" classeButton="button-down" />
                    <Theme themeTxt="Electronics" lien="/women/clothing" themeNumber="carre4" classeButton="button-down" />
                </div>
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