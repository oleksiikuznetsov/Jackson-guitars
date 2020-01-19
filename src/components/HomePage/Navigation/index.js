import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Logo from './../../../img/jackson-logo.png';


const Navigation = () => {
    return (
        <div className='header'>
            <div>
                <Link to='/'>
                    <img src={Logo} alt="" className='logo'/>
                </Link>
            </div>
            <div className='navigation'>
                <Link to='http://localhost:3000/'>GEAR</Link>
                <Link to='/artists'>ARTISTS</Link>
                <Link to='/news'>NEWS</Link>
                <Link to='/customshop'>CUSTOM SHOP</Link>
                <Link to='/dealers'>DEALERS</Link>
                <Link to='/support'>SUPPORT</Link>
            </div>
        </div>
    )
}

export default Navigation;