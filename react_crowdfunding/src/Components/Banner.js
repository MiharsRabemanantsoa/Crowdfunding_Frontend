import React, { Component } from 'react'
import agriculture from '../image/agriculture.jpg'
import anosy from '../image/anosy.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default class Banner extends Component {
    componentDidMount() {
        AOS.init();
    }

  render() {
    return (
        <div className="banner-area" style={{backgroundImage:  `url(${agriculture})`}}>
        <div className="d-table">
            <div className="d-table-cell">
                <div className="container-fluid">
                    <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="banner-content">
                                <h2 data-aos="fade-down" ><span>Lancez votre projet</span></h2>
                                <p>Réalisez vos rêves ! Créez une campagne pour rassembler les fonds nécessaires pour votre projet.</p>
                            <div id='boutonBanner' className="banner-btn-area">
                                <a className="common-btn banner-btn" href="creerprojet.html">Créez votre campagne</a>
                                <a className="common-btn" href="investissements.html">Investir</a>
                            </div>
                        </div>
                    </div>
                        <div className="col-lg-6">
                            <div className="banner-img">
                                <img src={anosy} alt="Banner"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}
