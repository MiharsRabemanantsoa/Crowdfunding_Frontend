import React, {useState} from 'react'
import { useEffect } from 'react';
import ProjetService from '../Services/ProjetService';
import Moment from 'react-moment';
import { Link } from 'react-router-dom'

export default function MesProjets() {
    const [projet, setProjet]= useState([] );

    useEffect (() =>{
      getProjet();
      
    }, []);
  
  
    const getProjet = (id_user) => {
      ProjetService.getProjetByIdUser(3).then((response) => {
          setProjet(response.data);
          
          console.log(response.data);
      })
    };
  return (
    <div>
        

            <table >  
              {
                projet.map((projet, index) =>(        
                    <tbody key={projet.idProjet}>
                        
                            <tr key={projet.idProjet} style={{borderRadius:"100px"}}>
                                
                                <td> <img src={projet.image} alt={projet.image} style={{width: "500px" , height: 'auto'}}/> </td>
                                <td> <h5 style={{color:"#ff6015", fontWeight: 'bold'}}>{projet.titre}</h5> 
                                <p>{projet.descriptionCourte}</p>
                                
                                
                                <h6>{"Somme collecte : " + projet.sommeCollecte+" $ " + " Objectif : " + projet.sommeObjectif +" $ "}</h6>
                                    
                                <h6><Moment format='MMMM Do YYYY, h:mm:ss a'>{projet.finCampagne}</Moment></h6>
                                </td>
                                <td style={{color:'#363256' ,  fontWeight: 'bold'}}><p style={{ marginTop:'60px'}}>{projet.statut.typeStatut}</p></td>
                                <td>
                                <Link  to={`/modifierDetails/${projet.idProjet}`} >
                                  <button class="common-btn banner-btn" style={{ border:'none',  marginTop:'65px' , width:'auto'}}>Modifier</button>
                                </Link>
                                </td>
                                
                               
                            </tr> 
                            <br></br>                 
                    </tbody>
                    
               ))
              }
            </table>
        
        
    </div>
  )
}
