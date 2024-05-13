import axios from "axios";

export const axiosInstance = axios.create({
    baseURL:"https://kitsu.io/api/edge/",
})