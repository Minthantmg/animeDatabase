import {useQuery} from "@tanstack/react-query";
import {getAnimeList, getMangaList, getTrendList} from "../api/anime.js";

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

export const useAnime = () => {
    return {
        useGetAnimeList,
        useGetMangaList,
        useGetTrendAnimeList,
    }
}