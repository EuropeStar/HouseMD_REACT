import React from 'react';
import Loader from "./Loader";

function ResearchLoader(props) {
    return (
        <div id='res-loader'>
            <div id="loader-wrapper">
                <Loader/>
            </div>
            <h3 className={'text-centered'}>Counting probabilities...</h3>
        </div>
    )
}

export default ResearchLoader