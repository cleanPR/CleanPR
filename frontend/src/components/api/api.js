import axios from "axios";
const baseUrl = process.env.REACT_APP_API_URL;

const api = axios.create({
    baseURL: "http://localhost:8081/api/v1",
    withCredentials: true,
})


export default api;