import React, { Component } from 'react'
// import {Link} from 'react-router-dom'
import background from '../image/maki2.jpg';

export default class ListProjet extends Component {
  render() {
    return (
      <div>
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
        <section class="donations-area p-4">
        <div class="container">
            <div class="row">
                <div class="col-sm-6 col-lg-4">
                    <div class="donation-item">
                        <div class="img">
                            <img src="img/Images/Monopente.jpg" alt="Donation"/>
                            <a class="common-btn" href="investissements.html">Investir</a>
                        </div>
                        <div class="inner">
                            <div class="top">
                                <a class="tags" href="/">#Agriculture et Environnement</a>
                                <h3>
                                    <a href="investissements.html">Un hangar solaire dans le Tarn</a>
                                </h3>
                                <p>Soutenez la production d'énergies renouvelables grâce à des panneaux solaires chez un éleveur de brebis laitières.</p>
                            </div>
                            <div class="bottom">
                                <div class="skill">
                                    <div class="skill-bar skill1 wow fadeInLeftBig">
                                        <span class="skill-count1">85%</span>
                                    </div>
                                </div>
                                <ul>
                                    <li>Objectif: 1 000 000Ar</li>
                                    <li>Collecté: 500 00Ar</li>
                                </ul>
                                <h4>Taux d'intérêt : <span>30%</span></h4><br/>
                                <h4>Durée restante : <span>5 jours</span></h4><br/>
                                <h4>Lieu : <span></span></h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-4">
                    <div class="donation-item">
                        <div class="img">
                            <img src="img/Images/first.jpg" alt="Donation"/>
                            <a class="common-btn" href="investissements.html">Investir</a>
                        </div>
                        <div class="inner">
                            <div class="top">
                                <a class="tags" href="/">#Elevage</a>
                                <h3>
                                    <a href="investissements.html">Un élevage porcin bio et familial</a>
                                </h3>
                                <p>Financez le développement d'une ferme familiale du Puy de Dôme, soucieuse du bien-être de son élevage.</p>
                            </div>
                            <div class="bottom">
                                <div class="skill">
                                    <div class="skill-bar skill1 wow fadeInLeftBig">
                                        <span class="skill-count1">85%</span>
                                    </div>
                                </div>
                                <ul>
                                    <li>Objectif: 1 000 000Ar</li>
                                    <li>Collecté: 500 00Ar</li>
                                </ul>
                                <h4>Taux d'intérêt : <span>30%</span></h4><br/>
                                <h4>Durée restante : <span>5 jours</span></h4><br/>
                                <h4>Lieu : <span></span></h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-4">
                    <div class="donation-item">
                        <div class="img">
                            <img src="img/Images/third3.png" alt="Donation"/>
                            <a class="common-btn" href="investissements.html">Investir</a>
                        </div>
                        <div class="inner">
                            <div class="top">
                                <a class="tags" href="/">#Agriculture et Environnement</a>
                                <h3>
                                    <a href="investissements.html">Des fruits & légumes séchés, naturels, locaux & responsables</a>
                                </h3>
                                <p>Participez au développement de cette entreprise occitane qui valorise les fruits et légumes déclassés locaux.</p>
                            </div>
                            <div class="bottom">
                                <div class="skill">
                                    <div class="skill-bar skill1 wow fadeInLeftBig">
                                        <span class="skill-count1">85%</span>
                                    </div>
                                </div>
                                <ul>
                                    <li>Objectif: 1 000 000Ar</li>
                                    <li>Collecté: 500 00Ar</li>
                                </ul>
                                <h4>Taux d'intérêt : <span>30%</span></h4><br/>
                                <h4>Durée restante : <span>5 jours</span></h4><br/>
                                <h4>Lieu : <span></span></h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-4">
                    <div class="donation-item">
                        <div class="img">
                            <img src="img/Images/hannah-markley.jpg" alt="Donation"/>
                            <a class="common-btn" href="investissements.html">Investir</a>
                        </div>
                        <div class="inner">
                            <div class="top">
                                <a class="tags" href="/">#Elevage</a>
                                <h3>
                                    <a href="investissements.html">Des travaux pour un élevage caprin</a>
                                </h3>
                                <p>Soutenez le développement de cet élevage caprin avec transformation fromagère en Occitanie.</p>
                            </div>
                            <div class="bottom">
                                <div class="skill">
                                    <div class="skill-bar skill1 wow fadeInLeftBig">
                                        <span class="skill-count1">85%</span>
                                    </div>
                                </div>
                                <ul>
                                    <li>Objectif: 1 000 000Ar</li>
                                    <li>Collecté: 500 00Ar</li>
                                </ul>
                                <h4>Taux d'intérêt : <span>30%</span></h4><br/>
                                <h4>Durée restante : <span>5 jours</span></h4><br/>
                                <h4>Lieu : <span></span></h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-4">
                    <div class="donation-item">
                        <div class="img">
                            <img src="img/Images/fourth.jpg" alt="Donation"/>
                            <a class="common-btn" href="investissements.html">Investir</a>
                        </div>
                        <div class="inner">
                            <div class="top">
                                <a class="tags" href="/">#Agriculture et Environnement</a>
                                <h3>
                                    <a href="investissements.html">Production d'engrais naturel pour nos agriculteurs</a>
                                </h3>
                                <p>Soutenez le développement de cette compostière de l'Isère qui valorise les déchets verts collectifs en produisant un engrais naturel.</p>
                            </div>
                            <div class="bottom">
                                <div class="skill">
                                    <div class="skill-bar skill1 wow fadeInLeftBig">
                                        <span class="skill-count1">85%</span>
                                    </div>
                                </div>
                                <ul>
                                    <li>Objectif: 1 000 000Ar</li>
                                    <li>Collecté: 500 00Ar</li>
                                </ul>
                                <h4>Taux d'intérêt : <span>30%</span></h4><br/>
                                <h4>Durée restante : <span>5 jours</span></h4><br/>
                                <h4>Lieu : <span></span></h4>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-6 col-lg-4">
                    <div class="donation-item">
                        <div class="img">
                            <img src="img/Images/pexels-jonas.jpg" alt="Donation"/>
                            <a class="common-btn" href="investissements.html">Investir</a>
                        </div>
                        <div class="inner">
                            <div class="top">
                                <a class="tags" href="/">#Elevage</a>
                                <h3>
                                    <a href="investissements.html">Un élevage de brebis pour l'AOP Roquefort</a>
                                </h3>
                                <p>Aidez cet agriculteur à acheter des terres pour atteindre l'autonomie alimentaire pour ses brebis.</p>
                            </div>
                            <div class="bottom">
                                <div class="skill">
                                    <div class="skill-bar skill1 wow fadeInLeftBig">
                                        <span class="skill-count1">85%</span>
                                    </div>
                                </div>
                                <ul>
                                    <li>Objectif: 1 000 000Ar</li>
                                    <li>Collecté: 500 00Ar</li>
                                </ul>
                                <h4>Taux d'intérêt : <span>30%</span></h4><br/>
                                <h4>Durée restante : <span>5 jours</span></h4><br/>
                                <h4>Lieu : <span></span></h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="pagination-area">
                <ul>
                    <li>
                        <a href="/">Prev</a>
                    </li>
                    <li>
                        <a class="active" href="/">1</a>
                    </li>
                    <li>
                        <a href="/">2</a>
                    </li>
                    <li>
                        <a href="/">3</a>
                    </li>
                    <li>
                        <a href="/">Next</a>
                    </li>
                </ul>
            </div>
        </div>
    </section>

 </div>

    
    )
  }
}
