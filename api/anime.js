import {axiosInstance} from "../utils/axiosInstance";

export const getAnimeList = async () => {
    try {
        const res = await axiosInstance.get(`anime`)
        return res.data.data;
    } catch (e) {
        throw e;
    }
}

export const getMangaList = async () => {
    try {
        const res = await axiosInstance.get(`manga`)
        return res.data.data;
    } catch (e) {
        throw e;
    }
}

export const getTrendList = async () => {
    try {
        const res = await axiosInstance.get(`trending/anime`)
        return res.data.data;
    } catch (e) {
        throw e;
    }
}