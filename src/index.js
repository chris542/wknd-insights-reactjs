import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Insights from './components/insights';
import JSON from './db.json';

class WeekendInsights extends Component {
    render(){
        const insights = JSON.map((insights, index)=>{
            return <Insights key={index} insights={insights}/>
        })
        return (
            <div>
                {insights}
            </div>
        )
    }

}

ReactDOM.render(<WeekendInsights />, document.getElementById('root'));
