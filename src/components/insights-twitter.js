import React from 'react';

const Twitter = () => {
    const message = "hi";
    const url = `hihttp://twitter.com/home?status=${message}`;
    return (
        <a className="tweet-insights" href={url} target="_blank" rel="noopener noreferrer">
            <svg className="tweet-insights-icon">
                <path className="icon-path" xmlns="http://www.w3.org/2000/svg" d="M23.23 3.035a9.167 9.167 0 0 1-2.648.726 4.616 4.616 0 0 0 2.026-2.55 9.223 9.223 0 0 1-2.926 1.12 4.607 4.607 0 0 0-7.85 4.203 13.082 13.082 0 0 1-9.497-4.815 4.584 4.584 0 0 0-.624 2.317c0 1.598.815 3.01 2.05 3.835a4.594 4.594 0 0 1-2.086-.577v.058a4.61 4.61 0 0 0 3.696 4.52 4.632 4.632 0 0 1-2.08.078 4.612 4.612 0 0 0 4.302 3.2 9.243 9.243 0 0 1-5.72 1.973c-.373 0-.74-.02-1.1-.064a13.038 13.038 0 0 0 7.062 2.07c8.475 0 13.11-7.02 13.11-13.11 0-.2-.005-.398-.014-.596a9.332 9.332 0 0 0 2.3-2.384z" fill="#000"/>
            </svg>
        </a>
    )
}

export default Twitter;
