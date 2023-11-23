// create axios
import axios from "axios";

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 50000,
    headers: {
        "Content-Type": "application/json"
    }
});

export default api;
