// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import {tabs} from "./constant.js";
import Details from "./tabs/details.jsx";
import Characters from "./tabs/characters.jsx";
import Episodes from "./tabs/episodes.jsx";
import Stat from "./tabs/stat.jsx";


// eslint-disable-next-line no-unused-vars,react/prop-types
const Description = ({id}) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="tabs lg:p-2">
            <ul className="md:flex mt-4 gap-4">
                {tabs.map((tab, index) => (
                    <div
                        key={index}
                        className={`px-6 py-2 my-2 md:my-0 mx-16 md:mx-0 cursor-pointer border rounded-lg text-xs md:text-sm flex justify-center md:justify-between hover:bg-gray-100 ${
                            activeTab === index ? 'border-yellow-400 text-yellow-400' : 'border-gray-300'
                        }`}
                        onClick={() => handleClick(index)}
                    >
                        {tab.label}
                        {/* Add a responsive icon here (optional) */}
                    </div>
                ))}
            </ul>
            <div className="lg:pt-4">
                {activeTab === 0 ? <Details id={id}/> : activeTab === 1 ? <Characters id={id}/> : activeTab === 2 ?
                    <Episodes
                        id={id}/> :
                    <Stat id={id}/>}
            </div>
        </div>
    );
};

export default Description;