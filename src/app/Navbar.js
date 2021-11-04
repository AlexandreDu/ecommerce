import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {selectQuantityInBasket} from '../features/basket/basketSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import logo from '../assets/logo/logo.png'

const Navbar = () => {
    const quantityBasket = useSelector(selectQuantityInBasket)
    
    const [showLinks, setShowLinks] = useState(false)
    
    const handleShowLinks = () => {
        setShowLinks(!showLinks)
    }

    return (
        <nav className={`sidebar ${showLinks ? "show-sidebar" : "hide-sidebar"} `}>
            <div className="sidebar_logo">
                <h1>
                    <Link to="/">
                        <img id="logo" src={logo} alt="Welcome to the shop"/>
                    </Link>
                </h1>
            </div>
            <ul className="sidebar_links">
                <li className="sidebar_item">
                    <NavLink exact activeClassName="current" to="/"><span onClick={() => handleShowLinks()} className="sidebar_link">Home</span></NavLink>
                </li>
                <li className="sidebar_item">
                    <NavLink exact activeClassName="current" to="/electronics"><span onClick={() => handleShowLinks()} className="sidebar_link">Electronique</span></NavLink>
                </li>
                <li className="sidebar_item">
                    <NavLink exact activeClassName="current" to="/jewelery"><span onClick={() => handleShowLinks()} className="sidebar_link">Bijoux</span></NavLink>
                </li>
                <li className="sidebar_item">
                    <NavLink exact activeClassName="current" to="/men/clothing"><span onClick={() => handleShowLinks()} className="sidebar_link">Vêtements homme</span></NavLink>
                </li>
                <li className="sidebar_item">
                    <NavLink exact activeClassName="current" to="/women/clothing"><span onClick={() => handleShowLinks()} className="sidebar_link">Vêtements femme</span></NavLink>
                </li>
            </ul>
            <div className="">
                <Link to={"/panier"}><div className="panier-icon"><FontAwesomeIcon icon={faShoppingCart} /> {quantityBasket === undefined ? 0 : quantityBasket}</div></Link>
            </div>
            <button className="sidebar_burger" onClick={handleShowLinks}>
                <span className="burger_bar"></span>
            </button>
        </nav>

    )
}



export default Navbar;