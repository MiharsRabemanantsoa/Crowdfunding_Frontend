import React, { Component } from 'react'

import background from '../image/maki2.jpg';
import TousLesProjets from './TousLesProjets';
import { Link } from 'react-router-dom';
import logo_final from '../image/logo_final.png';
import Footer from './Footer';

export default class ListProjet extends Component {
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
                                    <Link to="/allproject" className="nav-link">Tous les projets</Link>
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

        <div class="page-title-area title-bg-two"  style={{ backgroundImage: `url(${background})` }}>
        <div class="d-table">
            <div class="d-table-cell">
                <div class="container">
                    <div class="title-item">
                    <h2>Tous les projets</h2>
                        <ul>
                            <li>
                                <a href="index.html">Accueil</a>
                            </li>
                            <li>
                                <span>Projets</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container p-5">
            <form>
                <fieldset>
                    <input name="CategorieValeur" type="hidden" value="0" />
                    <div class="input-group">
                            <div class="dropdown">
                                <p class="common-btn dropdown-toggle" type="button" data-toggle="dropdown">Categories</p>
                                <ul class="dropdown-menu">
                                    <li><a href="/">HTML</a></li>
                                    <li><a href="/">CSS</a></li>
                                    <li><a href="/">JavaScript</a></li>
                                    <li><a href="/">jQuery</a></li>
                                    <li><a href="/">Bootstrap</a></li>
                                    <li><a href="/">Angular</a></li>
                                </ul>
                            </div>
                        <input id="search" name="Saisie" type="text" class="form-control" aria-label="Saisie de mots clés" placeholder="Mot(s) clé(s)" required="required"/>
                        <div class="banner-btn-area">
                            <a class="common-btn banner-btn" href="investissements.html">Recherche</a>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
        <TousLesProjets/>
        <Footer/>
 </div>

    
    )
  }
}
