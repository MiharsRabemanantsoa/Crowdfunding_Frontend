import React, { Component } from 'react'
import logo_final from '../image/logo_final.png'
import logo_clair from '../image/logo_clair.png'

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
                            <li className="nav-item dropdown">
                                <a className="nav-link nav-icon" href="creerprojet.html" data-bs-toggle="dropdown">
                                    <i className="bi bi-bell"></i>
                                    <span className="badge bg-primary badge-number"></span>
                                </a>
                                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
                                    <li className="dropdown-header">
                                        You have 4 new notifications
                                        <a href="creerprojet.html"><span className="badge rounded-pill bg-primary p-2 ms-2">View all</span></a>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li className="nav-item">
                                        <i className="bi bi-exclamation-circle text-warning"></i>
                                        <div>
                                            <a href='creerprojet.html'>Lorem Ipsum</a>
                                            
                                        </div>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li className="nav-item">
                                        <i className="bi bi-x-circle text-danger"></i>
                                        <div>
                                            <a href='creerprojet.html'>Atque rerum nesciunt</a>
                                            
                                        </div>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>

                                    <li className="nav-item">
                                        <i className="bi bi-check-circle text-success"></i>
                                        <div>
                                            <a href='creerprojet.html'>Sit rerum fuga</a>
                                     
                                        </div>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li className="nav-item">
                                        <i className="bi bi-info-circle text-primary"></i>
                                        <div>
                                            <a href='creerprojet.html'>Dicta reprehenderit</a>
                                            
                                        </div>
                                    </li>
                                    <li>
                                        <hr className="dropdown-divider"/>
                                    </li>
                                    <li className="dropdown-footer">
                                        <a href="creerprojet.html">Show all notifications</a>
                                    </li>
                                </ul>
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


