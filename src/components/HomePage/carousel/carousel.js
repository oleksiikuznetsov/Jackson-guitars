import React, {Component} from 'react';
import './carousel.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import BlackGuitar from './../../../img/carousel/black-guitar.png';
import GrayGuitar from './../../../img/carousel/gray-guitar.png';
import LaminatGuitar from './../../../img/carousel/laminat-guitar.png';
import PinkGuitar from './../../../img/carousel/pink-guitar.png';
import RedGuitar from './../../../img/carousel/red-guitar.png';
import SeakGuitar from './../../../img/carousel/sea-guitar.png';
import WaveGuitar from './../../../img/carousel/wave-guitar.png';
import WhiteGuitar from './../../../img/carousel/white-guitar.png';

 
class GuitarsCarousel extends Component {
    render() {
        return (
            <Carousel
                className='carousel'
                centerMode
                centerSlidePercentage={25} 
                emulateTouch
                showThumbs={false}
                infiniteLoop={true}
                showStatus={false}
            >
                <div className='img'>
                    <img src={BlackGuitar} />
                    {/* <p className="legend">Legend 1</p> */}
                </div>
                <div className='img'>
                    <img src={GrayGuitar}/>
                    {/* <p className="legend">Legend 2</p> */}
                </div>
                <div className='img'>
                    <img src={LaminatGuitar}/>
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div className='img'>
                    <img src={PinkGuitar}/>
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div className='img'>
                    <img src={RedGuitar}/>
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div className='img'>
                    <img src={SeakGuitar}/>
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div className='img'>
                    <img src={WaveGuitar}/>
                    {/* <p className="legend">Legend 3</p> */}
                </div>
                <div className='img'>
                    <img src={WhiteGuitar}/>
                    {/* <p className="legend">Legend 3</p> */}
                </div>
            </Carousel>
        );
    }
};


export default GuitarsCarousel;