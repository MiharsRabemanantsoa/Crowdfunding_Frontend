import axios from "axios";
const API_URL = "http://localhost:8088/loop/auth/";

class AuthService {
  // login(email, motDePasse) {
  //   return axios
  //     .post(API_URL + "signin", {
  //       email,
  //       motDePasse
  //     })
  //     .then(response => {
  //       if (response.data.JSON) {
  //         localStorage.setItem("user", JSON.stringify(response.data));
  //         console.log(localStorage.getItem);
  //       }
  //       // console.log(localStorage.getItem.arguments);
  //       return response.data;
  //     });
  // }
  
  login(email, motDePasse) {
    return axios
      .post(API_URL + "signin", {
        email,
        motDePasse
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password
    });
  }
  
  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}
export default new AuthService();