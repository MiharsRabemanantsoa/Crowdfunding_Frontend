import React,{Component} from 'react';
import Card from'./Card'
import ProjetPopulaireService from '../Services/ProjetPopulaireService';
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

export default class ProjetPopulaire extends Component {
    constructor(props){
        super(props)
        this.state={
            projets :[]
        }
    }

    componentDidMount(){
        ProjetPopulaireService.getProjet().then((result)=>{
            this.setState({projets : result.data})
        }
        )
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
                
                <Carousel axis='horizontal'selectedItem='3'  responsive={responsive}>
                            { this.state.projets.map((projet,index)=>
                                
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
    )
  }
}
