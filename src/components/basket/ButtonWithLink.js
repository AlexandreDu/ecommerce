import React from 'react'
import { Link } from 'react-router-dom';

const ButtonWithLink = ({lien, texte, nomClass}) => {


    return (
        <Link to={lien}>
            <div className={nomClass}>{texte}</div>
        </Link>
    )
}

export default ButtonWithLink