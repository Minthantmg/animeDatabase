import {axiosInstance} from "../utils/axiosInstance";

export const getAnimeList = async () => {
    try {
        const res = await axiosInstance.get(`anime`)
        return res.data.data;
    } catch (e) {
        throw e;
    }
}