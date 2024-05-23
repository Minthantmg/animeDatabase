// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import {useAnime} from "../../../hooks/useAnime.js";
import MainButton from "../MainButton.jsx";
import placeHolder from "../../assets/placeholder.png"
const AnimeList = () => {
    const {useGetAnimeList} = useAnime()
    const {data: anime, isSuccess} = useGetAnimeList()
    return (
        <div>
            {isSuccess && (
                <>
                    <div className="mx-4 lg:mx-52 grid gap-y-10 pt-28 py-8">
                        {anime.map((item) => (
                            <div key={item.id} className="lg:flex shadow-lg container">
                                <div className="lg:w-1/2">
                                    <div className="flex">
                                        <div className="w-1/3">
                                            <img src={item.attributes.posterImage?.original} alt="cover"
                                                 className="w-full rounded-r-lg pl-4 pt-4"/>
                                        </div>
                                        <div className="w-2/3 pl-4 pt-4">
                                            <div className="font-bold text-lg md:text-2xl font-mono">
                                                {item.attributes.titles.en_jp}
                                            </div>
                                            <div className="md:flex gap-1 text-sm text-gray-500 pt-2">
                                                <span>Duration : </span>
                                                <span>{item.attributes.startDate}</span>
                                                <span>~</span>
                                                <span>{item.attributes.endDate}</span>
                                            </div>
                                            <div className="flex gap-2 text-sm pt-2 text-gray-900">
                                                <div>
                                                    Status :
                                                </div>
                                                {item.attributes.status}
                                            </div>
                                            <div className="flex gap-2 pt-2 text-gray-900 text-sm">
                                                <div>
                                                    Total episodes :
                                                </div>
                                                {item.attributes.episodeCount}
                                            </div>
                                            <div className="flex gap-2 pt-2 text-gray-900 text-sm">
                                                <div>
                                                    Score :
                                                </div>
                                                <div className="flex gap-1">
                                                    <div>
                                                        {item.attributes.averageRating} / <span className="text-xs">100</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="flex gap-2 pt-2 text-gray-900 text-sm">
                                                <div>
                                                    Total view count :
                                                </div>
                                                <div className="flex gap-1">
                                                    {item.attributes.userCount}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="line-clamp-4 px-4 pt-2 mb-4">
                                        {item.attributes.description}
                                    </div>
                                    <div className="flex justify-end items-center pt-4">
                                        <Link to={`/detail/${item.id}`}>
                                            <MainButton
                                                color={`text-black`}
                                                bg={`bg-white`}
                                                text="view"
                                                hover={`hover:bg-yellow-400 hover:text-white`}
                                            />
                                        </Link>
                                    </div>
                                </div>
                                <div className="hidden md:block lg:w-1/2 rounded-r-lg image-container">
                                    <img
                                        src={item.attributes.coverImage?.original || placeHolder}
                                        alt="cover"
                                        className="w-full rounded-r-lg h-full"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default AnimeList;