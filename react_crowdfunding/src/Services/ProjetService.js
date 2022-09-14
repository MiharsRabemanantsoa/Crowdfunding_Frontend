import axios from 'axios'

const PROJET_API_BASE_URL = 'http://localhost:8088/api/test/projet';

class ProjetService{

    getProjet(){
        return axios.get(PROJET_API_BASE_URL);
    }
}

export default new ProjetService()