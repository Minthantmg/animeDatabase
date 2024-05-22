// eslint-disable-next-line no-unused-vars
import React, {useEffect, useState} from 'react';
import {useAnime} from '../../../../hooks/useAnime.js';
import placeHolder from "../../../assets/placeholder.png";

// eslint-disable-next-line react/prop-types
const Characters = ({id}) => {
    const [data, setData] = useState({});
    const {useGetCharacterById} = useAnime();
    const {data: character, isSuccess} = useGetCharacterById(id);

    const getCharacter = async (dataId) => {
        try {
            const response = await fetch(`https://kitsu.io/api/edge/media-characters/${dataId}/character`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setData(prevData => ({...prevData, [dataId]: result.data})); // Ensure 'result.data' matches the API response structure
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (character && Array.isArray(character)) {
            character.forEach(item => {
                getCharacter(item.id);
            });
        }
    }, [character]);

    return (
        <>
            {isSuccess && (
                <div className="text-sm">
                    <span className="font-bold">Characters & Voice Actors</span>
                    <div className="h-[1px] bg-black"></div>
                    <div>
                        {character.map(item => (
                            <div key={item.id} className="p-2">
                                {data[item.id] && (
                                    <>
                                        <div className="flex justify-between">
                                            <div>
                                                <div>
                                                    <span className="font-bold pr-1">Name:</span>
                                                    {data[item.id]?.attributes?.names?.en}
                                                </div>
                                                <div>
                                                    <span className="font-bold pr-1">Japanese:</span>
                                                    {data[item.id]?.attributes?.names?.ja_jp}
                                                </div>
                                                <div className="flex">
                                                    <div className="font-bold pr-1">Other Names:</div>
                                                    {data[item.id]?.attributes?.otherNames.map((otherName, index) => (
                                                        <span key={otherName}>
                                                            {otherName}
                                                            {index < data[item.id]?.attributes?.otherNames.length - 1 && ', '}
                                                        </span>
                                                    ))}
                                                </div>

                                            </div>
                                            <div className="h-32">
                                                <img src={data[item.id]?.attributes?.image?.original || placeHolder}
                                                     alt="character_img" className="w-20 h-32 mb-4"/>
                                            </div>
                                        </div>
                                        <div className="h-[1px] bg-black mt-4"></div>
                                    </>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </>
    );
};

export default Characters;
