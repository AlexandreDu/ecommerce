import React, { useState } from 'react'
import Carousel from '../../components/Carousel';
import Theme from '../products/Theme';

const Home = () => {

    const [backgroundColor, setBackgroundColor] = useState('bg-color-yellow')

    const changeBackgroundColor = (indexPicture) => {
    
        switch(indexPicture) {
            case 0 : 
                setBackgroundColor('bg-color-yellow')
                break;
            case 1 : 
                setBackgroundColor('bg-color-dark')
                break;
            case 2 : 
                setBackgroundColor('bg-color-white')
                break;
            case 3 : 
                setBackgroundColor('bg-color-yellow-2')
                break;
            default:
                setBackgroundColor('bg-color-yellow')
        }
    }
  

    return (
        <div className="home">     
            <div className={`carousel-wrapper ${backgroundColor}`}>
                <Carousel changeBackgroundColor={changeBackgroundColor} homeBackgroundColor={backgroundColor} />
            </div>

            <section className="theme">
                <h2>Vous avez besoin d' <span className="size-font-high">inspiration</span> ?</h2>
                <div className="theme-gallery">
                    <Theme themeTxt="VĂȘtements femme" lien="/women/clothing" themeNumber="carre1" classeButton="button-down" />
                    <Theme themeTxt="VĂȘtements homme" lien="/men/clothing" themeNumber="carre2" classeButton="button-down" />
                    <Theme themeTxt="Bijoux" lien="/jewelery" themeNumber="carre3" classeButton="button-down" />
                    <Theme themeTxt="Electronique" lien="/women/clothing" themeNumber="carre4" classeButton="button-down" />
                </div>
            </section>
        </div>
    )

}


export default Home;