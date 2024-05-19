// eslint-disable-next-line no-unused-vars
import React from 'react';
import {useAnime} from "../../../../hooks/useAnime.js";

// eslint-disable-next-line react/prop-types
const Details = ({id}) => {
    const {useGetAnimeById} = useAnime()
    const {data: single} = useGetAnimeById(id)
    return (
        <div className="text-sm">
            <div className="font-bold">
                Synopsis
            </div>
            <div className="h-[1px] bg-black"></div>
            {/* eslint-disable-next-line react/prop-types */}
            <div>{single?.attributes.synopsis}</div>

            <div className="font-bold lg:pt-10">
                Description
            </div>
            <div className="h-[1px] bg-black"></div>
            {/* eslint-disable-next-line react/prop-types */}
            <div>{single?.attributes.description}</div>
        </div>
    );
};

export default Details;