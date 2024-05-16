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

export const getAnimeById = async (id) => {
    try {
        const res = await axiosInstance.get(`anime/${id}`)
        return res.data.data;
    } catch (e) {
        throw e;
    }
}

export const getMangaById = async (id) => {
    try {
        const res = await axiosInstance.get(`manga/${id}`)
        return res.data.data;
    } catch (e) {
        throw e;
    }
}

export const getCastingById = async (id) => {
    try {
        const res = await axiosInstance.get(`anime/${id}/castings`)
        return res.data.data;
    } catch (e) {
        throw e;
    }
}

export const getCharacterById = async (id) => {
    try {
        const res = await axiosInstance.get(`anime/${id}/characters`)
        return res.data.data;
    } catch (e) {
        throw e;
    }
}

export const getEpisodeById = async (id) => {
    try {
        const res = await axiosInstance.get(`anime/${id}/episodes`)
        return res.data.data;
    } catch (e) {
        throw e;
    }
}

export const getStreamById = async (id) => {
    try {
        const res = await axiosInstance.get(`anime/${id}/streaming-links`)
        return res.data.data;
    } catch (e) {
        throw e;
    }
}