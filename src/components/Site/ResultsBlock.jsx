import React from 'react';
import './site-styles/resultsBlock.css'
import ResultsSwiper from "@components/Site/ResultsSwiper.jsx";

const ResultsBlock = () => {
    return (
        <div className='results-block' id='testimonials'>
            <div className="site-content">
                <h2>Real results
                    Unique journeys</h2>
            </div>
            <ResultsSwiper/>
        </div>
    );
};

export default ResultsBlock;