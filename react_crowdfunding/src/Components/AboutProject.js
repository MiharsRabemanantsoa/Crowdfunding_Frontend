import React,{useState,useEffect} from "react";
import { Link,useParams } from 'react-router-dom';
import logo_final from '../image/logo_final.png';
import logo_clair from '../image/logo_clair.png'
import ProjetService from "../Services/ProjetService";
import Footer from "./Footer";
// import { idContext } from "./IdProjet-Context";
import './CSS/aboutProject.css';
import ProgressBar from "@ramonak/react-progress-bar";
import Moment from 'react-moment';
import 'moment/locale/fr';
Moment.globalLocale = 'fr';


export default function AboutProject (){
    const urlImage = '../img/Images/baobab3.jpg';

    let { idProjetPath } = useParams();
    // const value = React.useContext(idContext);

    const [titre,setTitre]=useState("");
    const [description,setDescription]=useState("");
    const [collecte,setCollecte]=useState();
    const [objectif,setObjectif]=useState();
    const [participant,setParticipant]=useState();
    const [dateFin,setDateFin]=useState();
    const [tauxInteret,setTauxInteret]=useState();
    const [echeance,setEcheance]=useState();
    const [montantMin,setMontantMin]=useState();
    const [dureeRemboursement,setDureeRemboursement]=useState();
    const [image,setImage]=useState();
    const [descriptionLongue,setDescriptionLongue]=useState('');

    //évolution du progress bar
    const evolution = parseInt((collecte*100)/objectif);

    //calcul du jour restant
    const Currentdate = new Date(Date().toLocaleString());
    const limiteDate = new Date(dateFin);
    const diffTime = Math.abs(limiteDate - Currentdate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    useEffect(() => {
        // const param = BigInt(idProjetPath);
        console.log(idProjetPath);
        ProjetService.getProjectById(idProjetPath).then(
            (response)=>{

                console.log("response titre "+response.data.idProjet);
                console.log(response);

                if(response.data){
                    
                    setTitre(response.data[14]);
                    setDescription(response.data[5]);
                    setCollecte(response.data[19]);
                    setObjectif(response.data[12]);
                    setDateFin(response.data[9]);
                    setTauxInteret(response.data[13]);
                    setEcheance(response.data[7]);
                    setMontantMin(50);
                    setDureeRemboursement(response.data[6]);
                    setImage('.'+response.data[10]);
                    setParticipant(response.data[0]);
                    setDescriptionLongue(response.data[15]);
                    console.log(image);
                }
            }
        ).catch(error=>{
            console.log(error);
        })
      });

    return(
        <React.Fragment>
        <div className="Container">
            {/* <div className="loader">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="pre-box-one">
                            <div className="pre-box-two"></div>
                        </div>
                    </div>
                </div>
            </div> */}

        <div className="navbar-area sticky-top">

            <div className="mobile-nav">
                <Link to="/home" className="logo">
                    <img src={logo_clair} alt="Logo"/>
                </Link>
            </div>
        
            <div className="main-nav">
                <div className="container">
                    <nav className="navbar navbar-expand-md navbar-light">
                        <Link className="navbar-brand" to="/home">
                            <img src={logo_final} className="logo-one" alt="Logo"/>
                        </Link>
                        <div className="collapse navbar-collapse mean-menu" id="navbarSupportedContent">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <Link to="/home" className="nav-link active">Accueil</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/listProjet" className="nav-link">Tous les projets</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/Apropos" className="nav-link">A propos</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/contactUs" className="nav-link">Contact</Link>
                                </li>
                            </ul>
                            <div className="side-nav">
                                <Link className="nav-link" to="/signin">Se connecter</Link>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>

        {/* Fin navbar */}

        <div className="page-title-area title-bg-four" id="head-details-projet" style={{backgroundImage: `url(${urlImage})`}}>
            <div className="d-table">
                <div className="d-table-cell">
                    <div className="container">
                        <div className="title-item">
                            <h2>En quoi consiste ce projet ?</h2>
                        <ul>
                        <li>
                            <a href="/">Accueil</a>
                        </li>
                        <li>
                            <span>Détails Projet</span>
                        </li>
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>


<main id="main">
    <div className="section-title" style={{paddingTop:50,fontFamily:"Open Sans"}}>
    <h2>{titre}</h2>

    <p style={{color:'#757575',fontFamily:"Open Sans",textAlign:"center",maxWidth:1300}}>{description}</p>
    </div>

  <section style={{paddingTop:0,paddingBottom:0}}>
    <div className="donation-details-area ptb-100" style={{paddingTop:0}} >
        <div className="container">
            <div className="row">
                <div className="col-lg-7" >
                    <div className="details-item">
                        <div className="details-img" >
                             <img src={image} alt={image} style={{borderRadius:15}}/>
                        </div>
                                         
                    </div>
                </div>
                <div className="col-lg-5">
                  {/* <div className="card"> */}
                    <div className="detailsProject">
                      <div className="inner">
                        <div className="bottom">
                          {/* <div className="skill"> */}
                          <ProgressBar completed={evolution} bgColor="#ff6015" animateOnRender={true} dir="auto"/>
                          {/* </div> */}
                          <ul>
                          <li>Somme soulevée : {collecte}€</li>
                          <li>Objectif : {objectif}€</li>
                          </ul>
                          <ul>
                            <li>Participant : {participant}</li>
                            <li>Jour restant : {diffDays}</li>
                          </ul>
                          <h4 style={{paddingTop:20}}>Taux d'intérêt : <span>{tauxInteret}%</span></h4>                          
                          <h4 style={{paddingTop:7}}>Echéance : <span>{echeance} mois</span></h4>
                          <h4 style={{paddingTop:7}}>Montant minimal : <span>{montantMin}€</span></h4>
                          <h4 style={{paddingTop:7}}>Durée de remboursement : <span>{dureeRemboursement} mois</span></h4>
                          <h4 style={{paddingTop:7}}>Date de clôture : <span>{dateFin}</span></h4>
                          
                          <div className="about-btn-area" style={{paddingTop:40,alignItems:"center",justifyContent:'center',textAlign:"center"}}>
                                 <a className="bouton-participer" href="/investissement" >Je participe</a>
                            </div>
                        </div>
                      </div>
                    </div>
                  {/* </div> */}
                </div>
                <div className="Description-longue">
                  
                    <p>{descriptionLongue}</p>
                    
                </div>
            </div>
        </div>
    </div>
  </section>

</main>
            <Footer/>
            
        </div>
        </React.Fragment>
    )
}