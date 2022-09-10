import axios from "axios";

const USERS_API_URL = "http://localhost:8089/api/login";

class UserService {
    createUser(user){
        return axios.post(USERS_API_URL, user);
    }

    getUsers(email) {
        return axios.get(USERS_API_URL, email)
    }
}
export default new UserService();

