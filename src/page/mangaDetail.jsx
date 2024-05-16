import React from 'react';
import {useParams} from "react-router-dom";
import {useAnime} from "../../hooks/useAnime.js";

const MangaDetail = () => {
    const {id} = useParams();
    const {useGetMangaById} = useAnime()
    const {data: single} = useGetMangaById(id)
    console.log(single)
    return (
        <div className="pt-80">
            detail page {id}
        </div>
    );
};

export default MangaDetail;