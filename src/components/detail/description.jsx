// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import {tabs} from "./constant.js";



const Description = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleClick = (index) => {
        setActiveTab(index);
    };

    return (
        <div className="tabs">
            <ul className="flex gap-4 mt-4">
                {tabs.map((tab, index) => (
                    <li key={index}
                        className={`px-4 py-2 cursor-pointer ${activeTab === index ? 'bg-yellow-400 pt-2 mx-2 rounded-t-lg' : ''}`}
                        onClick={() => handleClick(index)}>
                        {tab.label}
                    </li>
                ))}
            </ul>
            <div className="h-[1px] bg-black"></div>
            <div className="tabs-content">
                {tabs.map((tab, index) => (
                    <div key={index} className={`${activeTab === index ? 'active' : 'hidden'}`}>
                        {activeTab === index && tab.content} {/* Only render content if active */}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Description;