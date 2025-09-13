import axios from "axios";
const backendBaseUrl = process.env.REACT_APP_API_URL;

const api = axios.create({
    baseURL: backendBaseUrl,
    withCredentials: true,
})


export default api;