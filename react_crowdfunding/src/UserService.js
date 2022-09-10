import axios from "axios";

const USERS_API_URL = "http://localhost:8089/api/users/";

class UserService {
    createUser(user){
        return axios.post(USERS_API_URL, user);
    }
}
export default new UserService();

