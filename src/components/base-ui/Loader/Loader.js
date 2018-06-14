import React from 'react';
import './Loader.scss';

function Loader () {
    return (
        <div className="loader">
            <div className="loader__dot"></div>
            <div className="loader__dot"></div>
            <div className="loader__dot"></div>
        </div>
    )
}

export default Loader;
