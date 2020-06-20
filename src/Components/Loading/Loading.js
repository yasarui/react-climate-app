import React from 'react';
import './Loading.css';

const Loading = () => {
    return(
        <div className="ui segment loading-wrapper">
            <div className="ui active dimmer">
                <div className="ui text loader">Loading</div>
            </div>
        </div>
    )
}

export default Loading;