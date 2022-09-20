import axios from 'axios';

const NOTIFICATION_API_BASE_URL='http://localhost:8088/notification/notific'
const COMPTAGE_API_BASE_URL='http://localhost:8088/notification/comptage'
// const READ_API_BASE_URL='http://localhost:8088/notification/read/{id_notification}'

class  NotificationService{
    getNotification(){
        return axios.get(NOTIFICATION_API_BASE_URL);
    }

    getAfficheComptage(){
        return axios.get(COMPTAGE_API_BASE_URL);
    }
    
    changeNotifStatusToRead(id_notification){
        
        return axios.put("http://localhost:8088/notification/read/"+id_notification);
    }
}
export default new NotificationService()

