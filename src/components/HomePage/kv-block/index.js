import React from 'react';
import './style.css';

const KvBlock = (props) => {
    return (
        <div
            className='kv-block red'
            style={{ backgroundImage: `url(${props.backgroundImage})` }}
        >
            <h2>{props.header}</h2>
            <p>{props.title}</p>
            {props.image}
            <img src="" alt=""/>
            <div className='kv-block-hover'></div>
        </div>
    )
}

export default KvBlock;