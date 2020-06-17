//#创建http.js文件
import router from '../routes'

window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

window.axios.defaults.timeout = 5000;

window.axios.interceptors.request.use(
    config => {
        config.headers.Authorization = `${localStorage.token_type} ${localStorage.access_token}`;
        return config;
    },
    err => {
        return Promise.reject(err);
    });

window.axios.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response.status === 401) {

        }
        return Promise.reject(error.response.data)
    });
