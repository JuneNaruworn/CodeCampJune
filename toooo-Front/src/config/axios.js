import axios from 'axios';
import localStorageService from '../services/localStorageService'

axios.defaults.baseURL = "http://localhost:8000";

axios.interceptors.request.use(
    config => {

        if(config.url.includes("/login") || config.url.includes("/register")) return config;

        const token = localStorageService.getToken();

        if(token){
            config.headers["Autorization"] =`Bearer ${token}`;
    }
        return config;
    
    },
    err => {
        Promise.reject(err);
    }
);

export default axios;