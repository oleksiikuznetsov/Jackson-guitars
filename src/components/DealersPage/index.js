import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Navigation from './../HomePage/Navigation/index';
import Footer from './../HomePage/Footer/index';


class DealersPage extends Component {
    render () {
        return (
            <div>
                <Navigation/>
                <div className="navigation-header">
                    <h1>FIND A DEALER</h1>
                </div>
                <div className='dealer-finder'>
                    <from className='form'>
                        <div className='form-input'>
                            <input type="text" placeholder='Enter Zip or City'/>
                            <p>USE MY CURRENT LOCATION</p>
                        </div>
                        <input type="button" value='GO' className='dealer-finder-button'/>
                    </from>
                </div>
                <div className='dealers'>
                    <h2>ALL ACCESS DEALERS</h2>
                    <div className='dealers-logo'>
                        <div className='dealers-img-div'>
                            <a><img src='//images.contentful.com/4jcppgetbqrc/5I6pCHy1NuMKWuccEE0W2Y/31c2f84d2c64ad91fc5d68d2195ba77f/ams.png'/></a>
                        </div>
                        <div className='dealers-img-div'>
                            <a><img src='//images.contentful.com/4jcppgetbqrc/4Zyx4KF7wI6y8m64wKOiKq/1e349e13b28c6a8c8acfa9e4c6dbbeff/lmmi.png'/></a>
                        </div>
                        <div className='dealers-img-div'>
                            <a><img src='//images.contentful.com/4jcppgetbqrc/66zR9wua2I8mq2SK6Gw8cg/cbe96214d1ed714303172c3ab5ca5ad7/samash.png'/></a>
                        </div>
                        <div className='dealers-img-div'>
                            <a><img src='//images.ctfassets.net/4jcppgetbqrc/3TpFu81QArRrZxdQQVMuZH/74310a415738d4992766f1b32703f9c8/pro-audio-star.png'/></a>
                        </div>
                        <div className='dealers-img-div'>
                            <a><img src='//images.contentful.com/4jcppgetbqrc/1vvOIJN592oO4CU8kWCcoM/b371cf2441484fb461283e64820f03ce/guitar-center.png'/></a>
                        </div>
                        <div className='dealers-img-div'>
                            <a><img src='//images.contentful.com/4jcppgetbqrc/1AO1JpAP5GWc4AM6uuGcUa/fd439a6ac5415dae5cce78bc3951ddc9/musicians-friend.png'/></a>
                        </div>
                        <div className='dealers-img-div'>
                            <a><img src='//images.contentful.com/4jcppgetbqrc/69WZFDuZO0qyYA4OUsOsQ4/eda60ffb452d6dce0bc4939ab53590e8/sw-logo.png'/></a>
                        </div>
                        <div className='dealers-img-div'>
                            <a><img src='//images.contentful.com/4jcppgetbqrc/1bROnaMrS8gGmAemamSEkK/1071ae2db5498f2e0ff55f1861e4cdb4/capitol.png'/></a>
                        </div>
                        <div className='dealers-img-div'>
                            <a><img src='//images.contentful.com/4jcppgetbqrc/4EdmtnpVVCYikcsEcU8Yws/a84686bc7610cbc230ab342ad7dda293/fullers.png'/></a>
                        </div>
                        <div className='dealers-img-div'>
                            <a><img src='//images.contentful.com/4jcppgetbqrc/1O7GQOa12Ug0m4gSCig2Yi/76e76699b6489c02d563a21f0f99d4f9/pal.png'/></a>
                        </div>
                        <div className='dealers-img-div'>
                            <a><img src='//images.contentful.com/4jcppgetbqrc/Zuv6ZzVUU6YOwMqMug8i0/2032ab0663e59c60d86f19f39cebbb53/cmc-guitars.png'/></a>
                        </div>
                        <div className='dealers-img-div'>
                            <a><img src='//images.contentful.com/4jcppgetbqrc/6bjMQZakyQOuqKua8yioC2/9ff9036ab26dc98755eca27e358f7da4/music-zoo.png'/></a>
                        </div>
                        <div className='dealers-img-div'>
                            <a><img src='//images.contentful.com/4jcppgetbqrc/GpDVCQxqi4MuMUQmqOOSC/773e779472670e4aa6b14b1e400a1a8f/badaxe.png'/></a>
                        </div>
                        <div className='dealers-img-div'>
                            <a><img src='//images.contentful.com/4jcppgetbqrc/5BseVzLSRGKk2eKAacsmCo/eaad79ec5b42863a4a352b69f436020c/tundra.png'/></a>
                        </div>
                        <div className='dealers-img-div'>
                            <a><img src='//images.contentful.com/4jcppgetbqrc/4n0RQKKGnYm0I8qQuCIiaU/12c7f348e0296010359efa5537aa52c5/cosmo.png'/></a>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

export default DealersPage;