import React from 'react';
import {useParams} from "react-router-dom";
import {useAnime} from "../../hooks/useAnime.js";

const Detail = () => {
    const {id} = useParams();
    const {useGetAnimeById, useGetCastingById, useGetCharacterById, useGetEpisodeById, useGetStreamById} = useAnime()
    const {data: single} = useGetAnimeById(id)
    const {data: casting} = useGetCastingById(id)
    const {data: character} = useGetCharacterById(id)
    const {data: episode} = useGetEpisodeById(id)
    const {data: stream} = useGetStreamById(id)

    return (
        <div className="pt-32">
            {id}
        </div>
    );
};

export default Detail;