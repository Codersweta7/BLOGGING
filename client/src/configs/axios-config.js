import axios from "axios";

const apiUri = `/api/v1`

const axiosInstance = axios.create({
    baseURL: apiUri,
    withCredentials: true
})

export default axiosInstance