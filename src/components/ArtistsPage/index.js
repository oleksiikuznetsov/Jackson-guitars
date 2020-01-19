import React, { Component } from 'react';
import './style.css';
import Navigation from './../HomePage/Navigation/index';
import { Link } from 'react-router-dom';
import RockerItems from './RockerItems/index';
import BackgroundImgage from '../../img/ArtistImg/profile-christian-andreu.jpg';
import hoverGifka from '../../img/ArtistImg/christian-andreu.gif';

class Artists extends Component {
    render() {
        return (

            <div className="artics_page">
                <div class="artics-header">
                    <Navigation/>
                    <h1>Artists</h1>
                </div>

                <div className='artics-main'>
                    <RockerItems
                        BackgroundImg={BackgroundImgage}
                        hoverGif={hoverGifka}
                        guitarTitle = 'Bohdan Kulinka'
                        bandName = 'Metallica'
                    />
                    <RockerItems
                        BackgroundImg={BackgroundImgage}
                        hoverGif={hoverGifka}
                        guitarTitle = 'Bohdan Kulinka'
                        bandName = 'Metallica'
                    />
                    <RockerItems
                        BackgroundImg={BackgroundImgage}
                        hoverGif={hoverGifka}
                        guitarTitle = 'Bohdan Kulinka'
                        bandName = 'Metallica'
                    />
                    <RockerItems
                        BackgroundImg={BackgroundImgage}
                        hoverGif={hoverGifka}
                        guitarTitle = 'Bohdan Kulinka'
                        bandName = 'Metallica'
                    />
                </div>
            </div>
            

            
        )
    }
}

export default Artists;