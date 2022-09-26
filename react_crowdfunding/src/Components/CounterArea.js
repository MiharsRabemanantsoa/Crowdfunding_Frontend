import React, {useState , useEffect} from 'react'
import CounterAreaService from '../Services/CounterAreaService'


export default function CounterArea() {

    const [comptageProjet, setComptageProjet]= useState(false)
    const [comptageProjetFerme, setComptageProjetFerme]= useState(false)
    const [comptageInvestisseur, setComptageInvestisseur]= useState(false)
    const [comptageInvestissement, setComptageInvestissement]= useState(false)
   

    useEffect(() => {
        getComptageProjet();
        getComptageProjetFerme();
        getComptageInvestisseur();
        getComptageInvestissement();
    }, []);
  
    // affiche le nombre de projet
    const getComptageProjet = () => {
      CounterAreaService.getAfficheComptageProjet().then((response) => {
          setComptageProjet(response.data);
          
          console.log(response.data);
          
      })
  };
  // affiche le nombre de projet
  const getComptageProjetFerme = () => {
    CounterAreaService.getByProjetFerme().then((response) => {
        setComptageProjetFerme(response.data);
        
        console.log(response.data);
        
    })
};

  //affiche le nombre d'investisseur
  const getComptageInvestisseur = () => {
    CounterAreaService.getSommeInvestisseur().then((response) => {
        setComptageInvestisseur(response.data);
        
        console.log(response.data);
        
    })
};
//affiche le nombre d'investissement
const getComptageInvestissement = () => {
    CounterAreaService.getSommeInvestissement().then((response) => {
        setComptageInvestissement(response.data);
        
        console.log(response.data);
        
    })
};

  return (
    <div>
      <div className="counter-area pt-100 pb-70">
        <div className="container">
            <div className="row">
                <div className="col-6 col-sm-6 col-lg-3">
                    <div className="counter-item">
                        <i className="bi-bookmark-check"></i>
                        <h3>
                        <span className="odometer-value">{comptageProjet}</span>
                            
                        </h3>
                        <p>Campagnes enregistrées</p>
                    </div>
                </div>
                <div className="col-6 col-sm-6 col-lg-3">
                    <div className="counter-item">
                        <i className="bi-award"></i>
                        <h3>
                            <span className="odometer-value">{comptageProjetFerme}</span>
                        </h3>
                        <p>Campagnes réussies</p>
                    </div>
                </div>
                <div className="col-6 col-sm-6 col-lg-3">
                    <div className="counter-item">
                        <i className="bi-currency-euro"></i>
                        <h3>
                        <span className="odometer-value">{comptageInvestissement}</span>
                        </h3>
                        <p>Somme investie</p>
                    </div>
                </div>
                <div className="col-6 col-sm-6 col-lg-3">
                    <div className="counter-item">
                        <i className="bi-people"></i>
                        <h3>
                        <span className="odometer-value">{comptageInvestisseur}</span>
                        </h3>
                        <p>Investisseurs</p>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

