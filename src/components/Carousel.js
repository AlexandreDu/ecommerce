import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import dataImageSlider from '../api/dataImageSlider'

const Carousel = ({changeBackgroundColor, homeBackgroundColor}) => {

    const [currentIndexPicture, setCurrentIndexPicture] = useState(0)


    useEffect(()=> {
        
        changeBackgroundColor(currentIndexPicture)
    }, [changeBackgroundColor, currentIndexPicture])


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
                <div key={index} className={currentIndexPicture === index ? "slide active-picture" : "slide"}>
                    {currentIndexPicture === index && <>
                        <img className="carousel-main-picture" src={process.env.PUBLIC_URL + `/images/carousel/${data}`} alt={data}/>
                    </>}   
                    {/* reder des autres images en display none */}                     
                    <img className="hide" src={process.env.PUBLIC_URL + `/images/carousel/${data}`} alt={data}/>
                </div>
            )
        })
    }
        

    return (
        <section className="carousel">
            <h2><span className="size-font-high">Retrouvez</span> vos marques préférées</h2>
            {/* le bg-color change en fonction du background de la home (via props) */}
            <span onClick={() => getPrevPicture()} className={`previous-button ${homeBackgroundColor}`}><FontAwesomeIcon icon={faArrowLeft} /></span>
            {getAllPicturesForCarousel()}
            <span onClick={() => getNextPicture()} className="next-button"><FontAwesomeIcon icon={faArrowRight} /></span>
        </section>
        
    )
}

export default Carousel