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
            <ul className="flex mt-4 gap-4">
                {tabs.map((tab, index) => (
                    <li key={index}
                        className={`px-6 py-2 cursor-pointer border rounded-lg text-sm 
                        ${activeTab === index ? 'border-yellow-400 text-yellow-400' : 'border-gray-300'}`}
                        onClick={() => handleClick(index)}>
                        {tab.label}
                    </li>
                ))}
            </ul>
            <div className="lg:pt-4">
                {activeTab === 0 ? <Details id={id}/> : activeTab === 1 ? <Characters id={id}/> : activeTab === 2 ?
                    <Episodes
                        id={id}/> :
                    <Stat/>}
            </div>
        </div>
    );
};

export default Description;