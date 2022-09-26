import axios from 'axios';

const COMPTAGE_PROJET_API_BASE_URL='http://localhost:8088/api/test/comptageProjet'
const COMPTAGE_PROJET_REUSSI_API_BASE_URL='http://localhost:8088/api/test/projetFerme'
const COMPTAGE_INVESTISSEUR_API_BASE_URL='http://localhost:8088/investissement/comptageInvestisseur'
const COMPTAGE_INVESTISSEMENT_API_BASE_URL='http://localhost:8088/investissement/comptageInvestissement'

class  CounterAreaService{

    getAfficheComptageProjet(){
        
        return axios.get(COMPTAGE_PROJET_API_BASE_URL);
    }

    getByProjetFerme(){
        
        return axios.get(COMPTAGE_PROJET_REUSSI_API_BASE_URL);
    }

    getSommeInvestisseur(){
        
        return axios.get(COMPTAGE_INVESTISSEUR_API_BASE_URL);
    }

    getSommeInvestissement(){
        
        return axios.get(COMPTAGE_INVESTISSEMENT_API_BASE_URL);
    }

    
}
export default new CounterAreaService()

