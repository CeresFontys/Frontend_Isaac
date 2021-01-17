import axios from "axios";
import {Whitelist} from "./Models/Whitelist";
import {User} from "./Models/User";

const API_URL = "http://localhost:5008/api/";
const USER_ENDPOINT = "auth/";
const IP_ENDPOINT =  "whitelist/";

export class AccessControlService {
    constructor() {

    }
    authHeader(){
        const user = JSON.parse(localStorage.getItem("user") || "{}");
        if (user && user.accessToken) {
            return {Authorization: "Bearer" + user.accessToken}
        } else {
           return {};
        }
    }
    async getUsers() : Promise<Array<User>> {
        return (await axios.get(API_URL + USER_ENDPOINT, { headers: this.authHeader() })).data;
    }
    async getWhiteLists() : Promise<Array<Whitelist>> {
        return (await axios.get(API_URL + IP_ENDPOINT, { headers: this.authHeader() })).data;
    }
    async deleteUser(id: number) : Promise<any> {
        return await axios.post(API_URL + USER_ENDPOINT + id + "/delete/", { headers: this.authHeader() })
    }
    async deleteWhitelist(id: number) : Promise<any> {
        return await axios.delete(API_URL + IP_ENDPOINT + id, { headers: this.authHeader() })
    }
    async updateUser(user: User) : Promise<any> {
        return await axios.post(API_URL + USER_ENDPOINT + user.id + "/update/", user,{ headers: this.authHeader() })
    }
    async updateWhitelist(whitelist: Whitelist) : Promise<any> {
        return await axios.post(API_URL + IP_ENDPOINT + whitelist.id, whitelist,{ headers: this.authHeader() })
    }
    async createUser(user: User) : Promise<any> {
        return await axios.post(API_URL + USER_ENDPOINT + "Register", user,{ headers: this.authHeader() })
    }
    async createWhitelist(whitelist: Whitelist) : Promise<any> {
        return await axios.put(API_URL + IP_ENDPOINT, whitelist,{ headers: this.authHeader() })
    }
}
