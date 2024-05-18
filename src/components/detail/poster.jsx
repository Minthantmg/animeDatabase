// eslint-disable-next-line no-unused-vars
import React from 'react';

// eslint-disable-next-line no-unused-vars,react/prop-types
const Poster = ({ single }) => {
    if (!single) return null;

    // eslint-disable-next-line no-unused-vars
    function formatDate(dateString) {
        const date = new Date(dateString);
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
    }

    // eslint-disable-next-line no-unused-vars,react/prop-types
    const imageUrl = single?.attributes?.posterImage?.original;
    return (
        <div className="text-sm">
            <div className="p-2">
                <img src={imageUrl} alt="cover"/>
            </div>
            <div className="font-bold">
                Alternative Titles
            </div>
            <div className="h-[1px] bg-black"></div>
            <div className="lg:pb-8">
                <div className="flex">
                    <span>Synonyms:</span>
                    {/* eslint-disable-next-line react/prop-types */}
                    <span className="pl-1">{single?.attributes.titles.en_jp}</span>
                </div>
                <div className="flex">
                    <span>Japanese:</span>
                    {/* eslint-disable-next-line react/prop-types */}
                    <span className="pl-1">{single?.attributes.titles.ja_jp}</span>
                </div>
                <div className="flex">
                    <span>English:</span>
                    {/* eslint-disable-next-line react/prop-types */}
                    <span className="pl-1">{single?.attributes.titles.en}</span>
                </div>
            </div>

            <div className="font-bold">
                Information
            </div>
            <div className="h-[1px] bg-black"></div>
            <div className="lg:pb-8">
                <div className="flex">
                    <span>Type:</span>
                    {/* eslint-disable-next-line react/prop-types */}
                    <span className="text-blue-500 pl-1">{single?.attributes.showType}</span>
                </div>
                <div className="flex">
                    <span>Episodes:</span>
                    {/* eslint-disable-next-line react/prop-types */}
                    <span className="pl-1">{single?.attributes.episodeCount}</span>
                </div>
                <div className="flex">
                    <span>Status:</span>
                    {/* eslint-disable-next-line react/prop-types */}
                    <span className="pl-1">{single?.attributes.status}</span>
                </div>
                <div className="flex">
                    <span>Aired:</span>
                    {/* eslint-disable-next-line react/prop-types */}
                    <span
                        className="pl-1">{single?.attributes.startDate && formatDate(single.attributes.startDate)}</span>
                    <span className="px-1">to</span>
                    {/* eslint-disable-next-line react/prop-types */}
                    <span>{single?.attributes.endDate && formatDate(single.attributes.endDate)}</span>
                </div>
                <div className="flex">
                    <span>Source:</span>
                    {/* eslint-disable-next-line react/prop-types */}
                    <span className="pl-1">Manga</span>
                </div>
                <div className="flex">
                    <span>Rating:</span>
                    {/* eslint-disable-next-line react/prop-types */}
                    <span className="pl-1">{single?.attributes.ageRating} - {single?.attributes.ageRatingGuide}</span>
                </div>
            </div>

            <div className="font-bold">
                Statistics
            </div>
            <div className="h-[1px] bg-black"></div>
            <div className="lg:pb-8">
                <div className="flex">
                    <span>Score:</span>
                    {/* eslint-disable-next-line react/prop-types */}
                    <span className="pl-1">{single?.attributes.averageRating}</span>
                </div>
                <div className="flex">
                    <span>Ranked:</span>
                    {/* eslint-disable-next-line react/prop-types */}
                    <span className="pl-1">{single?.attributes.ratingRank}</span>
                </div>
                <div className="flex">
                    <span>Popularity:</span>
                    {/* eslint-disable-next-line react/prop-types */}
                    <span className="pl-1">{single?.attributes.popularityRank}</span>
                </div>
            </div>
        </div>
    );
};

export default Poster;