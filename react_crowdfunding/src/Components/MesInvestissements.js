import React , {useState} from 'react';
import { useEffect } from 'react';
import Moment from 'react-moment';
import InvestissementService from '../Services/InvestissementService';

export default function MesInvestissements() {

    const [investissement, setInvestissement]= useState([] );
    useEffect (() =>{
        getMesInvestissements();
      
    }, []);
  
  
    const getMesInvestissements = (id_investissement) => {
      InvestissementService.getInvestissementByIdUser(3).then((response) => {
          setInvestissement(response.data);
          
          console.log(response.data);
      })
    };

  return (
    <div>
       
       <table >  
              {
                investissement.map((investissement, index) =>(        
                    <tbody>
                        
                            <tr key={investissement.id_investissement}>
                                <td> <img src={investissement.projetInvesti.image} alt={investissement.projetInvesti.image} style={{width: "500px" , height: 'auto'}}/> </td>
                                <td> <h5 style={{color:"#ff6015", fontWeight: 'bold'}}>{investissement.projetInvesti.titre}</h5> 
                                <p>{investissement.projetInvesti.descriptionCourte}</p>
                                
                                
                                <h6>{"Somme collecte : " +investissement.projetInvesti.sommeCollecte+" $ " + " Objectif : " + investissement.projetInvesti.sommeObjectif +" $ "}</h6>
                                    
                                <h6><Moment format='MMMM Do YYYY, h:mm:ss a'>{investissement.projetInvesti.finCampagne}</Moment></h6>
                                </td>
                                
                               
                            </tr>                   
                    </tbody>
               ))
              }
        </table>
    </div>
  )
}
