import React from 'react';
import Calendar from './intro-calendar-btn';
import Twitter from './intro-twitter';

const Intro = ({insights}) => {
    return (
        insights?
        <div className="wknd-insights-intro">
            <h1>Weekend Insights</h1>
            <div className="wknd-insights-info grey-bg">
                <Calendar/>
                <div className="container">
                    <h2>{insights.title}</h2>
                    <div className="body">
                        <p>{insights.body_text}</p>
                    </div>
                    <Twitter/>
                </div>
            </div>
        </div>
        :null
    )

}

export default Intro;
