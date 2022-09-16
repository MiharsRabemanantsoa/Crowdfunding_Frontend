import React from 'react'
import { Link} from 'react-router-dom';
import ProgressBar from "@ramonak/react-progress-bar";



export default function Card (props) {

    //évolution du progress bar
    const evolution = parseInt((props.projet.sommeCollecte*100)/props.projet.sommeObjectif);

    //calcul du jour restant
    const Currentdate = new Date(Date().toLocaleString());
    const limiteDate = new Date(props.projet.finCampagne);
    const diffTime = Math.abs(limiteDate - Currentdate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));   


    return (
        
        <div className="col-sm-6 col-lg-4">
        <div className="donation-item">
            <div className="img">
                <img src={props.projet.image} alt={props.projet.titre}/>
                <Link className="common-btn" to={`/AboutProjectall/${props.projet.idProjet}`}>Investir</Link>
            </div>
            <div className="inner">
                <div className="top">
                    <Link className="tags" to={`/Aboutsrojet.idProjet}`}>#{props.projet.categProjet.nomCateg}</Link>
                        <h3>
                            <Link to={`/AboutProjectall/${props.projet.idProjet}`}>{props.projet.titre}</Link>
                        </h3>
                    <p>{props.projet.descriptionCourte}</p>
                </div>
                <div className="bottom">
                    <ProgressBar completed={evolution} bgColor="#ff6015" animateOnRender={true} dir="auto"/>
                    {/* <div className="skill">                    
                        <div className="skill-bar skill1 wow fadeInLeftBig">
                            <span className="skill-count1">50%</span>
                        </div>
                    </div> */}
                    <ul>
                        <li>Objectif : {props.projet.sommeObjectif}Ar</li>
                        <li>Collectée : {props.projet.sommeCollecte}Ar</li>
                    </ul>
                    <h4>Taux d'intérêt : <span>{props.projet.tauxInteret}%</span></h4><br/>
                    <h4>Durée restante : <span> {diffDays} jours</span></h4><br/>
                    <h4>Lieu : <span>{props.projet.localisation} </span></h4>
                </div>
            </div>
        </div>
    
    </div>
    
    )
}
// Card.contextType = idContext;
