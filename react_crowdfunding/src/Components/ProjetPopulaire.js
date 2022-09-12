import React, { Component } from 'react'
import Card from'./Card'

export default class ProjetPopulaire extends Component {
constructor(props){
    super(props)
    this.state={
        projetPoulaire :[]
    }
}
  

  render() {
    return (
      <section className="blog-area pt-100 pb-70">
      <div className="container">
          <div className="section-title">
                  <h2 style={{fontWeight:700}}>Projets Populaires</h2>
              <p style={{color:'#757575',fontFamily:"Open Sans"}}>Fructifiez vos épargnes dans des projets impactant et sûrs.</p>
          </div>
          <div className="row">
              {/* <div className="col-sm-6 col-lg-4">
                  <div className="blog-item">
                      <div className="top">
                          <a href="blog-details.html">
                              <img alt="Blog"/>
                          </a>
                      </div>
                      <div className="bottom">
                          <ul>
                              <li>
                                  <i className="bi-calendar"></i>
                                      <span>21 Jan, 2020</span>
                              </li>
                              <li>
                                  <i className="bi-person"></i>
                                      <span>By:</span>
                                  <a href="index.html">Admin</a>
                              </li>
                          </ul>
                              <h3>
                                  <a href="blog-details.html">Donate for nutration less poor people</a>
                              </h3>
                              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet cupiditate sit ducimus dolor laudantium distinction</p>
                          <a className="blog-btn" href="blog-details.html">En savoir plus</a>
                      </div>
                  </div>
              </div>
                <div className="col-sm-6 col-lg-4">
                    <div className="blog-item">
                        <div className="top">
                            <a href='/' className="blog-details.html">
                                <img  alt="Blog"/>
                            </a>
                        </div>
                        <div className="bottom">
                            <ul>
                                <li>
                                    <i className="bi-calendar"></i>
                                        <span>22 Jan, 2020</span>
                                </li>
                                <li>
                                    <i className="bi-person-fill"></i>
                                        <span>By:</span>
                                    <a href="index.html">Admin</a>
                                </li>
                            </ul>
                        <h3>
                        <a href="blog-details.html">Charity meetup in Berline next year</a>
                        </h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet cupiditate sit ducimus dolor laudantium distinction</p>
                        <a className="blog-btn" href="blog-details.html">En savoir plus</a>
                        </div>
                    </div>
                </div>
              <div className="col-sm-6 offset-sm-3 offset-lg-0 col-lg-4">
                  <div className="blog-item">
                      <div className="top">
                          <a href="blog-details.html">
                              <img alt="Blog"/>
                          </a>
                      </div>
                      <div className="bottom">
                          <ul>
                              <li>
                                  <i className="bi-calendar"></i>
                                      <span>23 Jan, 2020</span>
                              </li>
                              <li>
                                  <i className="bi-person-fill"></i>
                                      <span>By:</span>
                                  <a href="index.html">Admin</a>
                              </li>
                          </ul>
                              <h3>
                                  <a href="blog-details.html">Donate for the poor people to help them</a>
                              </h3>
                              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet cupiditate sit ducimus dolor laudantium distinction</p>
                          <a className="blog-btn" href="blog-details.html">En savoir plus</a>
                      </div>
                  </div>
              </div> */}
              { this.state.projetPopulaire.map((projetPolaire,index)=>
                            
                            <Card projet={projet} key={projet.idProjet}></Card> 
                             ) 
                        }
          </div>
          <div className="section-title">
              <a className="common-btn banner-btn" href="projets.html">Voir tous les projets</a>
          </div>
      </div>
  </section>
    )
  }
}
