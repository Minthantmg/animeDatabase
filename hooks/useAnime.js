import {useQuery} from "@tanstack/react-query";
import {getAnimeList} from "../api/anime.js";

const useGetAnimeList = () => {
    return useQuery({
        queryKey: ['get', 'anime'],
        queryFn: getAnimeList
    })
}

export const useAnime = () => {
    return {
        useGetAnimeList,
    }
}