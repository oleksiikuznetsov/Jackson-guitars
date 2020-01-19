import React from 'react';
import './style.css';
import SupportList from './CardList/index';

const Card = (props) => {

    return(
        <div className='cards'>
            <div>
                <h2>{props.topHeader}</h2>
            </div>
            <div className='cards-img-block'>
                <img src={props.logoUrl} alt="" className='cards-img'/>
            </div>
            <p>{props.listHeader}</p>
            <div>
                <SupportList numbers={props.list} className='cards-list'/>
            </div>
        </div>
    )
}

export default Card;