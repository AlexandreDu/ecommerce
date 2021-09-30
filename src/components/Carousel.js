import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import womenPicture from '../assets/images/carousel/picture-1.jpg'
import menPicture from '../assets/images/carousel/picture-2.jpg'
import jewelPicture from '../assets/images/carousel/picture-3.jpg'
import electronicsPicture from '../assets/images/carousel/picture-4.jpg'


const Carousel = () => {
    
    const [picturesSrc, setPicturesSrc] = useState([])


    return (
        <>
            <div className="carousel-main-picture-wrapper">
                <span className="previous-button"><FontAwesomeIcon icon={faArrowLeft} /></span>
                <img className="carousel-main-picture" src={womenPicture} alt={{womenPicture}} />
                <span className="next-button"><FontAwesomeIcon icon={faArrowRight} /></span>
            </div>
            <div className="carousel-secondary-pictures-wrapper">
                <div className="carousel-2-picture-wrapper">
                    <img className="carousel-2-picture" src={menPicture} alt={menPicture} />
                </div>
                <div className="carousel-3-picture-wrapper">
                    <img className="carousel-3-picture" src={jewelPicture} alt={jewelPicture} />
                </div>
                <div className="carousel-4-picture-wrapper">
                    <img className="carousel-4-picture" src={electronicsPicture} alt={electronicsPicture} />
                </div>
            </div>      
        </>
        
    )
}

export default Carousel