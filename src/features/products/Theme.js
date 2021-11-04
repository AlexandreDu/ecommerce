import React from 'react'
import { Link } from 'react-router-dom';

const Theme = ({themeTxt, lien, themeNumber, classeButton}) => {

    return (
            <div className={themeNumber}>
                <Link to={lien}>
                    <p className="theme-title">{themeTxt}</p>
                    <div className={classeButton}></div>
                </Link>
            </div>
    )
}


export default Theme