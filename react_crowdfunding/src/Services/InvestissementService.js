import axios from 'axios';

const Mes_INVESTISSEMENTS_API_BASE_URL='http://localhost:8088/investissement/investissementuser'


class  NotificationService{

    getInvestissementByIdUser(id_user){
        
        return axios.get(Mes_INVESTISSEMENTS_API_BASE_URL+'/'+id_user);
        
    }
}
export default new NotificationService()

