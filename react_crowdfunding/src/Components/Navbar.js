import React, { Component } from 'react'
// import logo_final from '../image/logo_final.png'
// import logo_clair from '../image/logo_clair.png'
import logo_final from '../logo_final.png'
import logo_clair from '../logo_clair.png'


export default class Navbar extends Component {
  render() {
    return (
        <div>
            <div className="loader">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="pre-box-one">
                            <div className="pre-box-two"></div>
                        </div>
                    </div>
                </div>
            </div>

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
                                <a href="index.html" className="nav-link active">Accueil</a>
                            </li>
                            <li className="nav-item">
                                <a href="projets.html" className="nav-link">Tous les projets</a>
                            </li>
                            <li className="nav-item">
                                <a href="a_propos.html" className="nav-link">A propos</a>
                            </li>
                            <li className="nav-item">
                                <a href="contact.html" className="nav-link">Contact</a>
                            </li>
                        </ul>
                        <div className="side-nav">
                            <a className="connexion-btn" href="connexion.html">Se connecter</a>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
    </div>
    )
  }
}
