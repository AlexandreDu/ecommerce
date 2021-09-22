import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {


    return (
        <header className="header">
            <div className="logo-wrapper">
            <Link to={"/home"}><h1><img className="logo-img" alt="logo"/></h1></Link>
            </div>
            <nav>
                <ul className="navbar-links">
                    <li><Link to={"/electronics"}>Electronics</Link></li>
                    <li><Link to={"/jewelery"}>Jewelery</Link></li>
                    <li>Men's clothing"</li>
                    <li>Women's clothing</li>
                </ul>
            </nav>
            <div>
                <div><Link to={"/panier"}>Panier</Link></div>
            </div>
        </header>
    )
}

export default Navbar