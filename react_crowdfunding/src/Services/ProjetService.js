import axios from 'axios'

const PROJET_API_BASE_URL = 'http://localhost:8088/api/test/projet';
const PROJET_PAR_ID ='http://localhost:8088/api/test/details';

class ProjetService{

    getProjet(){
        return axios.get(PROJET_API_BASE_URL);
    }

    getProjectById(idProjet){
        return axios.get(PROJET_PAR_ID+'/'+idProjet);
    }
}

export default new ProjetService()