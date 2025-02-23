import axios from "axios";

const apiUri = `https://jwoc-blogging-cwdd.vercel.app/api/v1`

const axiosInstance = axios.create({
    baseURL: apiUri,
    withCredentials: true
})

export default axiosInstance