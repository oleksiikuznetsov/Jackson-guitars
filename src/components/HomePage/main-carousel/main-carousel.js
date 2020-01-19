import React, {Component} from 'react';
import './main-carousel.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import YellowGuitar from './../../../img/Header-img/carousel-yellow-guitar.jpg';
import BlueGuitar from './../../../img/Header-img/carousel-blue-guitar.jpg';
import RedGuitar from './../../../img/Header-img/carousel-red-guitar.jpg';
import AggressiveGuitar from './../../../img/Header-img/carousel-aggressive.jpg';
{/* autoPlay={true} */}


class DemoCarousel extends Component {
    render() {
        return (
            <Carousel 
                showThumbs={false}
                showStatus={false}
                showArrows={false}
                infiniteLoop={true}
                stopOnHover={false}
                className='main-carousel'
            >
                <div className='link'>
                    <img src={YellowGuitar} alt='YellowGuitar'/>
                </div>
                <div>
                    <img src={BlueGuitar} alt='BlueGuitar'/>
                </div>
                <div>
                    <img src={RedGuitar} alt='RedGuitar'/>
                </div>
                <div>
                    <img src={AggressiveGuitar} alt='AggressiveGuitar'/>
                </div>
            </Carousel>
        );
    }
};

export default DemoCarousel;