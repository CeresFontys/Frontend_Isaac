import axios from "axios";

const API_URL = "http://localhost:5008/api/auth/";

class AuthService {
	login(email: string, password: string) {
		return axios
			.post(API_URL + "Login", {
				email,
				password,
			})
			.then((response) => {
				if (response.data.accessToken) {
					localStorage.setItem("user", JSON.stringify(response.data));
				}
				console.log(response.data);
				return response.data;
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
		return JSON.parse(localStorage.getItem("user") || "{}");
	}
}

export default new AuthService();
