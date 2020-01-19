import React from 'react';
import HoverImage from 'react-hover-image';
import './style.css';

const RockerItems = (props)  => {
        return (
            <div className = 'rocker-item'>
                <HoverImage className = 'rocker-img'
                    src = {props.BackgroundImg} 
                    hoverSrc = {props.hoverGif}
                />
                    <div class="rocker-names">
                        <h3>{props.guitarTitle}</h3>
                        <h4>{props.bandName}</h4>
                    </div>
            
            </div>
            
        )
}


export default RockerItems;