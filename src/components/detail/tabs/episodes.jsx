// eslint-disable-next-line no-unused-vars
import React from 'react';
import {useAnime} from "../../../../hooks/useAnime.js";

// eslint-disable-next-line react/prop-types
const Episodes = ({id}) => {
    const {useGetEpisodes} = useAnime()
    const {data: episode, isSuccess} = useGetEpisodes(id)
    console.log(episode)

    function formatDate(dateString) {
        const date = new Date(dateString);
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    }
    return (
        <div>
            {isSuccess && (
                <>
                    <span>Episodes ({episode.length})</span>
                    <div className="h-[1px] bg-black"></div>
                    <div className="my-2">
                        {episode.map((item, index) => (
                            <div key={index} className="my-2">
                                <div className="md:flex justify-between">
                                    <div className="flex">
                                        <div>
                                            {index + 1}.
                                        </div>
                                        <div className="ml-2">
                                            <div className="font-bold text-blue-500">
                                                {item.attributes.titles.en_us}
                                            </div>
                                            <div className="text-xs mb-2">
                                                {item.attributes.titles.ja_jp}
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="ml-6 md:ml-0 mb-4 md:mb-0">Aired: <span className="text-sm">{formatDate(item.attributes.airdate)}</span></div>
                                    </div>
                                </div>
                                <div className="h-[1px] bg-black"></div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Episodes;