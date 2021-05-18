import { notification } from 'antd';
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

axios.interceptors.request.use(
    response => {
        return response;

    },
    err => {
        if (err.response && err.response.status === 401){
            localStorageService.response();
            window.location.reload();
            notification.error({
                message: "กรุณาเข้าสู่ระบบใหม่"
            });
            return Promise.reject(err);
        }
        
        return Promise.reject(err);
    }

);

export default axios;