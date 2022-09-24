import axios from 'axios'

const PROJETPOPULAIRE_API_BASE_URL = 'http://localhost:8088/home/projetpop';

class ProjetPopulaireService{

    getProjet(){
        return axios.get(PROJETPOPULAIRE_API_BASE_URL);
        
    }
}

export default new ProjetPopulaireService()