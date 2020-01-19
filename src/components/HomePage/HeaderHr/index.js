import React from 'react';
import './style.css';

const HeaderHr = (props) => {
    return (
        <div className='headerHr'>
            <hr/>
            <h3>{props.header}</h3>
            <hr/>
        </div>
    )
}

export default HeaderHr;