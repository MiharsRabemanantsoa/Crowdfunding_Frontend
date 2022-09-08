import React, { Component } from 'react'
import antananarivo from '../image/antananarivo.jpg'

export default class BlogArea extends Component {
  render() {
    return (
        <section className="blog-area pt-100 pb-70">
        <div className="about-area pt-100 pb-70">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="about-img">
                            <img src={antananarivo} alt="About"/>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content">
                            <div className="section-title">
                                <h2 style={{fontWeight:700}}>Pourquoi utiliser LooP. ?</h2>
                            </div>
                            <span className="about-span">Créer facilement et rapidement votre campagne en seulement quelques clics</span>
                            <p style={{color:'#757575',fontFamily:"Open Sans"}}>La création de campagne est très facile et rapide. LooP. vous donne l'opportunité de relever les fonds nécessaires pour le lancement de votre start-up.</p>
                            <p style={{color:'#757575',fontFamily:"Open Sans"}}>Une fois créé, votre projet va être étudié par notre équipe et vos informations personnelles seront vérifiées. Cela est fait pour augmenter la sécurité. Vous recevrez ensuite un mail, que votre campagne soit validée ou non.</p>
                            <div id='boutonBlogArea' className="about-btn-area">
                                <a className="common-btn about-btn" href="creerprojet.html">Créer une campagne</a>
                                <a className="common-btn" href="investissements.html">Investir</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
  }
}
