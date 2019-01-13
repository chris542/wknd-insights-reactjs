import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Insights from './components/insights';
import Intro from './components/intro';
import './scss/main.scss';
//import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';

class WeekendInsights extends Component {
    state ={
        insights : [],
    }
    componentDidMount() {
        fetch(`http://localhost:3004/weekend-insights`)
            .then(response=>response.json())
            .then(data=> {
                this.setState({ insights: data })
            })
    }
    renderIntro(){
        let wi = this.state.insights[0];
        return <Intro insights={wi}/>
    }
    renderInsights(){
        let wi = this.state.insights[0];
        return wi
            ?  wi.graph.map((insights,index)=>{
                return <Insights key={index} insights={insights}/>
            }):null;
    }
    render(){
        return (
            <section className="two-col section-grid weekend-insights">
                {this.renderIntro()}
                {this.renderInsights()}
            </section>
        )
    }

}

ReactDOM.render(<WeekendInsights />, document.getElementById('root'));
