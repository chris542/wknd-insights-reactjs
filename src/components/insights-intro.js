import React from 'react';
import Calendar from './calendar-btn';
import Twitter from './insights-twitter';

const Intro = () => {
    const description = "Elit a laboriosam quos expedita magnam incidunt soluta? Dolores repellendus ut nihil molestiae asperiores, sequi Quae re";

    return (
        <div className="wknd-insights-intro">
            <h1>Weekend Insights</h1>
            <div className="wknd-insights-info grey-bg">
                <Calendar/>
                <div className="container">
                    <h2>23 - 25 Nov 2018</h2>
                    <div className="body">
                        <p>{description}</p>
                    </div>
                    <Twitter/>
                </div>
            </div>
        </div>
    )

}

export default Intro;
