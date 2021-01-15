import axios from "axios";
import jwt_decode from "jwt-decode";
import { User } from "../models/User";

const API_URL = "http://localhost:5008/api/auth/";

class AuthService {
  login(email: string, password: string, callback: (Boolean)=> any) {
    return axios
      .post(API_URL + "Login", {
        email,
        password,
      })
      .then((response) => {
        if (response.data) {
          localStorage.setItem("user", JSON.stringify(response.data));
          console.log(response.data);
          callback(true);
          return response.data;
        }
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(email: string, password: string) {
    return axios.post(API_URL + "Register", {
      email,
      password,
    });
  }

  getCurrentUser() {
    var parsedJson = JSON.parse(localStorage.getItem("user") || "{}");
    var user = new User(jwt_decode(parsedJson));
  }
}

export default new AuthService();
