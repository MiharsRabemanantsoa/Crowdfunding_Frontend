import axios from 'axios'

const PROJET_API_BASE_URL = 'http://localhost:8088/api/test/projet';
const PROJET_PAR_ID ='http://localhost:8088/api/test/details';
const PROJET_ID_USER ='http://localhost:8088/api/test/projetuser';
const PROJET_ID ='http://localhost:8088/api/test';
const PROJET_SAVE_ID ='http://localhost:8088/api/test/save';
const PROJET_UPDATE_ID ='http://localhost:8088/api/test/modifier';

class ProjetService{

    getProjet(){
        return axios.get(PROJET_API_BASE_URL);
    }

    getProjectById(idProjet){
        return axios.get(PROJET_PAR_ID+'/'+idProjet);
    }
    getProjetByIdUser(id_user){
        
        return axios.get(PROJET_ID_USER+'/'+id_user);   
    }
    getProjetByIdDetails(idProjet){
        
        return axios.get(PROJET_ID+'/'+idProjet);   
    }
    saveProjet(projet){
        
        return axios.get(PROJET_SAVE_ID, projet);
    }
    updateProjet(idProjet , projet){
        
        return axios.put(PROJET_UPDATE_ID+'/'+idProjet , projet);   
    }

}

export default new ProjetService()