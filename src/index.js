import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Insights from './components/insights';
import Intro from './components/intro';
import './scss/main.scss';
import JSON from './db.json';

const insights = JSON.map((insights, index)=>{
    return <Insights key={index} insights={insights}/>
})

class WeekendInsights extends Component {
    render(){
        return (
            <section className="two-col section-grid weekend-insights">
                <Intro />
                {insights}
            </section>
        )
    }

}

ReactDOM.render(<WeekendInsights />, document.getElementById('root'));
