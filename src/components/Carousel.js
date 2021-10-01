import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
// import womenPicture from '../assets/images/carousel/picture-1.jpg'
// import menPicture from '../assets/images/carousel/picture-2.jpg'
// import jewelPicture from '../assets/images/carousel/picture-3.jpg'
// import electronicsPicture from '../assets/images/carousel/picture-4.jpg'


import dataImageSlider from '../api/dataImageSlider'

const Carousel = () => {
    
    const [currentIndexPicture, setCurrentIndexPicture] = useState(0)

    const getNextPicture = () => {
        if(currentIndexPicture < dataImageSlider.length - 1) {
            setCurrentIndexPicture(prev => prev + 1)
        } else {
            setCurrentIndexPicture(0)
        } 
    }

    const getPrevPicture = () => {
        console.log("currentIndexPicture", currentIndexPicture)
        if(currentIndexPicture > 0) {
            setCurrentIndexPicture(prev => prev - 1)
        } else {
            setCurrentIndexPicture( dataImageSlider.length - 1)
        } 
    }
    
    const getAllPicturesForCarousel = () => {


        return dataImageSlider.map((data, index) => {
            return (
                <div className={currentIndexPicture === index ? "slide active-picture" : "slide"}>
                    {currentIndexPicture === index && <>
                        <img className="carousel-main-picture" src={process.env.PUBLIC_URL + `/images/carousel/${data}`} alt={data}/>
                    </>}   
                    {/* render the other images with display none */}                     
                    <img className="hide" src={process.env.PUBLIC_URL + `/images/carousel/${data}`} alt={data}/>
                </div>
            )
        })
    }
        

    return (
        <>
        {console.log("render")}

                <span onClick={() => getPrevPicture()} className="previous-button"><FontAwesomeIcon icon={faArrowLeft} /></span>
                {getAllPicturesForCarousel()}
                <span onClick={() => getNextPicture()} className="next-button"><FontAwesomeIcon icon={faArrowRight} /></span>

        </>
        
    )
}

export default Carousel