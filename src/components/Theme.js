import React from 'react'
import Button from './Button'
import { Link } from 'react-router-dom';

const Theme = ({themeTxt, lien, themeNumber, classeButton}) => {


    return (
        
            <div className={themeNumber}>
                <Link to={lien}>
                    <p className="theme-title">{themeTxt}</p>
                    <Button classe={classeButton} lien={lien} />
                </Link>
            </div>
        
    )
}


export default Theme