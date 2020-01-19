import React from 'react';
import './style.css';

const NewsBlock = (props) => {
    return (
        <div
            className='news-block'
            style={{ backgroundImage: `url(${props.backgroundImage})` }}
        >
            <a href="">
                <h3>{props.header}</h3>
            </a>
        </div>
    )
}

export default NewsBlock;