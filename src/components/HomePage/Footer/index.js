import React from 'react';
import './style.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faTwitterSquare} from '@fortawesome/free-brands-svg-icons';
import { faYoutube} from '@fortawesome/free-brands-svg-icons';

const Footer = (props) => {
    return (
        <div>
            <div className='footer-top'>
                <div className='footer-top-nav'>
                    <a>GEAR</a>
                    <a>ACCESSORIES</a>
                    <a>ARTISTS</a>
                    <a>NEWS</a>
                    <a>CUSTOM SHOP</a>
                    <a>DEALERS</a>
                    <a>SUPPORT</a>
                </div>
                <div className='footer-top-submit'>
                    <form>
                        <input type="text" placeholder='SIGN UP FOR JACKSON E-NEWS'/>
                        <button>SUBMIT</button>
                    </form>
                </div>
                <div className='footer-top-address'>
                    <div>
                        <img src="https://images.ctfassets.net/4jcppgetbqrc/6WToDGcMMgACuki24qYAkK/ffb38e3d25308c6bd5fa021b77718ef7/jackson-logo.png" alt=""/>
                    </div>
                    <div className='address'>
                        <p>17600 N. Perimeter Drive, Suite 100</p>
                        <p>Scottsdale, AZ 85255</p>
                        <p>1.800.856.9801</p>
                    </div>
                </div>
            </div>
            <div className='footer-bottom'>
                <div className='footer-bottom-icons-block'>
                    <a href='#'>
                        <FontAwesomeIcon icon={faFacebookSquare} size="2x" className='footer-bottom-icons'/>
                    </a>
                    <a href='#'>
                        <FontAwesomeIcon icon={faInstagram} size="2x" className='footer-bottom-icons'/>
                    </a>
                    <a href='#'>
                        <FontAwesomeIcon icon={faTwitterSquare} size="2x" className='footer-bottom-icons'/>
                    </a>
                    <a href='#'>
                        <FontAwesomeIcon icon={faYoutube} size="2x" className='footer-bottom-icons'/>
                    </a>
                </div>
                <div className='footer-bottom-menu'>
                    <ul >
                        <li>
                            <a href="" className='footer-bottom-vertical-line'>PRIVACY POLICY</a>
                        </li>
                        <li>
                            <a href="" className='footer-bottom-vertical-line'>TERMS OF USE</a>
                        </li>
                        <li>
                            <a href="" className='footer-bootom-line-none'>REGISTER</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer;