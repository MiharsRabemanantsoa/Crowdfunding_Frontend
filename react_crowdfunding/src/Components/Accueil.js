import React, { Component } from 'react'
import Banner from './Banner';
import ProjetPopulaire from './ProjetPopulaire';
import CounterArea from './CounterArea';
import BlogArea from './BlogArea'
import TousLesProjets from './TousLesProjets';
import Footer from './Footer';
import AcceuilClt from './AcceuilClt';

export default class Accueil extends Component {
  render() {
    return (
      <div>
        {/* <AcceuilClt/> */}
      <Banner></Banner>
      <ProjetPopulaire></ProjetPopulaire>
      <CounterArea></CounterArea>
      <BlogArea></BlogArea>
      <TousLesProjets></TousLesProjets>
      <Footer></Footer>
      </div>
    )
  }
}
