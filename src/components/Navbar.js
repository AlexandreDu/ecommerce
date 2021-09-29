import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';

import {connect} from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Navbar = (props) => {

    const [showLinks, setShowLinks] = useState(false)
    
    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }

    return (
        <nav className={`sidebar ${showLinks ? "show-sidebar" : "hide-sidebar"} `}>
            <div className="sidebar_logo">
                <img id="logo" src="assets" alt="logo"/>
            </div>
            <ul className="sidebar_links">
                {/* <li className="sidebar_item">
                    <NavLink exact activeClassName="current" to="/">Home</NavLink>
                </li>
                <li className="sidebar_item">
                    <NavLink activeClassName="current" to="/electronics">Electronics</NavLink>
                </li> */}
                <li className="sidebar_item">
                    <NavLink exact activeClassName="current" to="/"><span onClick={() => handleShowLinks()} className="sidebar_link">Home</span></NavLink>
                </li>
                <li className="sidebar_item">
                    <NavLink exact activeClassName="current" to="/electronics"><span onClick={() => handleShowLinks()} className="sidebar_link">Electronics</span></NavLink>
                </li>

                <li className="sidebar_item">
                    <NavLink exact activeClassName="current" to="/jewelery"><span onClick={() => handleShowLinks()} className="sidebar_link">Jewelery</span></NavLink>
                </li>
                <li className="sidebar_item">
                    <NavLink exact activeClassName="current" to="/men/clothing"><span onClick={() => handleShowLinks()} className="sidebar_link">Men's clothing</span></NavLink>
                </li>
                <li className="sidebar_item">
                    <NavLink exact activeClassName="current" to="/women/clothing"><span onClick={() => handleShowLinks()} className="sidebar_link">Women's clothing</span></NavLink>
                </li>

            </ul>
            <div className="">
                <Link to={"/panier"}><div className="panier-icon"><FontAwesomeIcon icon={faShoppingCart} /> {props.panier.totalQuantity === undefined ? 0 : props.panier.totalQuantity}</div></Link>
            </div>
            <button className="sidebar_burger" onClick={handleShowLinks}>
                <span className="burger_bar"></span>
            </button>
        </nav>

        // <header className="header">
        //     <div className="logo-wrapper">
        //     <Link to={"/"}><h1><img className="logo-img" alt="logo"/></h1></Link>
        //     </div>
        //     <nav className={` navbar ${showLinks ? "show-navbar" : "hide-navbar" } `}>
        //         <ul className="navbar-links">
        //             <Link to={"/electronics"}><li className="navbar-item"><span className="navbar-link">Electronics</span></li></Link>
        //             <Link to={"/jewelery"}><li className="navbar-item"><span className="navbar-link">Jewelery</span></li></Link>
        //             <Link to={"/men/clothing"}><li className="navbar-item"><span className="navbar-link">Men's clothing</span></li></Link>
        //             <Link to={"/women/clothing"}><li className="navbar-item"><span className="navbar-link">Women's clothing</span></li></Link>
        //         </ul>
        //     </nav>
        //     <div className="">

        //         <Link to={"/panier"}><div className="panier-icon"><FontAwesomeIcon icon={faShoppingCart} /> {props.panier.totalQuantity === undefined ? 0 : props.panier.totalQuantity}</div></Link>
        //     </div>
        //     <div className="navbar-burger" onClick={() =>handleShowLinks()}>
        //         <span className="burger-bar"></span>
        //     </div>
        // </header>
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