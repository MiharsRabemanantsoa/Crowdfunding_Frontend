import React, { Component } from 'react'
import baobab3 from '../image/baobab3.jpg'


export default class BannerModificationProjet extends Component {
  render() {
    return (
      <div>
        <div className="page-title-area title-bg-four" style={{backgroundImage:  `url(${baobab3})`}}>
            <div className="d-table">
            <div className="d-table-cell">
                <div className="container">
                <div className="title-item">
                <h2>Modifiez votre projet</h2>
                    <ul>
                    <li>
                        <a href="index.html">Accueil</a>
                    </li>
                    <li>
                        <span>Modification de votre  projet</span>
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
