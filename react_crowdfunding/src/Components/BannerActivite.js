import React, { Component } from 'react'
import baobab3 from '../image/baobab3.jpg'


export default class BannerActivite extends Component {
  render() {
    return (
      <div>
        <div className="page-title-area title-bg-four" style={{backgroundImage:  `url(${baobab3})`}}>
            <div className="d-table">
            <div className="d-table-cell">
                <div className="container">
                <div className="title-item">
                <h2>Mes activités</h2>
                    <ul>
                    <li>
                        <a href="index.html">Accueil</a>
                    </li>
                    <li>
                        <span>Activités</span>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
      </div>
    )
  }
}
