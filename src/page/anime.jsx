import React from 'react';
import {useAnime} from "../../hooks/useAnime.js";

const Anime = () => {
    const {useGetAnimeList} = useAnime()
    const {data: anime, isSuccess, isError, isLoading} = useGetAnimeList()
    return (
        <>
            {isSuccess && (
                <>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 gap-y-10 md:pt-32">
                        {anime.map((item) => (
                            <div key={item.id} className="flex flex-col">
                                <div>
                                    {item.id}
                                </div>
                                <div>
                                    {item.attributes.titles.en_jp}
                                </div>
                                <div>
                                    {item.attributes.description}
                                </div>
                                <div>
                                    {item.attributes.averageRating}
                                </div>
                                <div>
                                    {item.attributes.userCount}
                                </div>
                                <div>
                                    {item.attributes.favoritesCount}
                                </div>
                                <div>
                                    {item.attributes.startDate}
                                </div>
                                <div>
                                    {item.attributes.endDate}
                                </div>
                                <div>
                                    {item.attributes.popularityRank}
                                </div>
                                <div>
                                    {item.attributes.ageRatingGuide}
                                </div>
                                <div>
                                    {item.attributes.status}
                                </div>
                                <div>
                                    {item.attributes.episodeCount}
                                </div>
                                <div>
                                    {item.attributes.youtubeVideoId}
                                </div>
                                {/*<img src={item.attributes.posterImage.tiny} alt="poster"/>*/}
                                {/*<img src={item.attributes.coverImage.tiny} alt="cover"/>*/}
                            </div>
                        ))}
                    </div>
                </>
            )}
        </>
    );
};

export default Anime;