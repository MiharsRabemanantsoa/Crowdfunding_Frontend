import React, { Component } from 'react'
// import logo_clair from '../image/logo_clair.png'
// import logo_final from '../logo_final.png'
import logo_clair from '../logo_clair.png'

export default class Footer extends Component {
  render() {
    return (
      <div><footer className="footer-area pt-100">
      <div className="container">
          <div className="row">
              <div className="col-sm-6 col-lg-4">
                  <div className="footer-item">
                      <div className="footer-logo">
                          <a className="logo" href="index.html">
                              <img src={logo_clair} alt="Logo"/>
                          </a>
                              <p >LooP. est une plateforme dédiée aux start-uppeurs malagasy. Nous donnons plus de visibilités à vos projets auprès des investisseurs internationaux pour vous donner une chance de les réaliser.</p>
                      </div>
                  </div>
              </div>

              <div className="col-sm-6 col-lg-4">
                  <div className="footer-item">
                      <div className="footer-links">
                          <h3 id='footerLinks'>Liens rapides</h3>
                          <ul >
                              <li>
                                  <a href="projets.html" id='footerLinks'><i className="bi bi-chevron-right"></i>Tous les projets</a>
                              </li>
                              <li>
                                  <a href="a_propos.html" id='footerLinks'><i className="bi bi-chevron-right"></i>A propos</a>
                              </li>
                              <li>
                                  <a href="contact.html" id='footerLinks'><i className="bi bi-chevron-right"></i>Contact</a>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
              <div className="col-sm-4 col-lg-4">
                  <div className="footer-item">
                      <div className="footer-contact">
                      <h3 id='footerLinks' >Contact info</h3>
                          <div className="contact-inner">
                              <ul >
                                  <li id='contactFooter'>
                                      <i className="bi bi-pin-map"></i>
                                      <a href="index.html">LooP.</a>
                                  </li>
                                  <br/>
                                  <li >
                                      <i className="bi bi-telephone" ></i>
                                      <a href="tel:+261 34 58 422 74">+261 34 58 422 74</a>
                                  </li>
                              </ul>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </footer>


  
  </div>
    )
  }
}
