// eslint-disable-next-line no-unused-vars
import React from 'react';
import {useParams} from "react-router-dom";
import {useAnime} from "../../hooks/useAnime.js";
import Poster from "../components/detail/poster.jsx";
import Description from "../components/detail/description.jsx";

const Detail = () => {
    const {id} = useParams();
    const {useGetAnimeById} = useAnime()
    const {data: single, isSuccess} = useGetAnimeById(id)

    return (
        <>
            {isSuccess && (
                <>
                    <div className="lg:pt-28 lg:mx-52 min-h-screen">
                       <span className="text-black lg:text-xl">
                          {single?.attributes.titles.en_jp}
                       </span>
                        <div className="h-[1px] bg-black"></div>
                        <div className="flex text-black">
                            <div className="w-1/4">
                                <Poster single={single}/>
                            </div>
                            <div className="w-3/4 border-l-2 gray-200">
                                <Description id={id}/>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default Detail;