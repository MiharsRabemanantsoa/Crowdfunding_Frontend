import React, { Component } from 'react'
import Card from './Card'
import ProjetService from '../Services/ProjetService'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

export default class TousLesProjets extends Component {
    
    constructor(props){
        super(props)
        this.state={
            projets : []
        }
    }

    componentDidMount(){
        ProjetService.getProjet().then((res)=>{
            this.setState({projets : res.data})
        }
        )
    }

       
  render()
    {return (
        <div className="feature-area pt-100 pb-70">
        <div className="container">
            <div className="row">
               <section className="donations-area pt-100 pb-70">
                    <div className="container">
                        <div className="section-title">
                            <h2 style={{fontWeight:700}}>Tous les projets</h2>
                            <p style={{color:'#757575',fontFamily:"Open Sans"}}>Choisissez les projets qui vous inspirent parmi les nombreux projets enregistrés sur notre site et capitalisez votre épargne.</p>
                        </div>
                        <div className="row" >
                           <Carousel axis='horizontal'selectedItem='3'  responsive={responsive}>
                        { this.state.projets.map((projet)=>
                            
                            <Card projet={projet} key={projet.idProjet}></Card> 
                             ) 
                        }
                           </Carousel>
                        </div>
                        <div className="section-title">
                            <a className="common-btn banner-btn" href="projets.html">Voir tous les projets</a>
                        </div>
                    </div>
                  </section>
                </div>
        </div>
        </div>

    )
  }

}
