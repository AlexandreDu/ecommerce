import React from 'react'
import { Link } from 'react-router-dom';

const Button = ({classe, lien}) => {

    return (
        <Link to={lien}>
            <div className={classe}></div>
        </Link>
    )
}

export default Button 

