import axios from 'axios';
import localStorageService from '../services/localStorageService'

axios.defaults.baseURL = "http://localhost:8000";

axios.interceptors.request.use(
    config => {

        if (config.url.includes("/login") || config.url.includes("/register")) return config;

        const token = localStorageService.getToken();
        console.log("token:>>>", token)

        if (token) {
            config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;

    },
    err => {
        return Promise.reject(err);
    }
);

export default axios;