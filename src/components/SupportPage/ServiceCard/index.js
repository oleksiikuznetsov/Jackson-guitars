import React from 'react';
import './style.css';

const ServiceCard = (props) => {
    return (
        <div className='support-service'
            style={{ backgroundImage: `url(${props.backgroundImage})` }}
        >
            <h2>{props.header}</h2>
            <p>{props.text}</p>
            <input type="button" value={props.buttonName}/>
        </div>
    )
}

export default ServiceCard;