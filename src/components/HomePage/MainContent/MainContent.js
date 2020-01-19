import React from 'react';
import './MainContent.css';
import Carousel from '../carousel/carousel';
import KvBlock from './../kv-block/index';
import HeaderHr from '../HeaderHr/index';
import NewsBlock from '../NewsBlock/index';
import Footer from './../Footer/index';


const Main = () => {
    return (
        <div>
            <div>
                <HeaderHr header='FEATURED MODELS'/>
                <Carousel/>
            </div>
            <div>
                <div className='kv-head'>
                    <div className='kv-head-divs'>
                        <h2>SIGNATURE ADRIAN SMITH SAN DIMAS</h2>
                        <p>Since 2007, Jackson has proudly honored Smith’s metal prowess with his very own signature models, which apply his personal tastes and preferences to the popular Charvel San Dimas body shape – a style he’s played since the 1980s. Distinctive traits to Smith’s models include an HSS pickup configuration, a pickguard and a licensed Fender® Strat® headstock.</p>
                        <button>LEARN MORE</button>
                    </div>
                    <div className='kv-head-divs'>
                        <img src="https://images.ctfassets.net/4jcppgetbqrc/1G80qZJByvMJDmM8eRdy3s/dfaead971a8e1921d04647c82e132d28/adrian-smith-usa.png" alt=""/>
                    </div>
                </div>
                <div className='kv-body'>
                    <KvBlock
                        className='kv-body-bloks'
                        image={ <img src='http://images.ctfassets.net/4jcppgetbqrc/1GIHYRkq743CrOySb2V9gB/ab1a5d8d57c7b319817b392119c4359c/dear-santa.png'/> }
                        backgroundImage='http://images.ctfassets.net/4jcppgetbqrc/DDYx7pXzWju5h6BK4gDRs/e11884069b2428673f5d59e8d0142e7b/jackson-holiday.jpg'
                    />                    
                    <KvBlock
                        className='kv-body-bloks-artists'
                        title='ARTISTS'
                        backgroundImage='http://images.ctfassets.net/4jcppgetbqrc/6C8lnQpXkvDwErSixgxtxF/7b50cf76263addcb9c4dc785173c6ee4/brandon-ellis-square.jpg'
                    />
                </div>
                <HeaderHr header='FEATURED MODELS'/>
                <div className='news-div'>
                    <NewsBlock 
                        backgroundImage='https://blog.jacksonguitars.com/wp-content/uploads/2019/11/Death-Angel.jpg'
                        header='Death Angel Debut Music Video for ‘Immortal Behated’'
                    />
                    <NewsBlock 
                        backgroundImage='https://blog.jacksonguitars.com/wp-content/uploads/2019/11/Rob-C.jpg'
                        header='Volbeat Release New Video ‘Die To Live’'
                    />
                    <NewsBlock 
                        backgroundImage='https://blog.jacksonguitars.com/wp-content/uploads/2019/10/Jackson-SL3X-featured.jpg'
                        header='Jackson X Series Soloist SL3X Releases Fiery Tone in New Demo'
                    />
                    <NewsBlock 
                        backgroundImage='https://blog.jacksonguitars.com/wp-content/uploads/2019/05/Dave-Davidson-Warrior-e1556825750879.jpg'
                        header='Fire Up The Grill; Dave Davidson’s Warrior Just Got Roasted'
                    />
                </div>
                <Footer/>
            </div>

        </div>
    )
}

export default Main;