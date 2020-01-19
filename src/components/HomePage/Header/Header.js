import React from 'react';
import Logo from './../../../img/jackson-logo.png';
import Carousel from './../main-carousel/main-carousel';
import { Link } from 'react-router-dom';
import Navigation from './../Navigation/index';

const Header = () => {
    return (
        <div className='main-Container'>
            <Navigation/>
            <div>
                <Carousel/>
            </div>
        </div>
    )
}

export default Header;