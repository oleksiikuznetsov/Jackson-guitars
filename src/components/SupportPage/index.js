import React, { Component } from 'react';
import './style.css';
import Navigation from './../HomePage/Navigation/index';
import { Link } from 'react-router-dom';
import Card from './Card/index';
import ServiceCard from './ServiceCard/index';
import Footer from './../HomePage/Footer/index';

class Support extends Component {
    constructor(props){
        super(props);
        this.state = {
            catalog: ['Catalogs 2018 - 2012', 'Pricelists', 'Archived Catalogs', 'Import Catalogs'],
            serialNumbers: ['Bolt-On Neck Models', 'Neck-Thru-Body Models'],
            generalInformation: ['FAQ', 'Warranty Information', "Owner's Manual", 'Color Chart', 'Jackson History', 'Product Registration'],
            legalDocuments: ['Terms of Use', 'Privacy Policy', 'CITES', 'Supply Chain Transparency']
        }
    }
    render() {
        return (
            <div className='support-page'>
                <Navigation/>
                <div className='support-header'>
                    <h1>SUPPORT</h1>
                </div>

                <div className='product-bar'>
                    <Link to="/support">SUPPORT</Link>
                    <p>></p>
                    <Link to="/">HOME</Link>
                </div>

                <div className='support-main-content'>
                    <div className='support-main-content-top'>
                        <Card 
                            list={this.state.list1} 
                            topHeader='CATALOGS / PRICELISTS'
                            listHeader='VIEW / DOWNLOAD'
                            list={this.state.catalog}
                            logoUrl={'http://images.ctfassets.net/4jcppgetbqrc/2RZlcIT3IIiwGMMAAo26kS/93fd5125d50378a46d7a429bf30f5b7d/support-catalogs.png'}
                            />
                        <Card 
                            list={this.state.list1} 
                            topHeader='SERIAL NUMBERS'
                            listHeader='PRODUCT DATING'
                            list={this.state.serialNumbers}
                            logoUrl={'http://images.ctfassets.net/4jcppgetbqrc/2w9Ttj1CtauaiWCGECeYQk/990219ee63a01275836f1318363e2c00/jackson-serial-dating.png'}
                            />
                        <Card 
                            list={this.state.list1} 
                            topHeader='GENERAL INFORMATION'
                            listHeader='GUITAR SUPPORT'
                            list={this.state.generalInformation}
                            logoUrl={'http://images.ctfassets.net/4jcppgetbqrc/JioP9XYgq40kQKE48MYo6/590ac68c9b70a674a3fab674fd8ef2cd/support-general.png'}

                            />
                        <Card 
                            list={this.state.list1} 
                            topHeader='LEGAL DOCUMENTS'
                            listHeader='LEGAL SUPPORT'
                            list={this.state.legalDocuments}
                            logoUrl={'http://images.ctfassets.net/4jcppgetbqrc/2O4LKWT8HuoekoUAe60WYc/fbd3d4620949e6939f81b0320c45023c/jackson-legal.png'}
                            />
                    </div>
                    <div className='support-service-card-block'>
                        <ServiceCard
                            backgroundImage='http://images.ctfassets.net/4jcppgetbqrc/3PY2J8eZvaCqmi4KMe4GEC/97c3bf04a34b4aa2334859fb6fa6db9c/support4.jpg'
                            header='SERVICE CENTERS'
                            text='Find your local FMIC Authorized Service Center'
                            buttonName='GET SERVICE'
                        />
                        <ServiceCard
                            backgroundImage='http://images.ctfassets.net/4jcppgetbqrc/7rwVHJIVRm2g6EY0c4iyYs/1dc55bba0fc27923b52ee8ea7c9a3bdd/support5.jpg'
                            header='DISTRIBUTORS'
                            text='Find regional Jackson Distributors'
                            buttonName='VIEW REGIONS'
                        />
                    </div>
                    <div className='support-contact'>
                        <ServiceCard
                            header='CONTACT US'
                            text='1.800.856.9801'
                            buttonName='E-MAIL US'
                        />
                    </div>
                </div>
                <Footer/>
            </div>
            
        )
    }
}

export default Support;