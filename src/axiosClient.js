import axios from "axios";

const axiosClient = axios.create({
    baseURL: import.meta.env.VITE_API_BASR_URL,
});

export default axiosClient;