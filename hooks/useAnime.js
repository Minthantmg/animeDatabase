import {useQuery} from "@tanstack/react-query";
import {
    getAllCharacters,
    getAnimeById,
    getAnimeList,
    getCastingById,
    getCharacterById, getEpisodeById,
    getMangaById,
    getMangaList, getStreamById,
    getTrendList
} from "../api/anime.js";

const useGetAnimeList = () => {
    return useQuery({
        queryKey: ['get', 'anime'],
        queryFn: getAnimeList
    })
}

const useGetMangaList = () => {
    return useQuery({
        queryKey: ['get', 'manga'],
        queryFn: getMangaList
    })
}

const useGetTrendAnimeList = () => {
    return useQuery({
        queryKey: ['get', 'trendAnime'],
        queryFn: getTrendList
    })
}

const useGetAnimeById = (id) => {
    return useQuery({
        queryKey: ['get', 'singleAnime',id],
        queryFn: () => getAnimeById(id),
    })
}

const useGetMangaById = (id) => {
    return useQuery({
        queryKey: ['get', 'singleManga',id],
        queryFn: () => getMangaById(id),
    })
}

const useGetCastingById = (id) => {
    return useQuery({
        queryKey: ['get', 'casting',id],
        queryFn: () => getCastingById(id),
    })
}

const useGetCharacterById = (id) => {
    return useQuery({
        queryKey: ['get', 'character',id],
        queryFn: () => getCharacterById(id),
    })
}

const useGetEpisodeById = (id) => {
    return useQuery({
        queryKey: ['get', 'episode',id],
        queryFn: () => getEpisodeById(id),
    })
}

const useGetStreamById = (id) => {
    return useQuery({
        queryKey: ['get', 'stream',id],
        queryFn: () => getStreamById(id),
    })
}

const useGetCharacters = (id) => {
    return useQuery({
        queryKey: ['get', 'characters',id],
        queryFn: () => getAllCharacters(id),
    })
}

export const useAnime = () => {
    return {
        useGetAnimeList,
        useGetMangaList,
        useGetTrendAnimeList,
        useGetAnimeById,
        useGetMangaById,
        useGetCastingById,
        useGetCharacterById,
        useGetEpisodeById,
        useGetStreamById,
        useGetCharacters,
    }
}