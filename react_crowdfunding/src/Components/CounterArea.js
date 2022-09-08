import React, { Component } from 'react'

export default class CounterArea extends Component {
  render() {
    return (
        <div className="counter-area pt-100 pb-70">
        <div className="container">
            <div className="row">
                <div className="col-6 col-sm-6 col-lg-3">
                    <div className="counter-item">
                        <i className="bi-bookmark-check"></i>
                        <h3>
                            <span className="odometer odometer-auto-theme" data-count="30">
                                <div className="odometer-inside">
                                    <span className="odometer-digit">
                                        <span className="odometer-digit-spacer">8</span>
                                        <span className="odometer-digit-inner">
                                            <span className="odometer-ribbon">
                                                <span className="odometer-ribbon-inner">
                                                    <span className="odometer-value">3</span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </div>
                            </span>
                            <span className="target"> M</span>
                        </h3>
                        <p>Campagnes enregistrées</p>
                    </div>
                </div>
                <div className="col-6 col-sm-6 col-lg-3">
                    <div className="counter-item">
                        <i className="bi-award"></i>
                        <h3>
                            <span className="odometer odometer-auto-theme" data-count="250">
                                <div className="odometer-inside">
                                    <span className="odometer-digit">
                                        <span className="odometer-digit-spacer">8</span>
                                        <span className="odometer-digit-inner">
                                            <span className="odometer-ribbon">
                                                <span className="odometer-ribbon-inner">
                                                    <span className="odometer-value">2</span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                    <span className="odometer-digit">
                                        <span className="odometer-digit-spacer">8</span>
                                        <span className="odometer-digit-inner">
                                            <span className="odometer-ribbon">
                                                <span className="odometer-ribbon-inner">
                                                    <span className="odometer-value">5</span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                    <span className="odometer-digit">
                                        <span className="odometer-digit-spacer">8</span>
                                        <span className="odometer-digit-inner">
                                            <span className="odometer-ribbon">
                                                <span className="odometer-ribbon-inner">
                                                    <span className="odometer-value">0</span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </div>
                            </span>
                            <span className="target"> +</span>
                        </h3>
                        <p>Campagnes réussies</p>
                    </div>
                </div>
                <div className="col-6 col-sm-6 col-lg-3">
                    <div className="counter-item">
                        <i className="bi-currency-euro"></i>
                        <h3>
                            <span className="odometer odometer-auto-theme" data-count="550">
                                <div className="odometer-inside">
                                    <span className="odometer-digit">
                                        <span className="odometer-digit-spacer">8</span>
                                        <span className="odometer-digit-inner">
                                            <span className="odometer-ribbon">
                                                <span className="odometer-ribbon-inner">
                                                    <span className="odometer-value">5</span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                    <span className="odometer-digit">
                                        <span className="odometer-digit-spacer">8</span>
                                        <span className="odometer-digit-inner">
                                            <span className="odometer-ribbon">
                                                <span className="odometer-ribbon-inner">
                                                    <span className="odometer-value">5</span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                    <span className="odometer-digit">
                                        <span className="odometer-digit-spacer">8</span>
                                        <span className="odometer-digit-inner">
                                            <span className="odometer-ribbon">
                                                <span className="odometer-ribbon-inner">
                                                    <span className="odometer-value">0</span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </div>
                            </span>
                            <span className="target"> +</span>
                        </h3>
                        <p>Somme investie</p>
                    </div>
                </div>
                <div className="col-6 col-sm-6 col-lg-3">
                    <div className="counter-item">
                        <i className="bi-people"></i>
                        <h3>
                            <span className="odometer odometer-auto-theme" data-count="500">
                                <div className="odometer-inside">
                                    <span className="odometer-digit">
                                        <span className="odometer-digit-spacer">8</span>
                                        <span className="odometer-digit-inner">
                                            <span className="odometer-ribbon">
                                                <span className="odometer-ribbon-inner">
                                                    <span className="odometer-value">5</span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                    <span className="odometer-digit">
                                        <span className="odometer-digit-spacer">8</span>
                                        <span className="odometer-digit-inner">
                                            <span className="odometer-ribbon">
                                                <span className="odometer-ribbon-inner">
                                                    <span className="odometer-value">0</span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                    <span className="odometer-digit">
                                        <span className="odometer-digit-spacer">8</span>
                                        <span className="odometer-digit-inner">
                                            <span className="odometer-ribbon">
                                                <span className="odometer-ribbon-inner">
                                                    <span className="odometer-value">0</span>
                                                </span>
                                            </span>
                                        </span>
                                    </span>
                                </div>
                            </span>
                            <span className="target"> +</span>
                        </h3>
                        <p>Investisseurs</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
  }
}
