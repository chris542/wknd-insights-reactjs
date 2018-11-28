import React from 'react';
import Header from './panel-header';
import Stats from './panel-stats';

const Insights = ({insights}) => {
    return (
        <div className="insights-panel">
            <div className="container">
                <Header insights={insights}/>
                <Stats insights={insights}/>
            </div>
        </div>
    )
};

export default Insights;
