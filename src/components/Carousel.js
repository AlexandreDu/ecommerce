import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'



import dataImageSlider from '../api/dataImageSlider'

const Carousel = ({changeBackgroundColor}) => {

    
    
    const [currentIndexPicture, setCurrentIndexPicture] = useState(0)


    useEffect(()=> {
        // we lift the state up to Home in order to change the background-color (of home)
        changeBackgroundColor(currentIndexPicture)
    }, [currentIndexPicture])


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
        <section className="carousel">
            <h2>Follow brands to see more from them first</h2>
            <span onClick={() => getPrevPicture()} className="previous-button"><FontAwesomeIcon icon={faArrowLeft} /></span>
            {getAllPicturesForCarousel()}
            <span onClick={() => getNextPicture()} className="next-button"><FontAwesomeIcon icon={faArrowRight} /></span>
        </section>
        
    )
}

export default Carousel