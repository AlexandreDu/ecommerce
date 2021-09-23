import React from 'react'
import { Link } from 'react-router-dom';

import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Navbar = (props) => {


    return (
        <header className="header">
            <div className="logo-wrapper">
            <Link to={"/"}><h1><img className="logo-img" alt="logo"/></h1></Link>
            </div>
            <nav>
                <ul className="navbar-links">
                    <Link to={"/electronics"}><li>Electronics</li></Link>
                    <Link to={"/jewelery"}><li>Jewelery</li></Link>
                    <Link to={"/men/clothing"}><li>Men's clothing</li></Link>
                    <Link to={"/women/clothing"}><li>Women's clothing</li></Link>
                </ul>
            </nav>
            <div className="">

                <Link to={"/panier"}><div className="panier-icon"><FontAwesomeIcon icon={faShoppingCart} /> {props.panier.totalQuantity === undefined ? 0 : props.panier.totalQuantity}</div></Link>
            </div>
        </header>
    )
}



const mapStateToProps = (store) => {
    return {
        produits: store.productsAll,
        panier: store.basket
    }
  }
  const mapDispatchToProps = {
  
  }

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);