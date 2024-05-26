// eslint-disable-next-line no-unused-vars
import React, {useEffect, useRef} from 'react';
import {useAnime} from "../../../../hooks/useAnime.js";


// eslint-disable-next-line no-unused-vars,react/prop-types
const Stat = ({id}) => {
    const {useGetAnimeById} = useAnime()
    const {data: stat, isSuccess} = useGetAnimeById(id)
    console.log(stat)

    function numberWithCommas(x) {
        if (typeof x === 'number') {
            return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        } else {
            return x;
        }
    }

    return (
        <>
            {isSuccess && (
                <div className="text-sm">
                    <div className="font-bold ml-1 md:ml-0">
                        Summary Stats
                    </div>
                    <div className="h-[1px] bg-black"></div>
                    <div className="mt-1 ml-1 md:ml-0">
                            <span
                                className="font-bold">Watching</span>: <span>{numberWithCommas(stat.attributes.userCount)}</span>
                    </div>
                    <div className="mt-1 ml-1 md:ml-0">
                        <span
                            className="font-bold">Favorite</span>: <span>{numberWithCommas(stat.attributes.favoritesCount)}</span>
                    </div>
                    <div className="font-bold mt-4 ml-1 md:ml-0">
                        Score Stats
                    </div>
                    <div className="h-[1px] bg-black"></div>
                    <div className="mt-1 ml-1 md:ml-0">
                        <span
                            className="font-bold">Popularity Rank</span>: <span>{stat.attributes.popularityRank}</span>
                    </div>
                    <div className="mt-1 ml-1 md:ml-0">
                        <span
                            className="font-bold">Score</span>: <span>{stat.attributes.averageRating}</span>
                    </div>
                    <div className="mt-1 ml-1 md:ml-0">
                        <span
                            className="font-bold">Total Episodes</span>: <span>{stat.attributes.episodeCount}</span>
                    </div>
                </div>
            )
            }
        </>
    );
};

export default Stat;