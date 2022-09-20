import React, { Component } from 'react'
import logo_final from '../image/logo_final.png'
import logo_clair from '../image/logo_clair.png'
import Notification from '../Components/Notification'

export default class AcceuilClt extends Component {
  render() {
    return (
      
      <div>
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
        
      </div>
    )
  }
}


