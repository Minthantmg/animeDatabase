// eslint-disable-next-line no-unused-vars
import React from 'react';
import {useAnime} from "../../../../hooks/useAnime.js";
import Youtube from "../youtube.jsx";

// eslint-disable-next-line react/prop-types
const Details = ({id}) => {
    const {useGetAnimeById} = useAnime()
    const {data: single, isSuccess} = useGetAnimeById(id)
    return (
        <>
            {isSuccess && (
                <div>
                    <div className="text-sm">
                        <div className="font-bold ml-1 md:ml-0 mt-2 md:mt-0">
                            Synopsis
                        </div>
                        <div className="h-[1px] bg-black"></div>
                        {/* eslint-disable-next-line react/prop-types */}
                        <div className="mt-3 ml-1 md:ml-0 text-xs">{single?.attributes.synopsis}</div>

                        <div className="font-bold ml-1 md:ml-0 lg:pt-10 pt-4">
                            Description
                        </div>
                        <div className="h-[1px] bg-black"></div>
                        {/* eslint-disable-next-line react/prop-types */}
                        <div className="mt-3 ml-1 md:ml-0 text-xs">{single?.attributes.description}</div>
                        <div className="font-bold ml-1 md:ml-0 lg:pt-10">
                            Trailer
                        </div>
                        <div className="h-[1px] bg-black"></div>
                        <div className="flex justify-start items-center my-4">
                            <Youtube videoId={single.attributes.youtubeVideoId}/>
                        </div>
                    </div>
                </div>
            )
            }
        </>
    );
};

export default Details;