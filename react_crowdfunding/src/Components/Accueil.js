import React, { Component } from 'react'
import Banner from './Banner';
import ProjetPopulaire from './ProjetPopulaire';
import CounterArea from './CounterArea';
import BlogArea from './BlogArea'
import TousLesProjets from './TousLesProjets';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import logo_final from '../image/logo_final.png';


export default class Accueil extends Component {
  render() {
    return (
      <div className='Container'>
        {/* <div className="loader">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="pre-box-one">
                            <div className="pre-box-two"></div>
                        </div>
                    </div>
                </div>
            </div> */}

        <div className="navbar-area sticky-top">

            {/* <div className="mobile-nav">
                <Link to="/home" className="logo">
                    <img src={logo_clair} alt="Logo"/>
                </Link>
            </div> */}
        
            <div className="main-nav">
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <Link className="navbar-brand" to="/home">
                            <img src={logo_final} className="logo-one" alt="Logo"/>
                        </Link>
                        <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/home" className="nav-link active">Accueil</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/listProjet" className="nav-link">Tous les projets</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Apropos" className="nav-link">A propos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contactUs" className="nav-link">Contact</Link>
                                </li>
                            </ul>
                            <div className="side-nav">
                                <Link className="nav-link" to="/signin">Se connecter</Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
      <Banner></Banner>
      <ProjetPopulaire></ProjetPopulaire>
      {/* <CounterArea></CounterArea> */}
      <BlogArea></BlogArea>
      <TousLesProjets></TousLesProjets>
      <Footer></Footer>
      </div>
    )
  }
}
