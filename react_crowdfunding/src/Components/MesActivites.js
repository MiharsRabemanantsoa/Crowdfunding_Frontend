import React from 'react'

import BannerActivite from './BannerActivite'
import MesProjets from './MesProjets'
import MesInvestissements from './MesInvestissements'
import Notification from '../Components/Notification'
import logo_final from '../image/logo_final.png';
import logo_clair from '../image/logo_clair.png';
import "./CSS/Investissement.css";

export default function MesActivites() {
  return (
    <div  id="main">
        <div className="navbar-area sticky-top">

            <div className="mobile-nav">
                <a href="index.html" className="logo">
                    <img src={logo_clair} alt="Logo"/>
                </a>
            </div>

            <div className="main-nav">
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <a className="navbar-brand" href="index.html">
                            <img src={logo_final} className="logo-one" alt="Logo"/>
                        </a>
                        <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                
                                <li className="nav-item">
                                    <a href="utilisateur.html" className="nav-link active">Accueil</a>
                                </li>
                                <li className="nav-item">
                                    <a href="projet_utilisateur.html" className="nav-link">Tous les projets</a>
                                </li>
                                
                                <li className="nav-item">
                                    <a href="a_propos.html" className="nav-link">A propos</a>
                                </li>
                                <li className="nav-item">
                                    <a href="contact.html" className="nav-link">Contact</a>
                                </li>
                            </ul>
                            <div className="utilisateur">
                                <ul className="navbar-nav">
                                    <li className="nav-item dropdown"  >

                                        <Notification />                               
                                    </li>
                                    <li className="nav-item">
                                        <a href="utilisateur.html" className="nav-link dropdown-toggle active">K. Anderson <i className="bi bi-chevron-down dropdown-indicator"></i></a>
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <a href="mon_Profil.html" className="nav-link">Mon profil</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="mes_activités.html" className="nav-link">Mon tableau de bord</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="mes_activités.html" className="nav-link">Mes activités</a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="index.html" className="nav-link">Déconnecter</a>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
        <BannerActivite/>   
        
        <section id="features" className="features section-bg" >
        
        <div className="container" data-aos="fade-up">

            <ul className="nav nav-tabs row  g-2 d-flex">

            <li className="nav-item col-4" >
                <a className="nav-link active show" data-bs-toggle="tab" data-bs-target="#tab-1" >
                <h4>Mes projets</h4>
                </a>
            </li>

            <li className="nav-item col-4">
                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-2">
                <h4>Mes investissements</h4>
                </a>
            </li>
            <li className="nav-item col-4">
                <a className="nav-link" data-bs-toggle="tab" data-bs-target="#tab-3">
                <h4>Projets suivis</h4>
                </a>
            </li>
            </ul>

            <div className="tab-content">
            <div className="tab-pane active show" id="tab-1">
                <div className="row">
                
                <section id="blogs" className="blog">
                    <div className="container" data-aos="fade-up" data-aos-delay="100">
            
                    
                        <div className="row gy-4 posts-list">                       
                                    <MesProjets/>      
                        </div>

                        

                    </div>
                    
                </section>
                
                </div>
            </div>

            <div className="tab-pane" id="tab-2">
                <div className="row">
                <section className="blog">
                    <div className="container" data-aos="fade-up" data-aos-delay="100">
            
                    <div className="row gy-4 posts-list">
            
                        <MesInvestissements/>
            
                    </div>

                    
            
                    </div>
                    
                </section>
                
                </div>
            </div>

            <div className="tab-pane" id="tab-3">
                <div className="row">
                <section id="blog" className="blog">
                    <div className="container" data-aos="fade-up" data-aos-delay="100">
            
                    <div className="row gy-4 posts-list">
                        <div className="col-sm-6 col-lg-4">
                        <div className="donation-item">
                        <div className="img">
                        <img src="img/donation1.jpg" alt="Donation"/>
                        <a className="common-btn" href="donation-details.html">Investir</a>
                        </div>
                        <div className="inner">
                        <div className="top">
                        <a className="tags" href="#">#Medical</a>
                        <h3>
                        <a href="donation-details.html">Need help for treatment</a>
                        </h3>
                        <p>We exist for non-profits, social enterprises, activists. Lorem politicians and individual citizens.</p>
                        </div>
                        <div className="bottom">
                        <div className="skill">
                        <div className="skill-bar skill1 wow fadeInLeftBig">
                        <span className="skill-count1">85%</span>
                        </div>
                        </div>
                        <ul>
                        <li>Raised: $5,500.00</li>
                        <li>Goal: $7,000.00</li>
                        </ul>
                        <h4>Donated by <span>60 people</span></h4>
                        </div>
                        </div>
                        </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                        <div className="donation-item">
                        <div className="img">
                        <img src="img/donation1.jpg" alt="Donation"/>
                        <a className="common-btn" href="donation-details.html">Investir</a>
                        </div>
                        <div className="inner">
                        <div className="top">
                        <a className="tags" href="#">#Medical</a>
                        <h3>
                        <a href="donation-details.html">Need help for treatment</a>
                        </h3>
                        <p>We exist for non-profits, social enterprises, activists. Lorem politicians and individual citizens.</p>
                        </div>
                        <div className="bottom">
                        <div className="skill">
                        <div className="skill-bar skill1 wow fadeInLeftBig">
                        <span className="skill-count1">85%</span>
                        </div>
                        </div>
                        <ul>
                        <li>Raised: $5,500.00</li>
                        <li>Goal: $7,000.00</li>
                        </ul>
                        <h4>Donated by <span>60 people</span></h4>
                        </div>
                        </div>
                        </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                        <div className="donation-item">
                        <div className="img">
                        <img src="img/donation2.jpg" alt="Donation"/>
                        <a className="common-btn" href="donation-details.html">Investir</a>
                        </div>
                        <div className="inner">
                        <div className="top">
                        <a className="tags" href="#">#Education</a>
                        <h3>
                        <a href="donation-details.html">Education for poor children</a>
                        </h3>
                        <p>We exist for non-profits, social enterprises, activists. Lorem politicians and individual citizens.</p>
                        </div>
                        <div className="bottom">
                        <div className="skill">
                        <div className="skill-bar skill2 wow fadeInLeftBig">
                        <span className="skill-count2">95%</span>
                        </div>
                        </div>
                        <ul>
                        <li>Raised: $6,500.00</li>
                        <li>Goal: $8,050.00</li>
                        </ul>
                        <h4>Donated by <span>50 people</span></h4>
                        </div>
                        </div>
                        </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                        <div className="donation-item">
                        <div className="img">
                        <img src="img/donation3.jpg" alt="Donation"/>
                        <a className="common-btn" href="donation-details.html">Investir</a>
                        </div>
                        <div className="inner">
                        <div className="top">
                        <a className="tags" href="#">#Family</a>
                        <h3>
                        <a href="donation-details.html">Financial help for poor</a>
                        </h3>
                        <p>We exist for non-profits, social enterprises, activists. Lorem politicians and individual citizens.</p>
                        </div>
                        <div className="bottom">
                        <div className="skill">
                        <div className="skill-bar skill3 wow fadeInLeftBig">
                        <span className="skill-count3">90%</span>
                        </div>
                        </div>
                        <ul>
                        <li>Raised: $5,540.00</li>
                        <li>Goal: $6,055.00</li>
                        </ul>
                        <h4>Donated by <span>40 people</span></h4>
                        </div>
                        </div>
                        </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                        <div className="donation-item">
                        <div className="img">
                        <img src="img/donation4.jpg" alt="Donation"/>
                        <a className="common-btn" href="donation-details.html">Investir</a>
                        </div>
                        <div className="inner">
                        <div className="top">
                        <a className="tags" href="#">#Funding</a>
                        <h3>
                        <a href="donation-details.html">Funding for family</a>
                        </h3>
                        <p>We exist for non-profits, social enterprises, activists. Lorem politicians and individual citizens.</p>
                        </div>
                        <div className="bottom">
                        <div className="skill">
                        <div className="skill-bar skill4 wow fadeInLeftBig">
                        <span className="skill-count4">80%</span>
                        </div>
                        </div>
                        <ul>
                        <li>Raised: $5,56.00</li>
                        <li>Goal: $6,85.00</li>
                        </ul>
                        <h4>Donated by <span>30 people</span></h4>
                        </div>
                        </div>
                        </div>
                        </div>
                        <div className="col-sm-6 col-lg-4">
                        <div className="donation-item">
                        <div className="img">
                        <img src="img/donation5.jpg" alt="Donation"/>
                        <a className="common-btn" href="donation-details.html">Investir</a>
                        </div>
                        <div className="inner">
                        <div className="top">
                        <a className="tags" href="#">#Relief</a>
                        <h3>
                        <a href="donation-details.html">Relief for cyclone-affected</a>
                        </h3>
                        <p>We exist for non-profits, social enterprises, activists. Lorem politicians and individual citizens.</p>
                        </div>
                        <div className="bottom">
                        <div className="skill">
                        <div className="skill-bar skill5 wow fadeInLeftBig">
                        <span className="skill-count5">75%</span>
                        </div>
                        </div>
                        <ul>
                        <li>Raised: $5,5.00</li>
                        <li>Goal: $3,85.00</li>
                        </ul>
                        <h4>Donated by <span>20 people</span></h4>
                        </div>
                        </div>
                        </div>
                        </div>
            
                    </div>

                    <div className="pagination-area">
                        <ul>
                        <li>
                            <a href="#">Prev</a>
                        </li>
                        <li>
                            <a className="active" href="#">1</a>
                        </li>
                        <li>
                            <a href="#">2</a>
                        </li>
                        <li>
                            <a href="#">3</a>
                        </li>
                        <li>
                            <a href="#">Next</a>
                        </li>
                        </ul>
                    </div>
            
                    </div>
                </section>
                </div>
            </div>

            </div>
            <div className="pagination-area">
                            <ul>
                            <li>
                                <button class="common-btn banner-btn" style={{ border:'none', marginTop:'65px' , width:'auto'}}>Créer campagne</button>
                                
                            </li>
                            <li>
                            <button class="common-btn banner-btn" style={{ border:'none',  marginTop:'65px' , width:'auto'}}>Investir</button>
                            </li>
                            
                            </ul>
            </div>

        </div>
        </section>
    </div>
  )
}
