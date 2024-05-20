// eslint-disable-next-line no-unused-vars
import React from 'react';
import {useAnime} from "../../../../hooks/useAnime.js";

// eslint-disable-next-line react/prop-types
const Episodes = ({id}) => {
    const {useGetEpisodes} = useAnime()
    const {data:episode} = useGetEpisodes(id)
    console.log(episode)
    return (
        <div>
            <span>Synopsis</span>
        </div>
    );
};

export default Episodes;