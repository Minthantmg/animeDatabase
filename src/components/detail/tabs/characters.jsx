// eslint-disable-next-line no-unused-vars
import React from 'react';
import {useAnime} from "../../../../hooks/useAnime.js";

// eslint-disable-next-line react/prop-types
const Characters = ({id}) => {

    const {useGetCharacterById} = useAnime()

    const {data: character} = useGetCharacterById(id)
    return (
        <div className="text-sm">
            <span className="font-bold">
                Characters & Voice Actors
            </span>
            <div className="h-[1px] bg-black"></div>
            <div>
                {character?.map((character, index) => (
                    <div key={index}>
                        {character?.id}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Characters;