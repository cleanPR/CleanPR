import axios from "axios";
const backendBaseUrl = process.env.REACT_APP_API_URL;

const api = axios.create({
    baseURL: backendBaseUrl,
    withCredentials: true,
})

api.interceptors.response.use(
    response => response,
    error => {
        if (error.response && error.response.data?.error === "Invalid JWT") {
            localStorage.removeItem('userProfile');
            window.location.href = "/";
        }
        return Promise.reject(error);
    }
);

export default api;