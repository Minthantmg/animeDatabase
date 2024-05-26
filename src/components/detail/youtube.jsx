// eslint-disable-next-line no-unused-vars
import React from 'react';
import YouTube from "react-youtube";


// eslint-disable-next-line react/prop-types
const Youtube = ({ videoId }) => {
    const opts = {
        height: '200',
        width: '300',
        playerVars: {
            autoplay: 0,
        },
    };
    return (
        <div>
            <YouTube videoId={videoId} opts={opts}/>
        </div>
    );
};

export default Youtube;