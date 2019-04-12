import axios from 'axios';

const api = axios.create({
    baseURL: "https://app-box-estudo-backend.herokuapp.com",
});

export default api;